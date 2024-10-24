"use client";

import { Track } from "@/types";
import Image from "next/image";
import { useTrack } from "../context/AudioContext";

interface TrackListProps {
  tracks: Track[];
}

export default function TrackList({ tracks }: TrackListProps) {
  const { setCurrentTrack } = useTrack();

  const handleTrackClick = (track: Track) => {
    setCurrentTrack(track);
  };

  return (
    <ul>
      {tracks.map((track) => (
        <li
          key={track.id}
          className="flex items-center mb-4 cursor-pointer"
          onClick={() => handleTrackClick(track)}
        >
          <Image
            src={track.image_url || "/track.png"}
            alt={track.name}
            className="w-16 h-16 mr-4"
            width={64}
            height={64}
          />
          <div>
            <p className="font-semibold">{track.name}</p>
            <p className="text-sm">{track.artists.join(", ")}</p>{" "}
          </div>
        </li>
      ))}
    </ul>
  );
}
