"use client";

import Image from "next/image";
import { Track } from "@/types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import { useTrack } from "../context/AudioContext";

interface TrackListProps {
  tracks: Track[];
}

export default function TrackList({ tracks }: TrackListProps) {
  const { setCurrentTrack, setAllTracks, likedTracks, toggleLikeTrack } =
    useTrack();

  useEffect(() => {
    setAllTracks(tracks);
  }, [tracks, setAllTracks]);

  const isLiked = (trackId: string) => {
    return likedTracks.some((track) => track.id === trackId);
  };

  return (
    <div className="w-full bg-black/70 p-6 shadow-md">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-sm text-gray-300 border-b border-gray-500">
            <th className="p-2">#</th>
            <th className="p-2">Title</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Like</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <tr key={track.id} className="cursor-pointer hover:bg-gray-800">
              <td
                className="p-2 text-gray-200"
                onClick={() => setCurrentTrack(track)}
              >
                {index + 1}
              </td>
              <td
                className="flex items-center p-2"
                onClick={() => setCurrentTrack(track)}
              >
                <Image
                  src={track.image_url || "/track.png"}
                  alt={track.name}
                  width={50}
                  height={50}
                  className="mr-4 rounded-sm"
                />
                <div>
                  <p className="text-white">{track.name}</p>
                  <p className="text-sm text-gray-400">
                    {track.artists.join(", ")}
                  </p>
                </div>
              </td>
              <td
                className="p-2 text-gray-200"
                onClick={() => setCurrentTrack(track)}
              >
                {Math.floor(track.duration_ms / 60000)}:
                {((track.duration_ms % 60000) / 1000)
                  .toFixed(0)
                  .padStart(2, "0")}
              </td>
              <td className="p-2 text-gray-200">
                <button
                  onClick={() => toggleLikeTrack(track)}
                  className="text-2xl"
                >
                  {isLiked(track.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-red-500" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
