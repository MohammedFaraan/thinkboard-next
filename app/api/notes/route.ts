import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import { Note } from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // 1️⃣ Get the current session
    // const session = await auth();
    // if (!session?.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const userId = "688f1aba61ba7a5b2301401f"; //session.user.id;

    await connectDB();
    const notes = await Note.find({ userId: userId }).sort({ updatedAt: -1 });
    return NextResponse.json(notes);
  } catch (error) {
    console.log("Error while fetching notes", error);
    return NextResponse.json(
      { error: "Internal sever error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1️⃣ Get the current session
    // const session = await auth();
    // if (!session?.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const userId = "688f1aba61ba7a5b2301401f"; //session.user.id;

    await connectDB();
    const { title, content, tags } = await request.json();

    if (!title) {
      return NextResponse.json(
        { error: "Missing notes title!" },
        { status: 400 }
      );
    }

    const note = await Note.create({ userId, title, content, tags });
    return NextResponse.json({ message: "Note created!" }, { status: 201 });
  } catch (error) {
    console.log("Error while creating note", error);
    return NextResponse.json(
      { error: "Internal sever error" },
      { status: 500 }
    );
  }
}
