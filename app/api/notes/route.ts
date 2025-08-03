import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { Note } from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";


export  async function GET() {
  await connectDB();
  const notes = await Note.find().sort({updatedAt: -1});
  return NextResponse.json(notes);
}

export  async function POST(request: NextRequest) {
    // 1️⃣ Get the current session
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = "688f1aba61ba7a5b2301401f"; //session.user.id;

  await connectDB();
  const { title, content, tags} = await request.json();

  if (!title) {
    return NextResponse.json({error: "Missing notes title!"}, {status: 400})
  }

  const note = await Note.create({userId, title, content, tags});
  return NextResponse.json(note, {status: 201});
}