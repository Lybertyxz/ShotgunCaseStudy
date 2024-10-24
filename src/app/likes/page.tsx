import { getLikes } from "@/lib/db";
import { Track } from "@/types";
import Header from "../components/Header";
import TrackList from "../components/TrackList";

export const revalidate = 0;

export default async function LikesPage() {
  const userId = "user123";
  const likedTracks: Track[] = await getLikes(userId);

  return (
    <main className="p-0">
      <Header
        title="Liked Tracks"
        picture_url="/track.png"
        linkpage={{ href: "/", label: "Go to All Tracks" }}
        subinfo={`${likedTracks.length} Songs`}
      />

      <section className="p-6 bg-gradient-to-b from-transparent via-black/70 to-black/90 min-h-[calc(100vh-18rem)]">
        {likedTracks.length > 0 ? (
          <TrackList tracks={likedTracks} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">No liked tracks yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}
