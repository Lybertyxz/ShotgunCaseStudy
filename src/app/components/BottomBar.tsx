"use client";

import { useEffect, useRef } from "react";
import { useTrack } from "../context/AudioContext";

export default function BottomBar() {
  const { currentTrack } = useTrack();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentTrack?.preview_url && audioRef.current) {
      audioRef.current.src = currentTrack.preview_url;
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
      {currentTrack ? (
        <div className="flex items-center">
          <img
            src={currentTrack.image_url || "/track.png"}
            alt={currentTrack.name}
            width={64}
            height={64}
            className="w-12 h-12 mr-4"
          />
          <div>
            <p>{currentTrack.name}</p>
            <p className="text-sm">{currentTrack.artists.join(", ")}</p>
          </div>
          {currentTrack.preview_url ? (
            <audio ref={audioRef} controls className="ml-auto">
              <source src={currentTrack.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p className="ml-auto text-red-500">No preview available</p>
          )}
        </div>
      ) : (
        <p>No song playing</p>
      )}
    </footer>
  );
}
