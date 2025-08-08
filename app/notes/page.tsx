"use client";
import NoteCard from "@/components/NoteCard";
import axios from "axios";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";

export default function Notes() {
  interface CardInterface {
    _id: string;
    title: string;
    content: string;
    userID: string;
    createdAt: Date;
    updatedAt: Date;
  }
  const [notes, setNotes] = useState<CardInterface[]>([]);
  const fetchNotes = () => {
    try {
      axios.get(API_URL).then((res) => setNotes(res.data));
    } catch (err) {
      console.log(err);
      alert("Error while fetching notes");
    }
  };

  useEffect(() => {
    document.title = "ThinkBoard - Notes";
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="relative p-4 flex-1">
      <h1 className="text-2xl font-bold mb-6 text-center">All Notes</h1>

      {/* Replace below with actual note cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard details={note} setNotes={setNotes} key={index} />
          ))
        ) : (
          <div className="text-xl font-medium mt-5 ">No notes found</div>
        )}
      </div>

      <div className="fixed flex gap-2 bottom-12 sm:bottom-20 right-4 md:right-10 drop-shadow-lg ">
        <Link href="/notes/create" className="btn rounded-xl ">
          <SquarePen />
          <span className="text-lg">Create Note</span>
        </Link>
      </div>
    </div>
  );
}

