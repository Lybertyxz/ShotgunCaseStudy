import { getTracks } from "@/lib/db";
import { Track } from "@/types";
import Header from "./components/Header";
import TrackList from "./components/TrackList";

export const revalidate = 0;

export default async function Home() {
  const tracks: Track[] = await getTracks();

  return (
    <main>
      <Header
        title="All Tracks"
        picture_url="/track.png"
        linkpage={{ href: "/likes", label: "Go to Liked Tracks" }}
        subinfo={tracks.length + " Songs"}
      />

      <section className="bg-gradient-to-b from-transparent via-black/70 to-black/90">
        <TrackList tracks={tracks} />
      </section>
    </main>
  );
}
