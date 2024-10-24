import { NextRequest, NextResponse } from "next/server";
import { likeTrack } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { trackId, userId } = await req.json();
  try {
    await likeTrack(trackId, userId || "test_user");
    return NextResponse.json(
      { message: "Track liked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error liking track:", error);
    return NextResponse.json(
      { message: "Failed to like track" },
      { status: 500 }
    );
  }
}
