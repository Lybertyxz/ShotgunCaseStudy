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
  setCurrentTrack: (track: Track) => void;
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
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const userId = "user123";

  useEffect(() => {
    const loadLikes = async () => {
      const likes = await getLikes(userId);
      setLikedTracks(likes);
    };
    loadLikes();
  }, [userId]);

  const playNextTrack = () => {
    if (currentTrack && allTracks.length > 0) {
      const currentIndex = allTracks.findIndex(
        (track) => track.id === currentTrack.id
      );
      const nextIndex = (currentIndex + 1) % allTracks.length;
      setCurrentTrack(allTracks[nextIndex]);
    }
  };

  const playPreviousTrack = () => {
    if (currentTrack && allTracks.length > 0) {
      const currentIndex = allTracks.findIndex(
        (track) => track.id === currentTrack.id
      );
      const previousIndex =
        (currentIndex - 1 + allTracks.length) % allTracks.length;
      setCurrentTrack(allTracks[previousIndex]);
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

  return (
    <TrackContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
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
