"use client";

import React from "react";

type TrackItemProps = {
  trackId: string;
  trackName: string;
  artist: string;
  previewUrl: string;
};

const TrackItem: React.FC<TrackItemProps> = ({
  trackId,
  trackName,
  artist,
  previewUrl,
}) => {
  const handleLike = async () => {
    try {
      const response = await fetch("/api/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId, userId: "test_user" }),
      });
      if (!response.ok) throw new Error("Failed to like track");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="mb-4">
      <span className="font-bold">{trackName}</span> by {artist}
      <audio controls>
        <source src={previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
        onClick={handleLike}
      >
        Like
      </button>
    </li>
  );
};

export default TrackItem;
