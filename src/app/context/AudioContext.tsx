"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Track } from "@/types";
import { getLikes, likeTrack, unlikeTrack } from "@/lib/db";

interface TrackContextType {
  currentTrack: Track | null;
  setCurrentTrackByIndex: (index: number) => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  allTracks: Track[];
  setAllTracks: (tracks: Track[]) => void;
  likedTracks: Track[];
  toggleLikeTrack: (track: Track) => Promise<void>;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export function TrackProvider({ children }: { children: ReactNode }) {
  const [allTracks, setAllTracks] = useState<Track[]>([]);
  const [likedTracks, setLikedTracks] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const userId = "user123"; // This should be replaced with a real user ID from session or context

  // Load liked tracks initially
  useEffect(() => {
    const loadLikes = async () => {
      const likes = await getLikes(userId);
      setLikedTracks(likes);
    };
    loadLikes();
  }, [userId]);

  const setCurrentTrackByIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const playNextTrack = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % allTracks.length;
      setCurrentIndex(nextIndex);
    }
  };

  const playPreviousTrack = () => {
    if (currentIndex !== null) {
      const previousIndex =
        (currentIndex - 1 + allTracks.length) % allTracks.length;
      setCurrentIndex(previousIndex);
    }
  };

  const toggleLikeTrack = async (track: Track) => {
    if (likedTracks.some((likedTrack) => likedTrack.id === track.id)) {
      await unlikeTrack(track.id, userId);
      setLikedTracks((prevLikes) =>
        prevLikes.filter((likedTrack) => likedTrack.id !== track.id)
      );
    } else {
      await likeTrack(track.id, userId);
      setLikedTracks((prevLikes) => [...prevLikes, track]);
    }
  };

  const currentTrack = currentIndex !== null ? allTracks[currentIndex] : null;

  return (
    <TrackContext.Provider
      value={{
        currentTrack,
        setCurrentTrackByIndex,
        playNextTrack,
        playPreviousTrack,
        allTracks,
        setAllTracks,
        likedTracks,
        toggleLikeTrack,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error("useTrack must be used within a TrackProvider");
  }
  return context;
}
