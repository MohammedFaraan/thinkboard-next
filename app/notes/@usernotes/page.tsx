"use client"
import NoteCard from "@/components/NoteCard";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = `http://localhost:3000/api/notes`;
console.log("url", process.env.NEXT_URL)

// app/notes/@usernotes/page.tsx
export default function NotesMainContent() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    try {
      axios.get(API_URL).then((res) => setNotes(res.data));
      
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [])
  
  console.log(notes)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Notes</h1>
      {/* Replace below with actual note cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          notes && notes.length > 0 ? (
            notes.map((note, index) => (
              <NoteCard details={note} key={index}/>
            ))
          ) : (<div>No notes found</div>)
        }
      </div>
    </div>
  );
}
