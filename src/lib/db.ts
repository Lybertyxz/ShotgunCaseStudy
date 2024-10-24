"use server";

import { sql } from "@vercel/postgres";
import { Track } from "@/types";

export const getTracks = async () => {
  const tracksQuery = await sql`
    SELECT t.id, t.name, t.preview_url, t.duration_ms, t.image_url, array_agg(a.name) as artists
    FROM tracks t
    JOIN track_artists ta ON t.id = ta.track_id
    JOIN artists a ON ta.artist_id = a.id
    GROUP BY t.id
  `;
  return tracksQuery.rows as Track[];
};

export const likeTrack = async (
  trackId: string,
  userId: string
): Promise<void> => {
  await sql`
    INSERT INTO liked_tracks (user_id, track_id)
    VALUES (${userId}, ${trackId})
    ON CONFLICT (user_id, track_id) DO NOTHING
  `;
};

export const unlikeTrack = async (
  trackId: string,
  userId: string
): Promise<void> => {
  await sql`
    DELETE FROM liked_tracks
    WHERE user_id = ${userId} AND track_id = ${trackId}
  `;
};

export const getLikes = async (userId: string): Promise<Track[]> => {
  const likesQuery = await sql`
    SELECT t.id, t.name, t.preview_url, t.duration_ms, t.image_url, array_agg(a.name) AS artists
    FROM liked_tracks lt
    JOIN tracks t ON lt.track_id = t.id
    JOIN track_artists ta ON t.id = ta.track_id
    JOIN artists a ON ta.artist_id = a.id
    WHERE lt.user_id = ${userId}
    GROUP BY t.id
  `;
  return likesQuery.rows as Track[];
};
