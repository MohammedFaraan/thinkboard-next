"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { title } from "process";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";

function NoteDetailsPage() {
  const [note, setNote] = useState({title: "", content: ""});
  const params = useParams();
  console.log(params.id);

  const fetchNote = async () => {
    let noteId = params.id;

    try {
      axios
        .get(API_URL + `/${noteId}`)
        .then((res) => setNote(res.data))
        .catch((err) => console.log(err.response.data.message));
    } catch (error) {
      alert("Error while fetching notes" + error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  console.log(note)
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <form className="flex flex-col gap-2 bg-base-200 border-base-300 rounded-box w-full sm:w-xl md:w-2xl border p-6">
        <div>
          <label className="label">Title</label>
          <input value={note?.title}  className="input w-full" placeholder="Email" />
        </div>
        <div>
          <label className="label ">Content</label>
          <input
          value={note?.content}
            className="input w-full"
            placeholder="Content"
          />
        </div>

        <button className="btn btn-neutral mt-4 rounded-xl">Save</button>
      </form>
    </div>
  );
}

export default NoteDetailsPage;
