import { connectDB } from "@/lib/db";
import { Note } from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // or parse id from URL search params
    console.log(url);
    console.log(id);
    await connectDB();
    const note = await Note.find({ _id: id });

    if (!note || note.length === 0)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json(note[0]);
  } catch (error) {
    console.error("Error while fetching note", error);
    return NextResponse.json(
      { error: "Internal sever error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    // const { id } = await params;
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // or parse id from URL search params
    console.log(url);
    console.log(id);
    await connectDB();
    const { title, content } = await req.json();

    if (!title) {
      return NextResponse.json(
        { error: "Missing notes title!" },
        { status: 400 }
      );
    }
    const note = await Note.findOneAndUpdate({ _id: id }, { title, content });

    if (!note)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json({ message: "Note updated!" }, { status: 201 });
  } catch (error) {
    console.error("Error while updating note", error);
    return NextResponse.json(
      { error: "Internal sever error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await connectDB();

    const note = await Note.findOneAndDelete({ _id: id });

    if (!note)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json({ message: "Note deleted!" }, { status: 201 });
  } catch (error) {
    console.error("Error while deleting note", error);
    return NextResponse.json(
      { error: "Internal sever error" },
      { status: 500 }
    );
  }
}
