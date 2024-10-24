import { getTracks } from "@/lib/db";
import { Track } from "@/types";
import TrackList from "./components/TrackList";

export const revalidate = 0;

export default async function Home() {
  const tracks: Track[] = await getTracks();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Tracks</h1>
      <TrackList tracks={tracks} />
    </main>
  );
}
