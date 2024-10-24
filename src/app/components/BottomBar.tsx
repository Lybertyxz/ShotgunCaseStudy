"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";
import { useTrack } from "../context/AudioContext";

export default function BottomBar() {
  const { currentTrack, playNextTrack, playPreviousTrack } = useTrack();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
        setCurrentTime(currentTime);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [audioRef.current]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.preview_url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressContainerRef.current && audioRef.current) {
      const rect = progressContainerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = clickX / rect.width;
      audioRef.current.currentTime = newProgress * audioRef.current.duration;
    }
  };

  useEffect(() => {
    const handleTrackEnded = () => {
      playNextTrack();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleTrackEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleTrackEnded);
      }
    };
  }, [audioRef.current, playNextTrack]);

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg h-24">
      {currentTrack ? (
        <>
          <div className="flex items-center space-x-4 w-1/4 min-w-0">
            <Image
              src={currentTrack.image_url}
              alt={currentTrack.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="truncate">
              <p className="font-semibold truncate">{currentTrack.name}</p>
              <p className="text-sm text-gray-400 truncate">
                {currentTrack.artists.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/2 px-4 space-y-2">
            <div className="flex items-center space-x-6">
              <button
                onClick={playPreviousTrack}
                className="text-white text-2xl hover:text-green-400"
              >
                <FaStepBackward />
              </button>
              <button
                onClick={togglePlayPause}
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button
                onClick={playNextTrack}
                className="text-white text-2xl hover:text-green-400"
              >
                <FaStepForward />
              </button>
            </div>

            <div
              ref={progressContainerRef}
              className="flex items-center w-full space-x-2 cursor-pointer"
              onClick={handleProgressClick}
            >
              <span className="text-sm text-gray-400">
                {formatTime(currentTime)}
              </span>
              <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">
                {formatTime(currentTrack.duration_ms / 1000)}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-1/4 justify-end">
            <FaVolumeUp className="text-white" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 accent-blue-500"
            />
          </div>

          <audio ref={audioRef} controls style={{ display: "none" }}>
            <source src={currentTrack.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        <p>No song playing</p>
      )}
    </footer>
  );
}
