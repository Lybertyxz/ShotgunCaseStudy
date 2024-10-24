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
