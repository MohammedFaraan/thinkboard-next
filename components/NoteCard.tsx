"use client";

import { formatDate } from "@/lib/utils";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface CardInterface {
  _id: string;
  title: string;
  content: string;
  userID: string;
  createdAt: "";
  updatedAt: "";
}

const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";
type SetNotesType = Dispatch<SetStateAction<CardInterface[]>>;

function NoteCard({
  details,
  setNotes,
}: {
  details: CardInterface;
  setNotes: SetNotesType;
}) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(process.env.NEXT_PUBLIC_URL + `/notes/${details?._id}`);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      axios
        .delete(API_URL + `/${id}`)
        .then((res) => toast.success(res.data.message || "Note deleted", {autoClose: 2000}));
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      toast.error("Error :" + error);
    }
  };

  return (
    <div className="card card-border bg-base-100 shadow-lg shadow-accent w-full hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{details?.title}</h2>
        <p>{details?.content}</p>

        <div className="flex justify-between">
          <div className="flex flex-col justify-start text-gray-500">
            <span>Created At: </span>
            <span>{formatDate(new Date(details?.createdAt!))}</span>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-accent rounded-xl w-14"
              onClick={handleCardClick}
            >
              <Pencil />
            </button>
            <button
              className="btn btn-error rounded-xl w-14 text-white"
              onClick={() => handleDelete(details?._id)}
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
