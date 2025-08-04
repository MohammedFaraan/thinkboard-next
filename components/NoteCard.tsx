"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface CardInterface {
  _id: string
  title: string,
  content: string,
  userID: string,
}
const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";
type SetNotesType = Dispatch<SetStateAction<CardInterface[]>>;

function NoteCard({ details, setNotes }: { details: CardInterface, setNotes: SetNotesType }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(process.env.NEXT_PUBLIC_URL + `/notes/${details?._id}`)
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are your sure you want to delete this note?")) return
    console.log(id);

    try {
      axios.delete(API_URL + `/${id}`).then((res) => alert(res.data.message || "Note deleted"));
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      alert("Error :" + error);
    }
  }

  return (
    <div className="card card-border bg-base-100 shadow-lg w-full hover:shadow-xl" >
      <div className="card-body">
        <h2 className="card-title">{details?.title}</h2>
        <p>
          {details?.content}
        </p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-accent rounded-xl w-18" onClick={handleCardClick}>Edit</button>
          <button className="btn btn-error rounded-xl w-18" onClick={() => handleDelete(details?._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;