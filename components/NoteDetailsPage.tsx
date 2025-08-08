"use client";

import { formatDate } from "@/lib/utils";
import axios from "axios";
import { CircleArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";

function NoteDetailsPage() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const router = useRouter();

  const noteId = params.id;
  const fetchNote = useCallback(async () => {
    try {
      axios
        .get(API_URL + `/${noteId}`)
        .then((res) => setNote(res.data))
        .catch((err) => console.error(err.response.data.message));
    } catch (error) {
      toast.error("Error while fetching notes", { autoClose: 2000 });
    }
  }, [noteId]);

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  const handleNoteUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      axios.put(API_URL + `/${noteId}`, note).then((res) => {
        toast.success(res.data.message || "Note Updated!", { autoClose: 2000 });
        router.back();
      });
    } catch (error) {
      toast.error("Error while updating notes", { autoClose: 2000 });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      axios.delete(API_URL + `/${noteId}`).then((res) => {
        toast.success(res.data.message || "Note deleted", { autoClose: 2000 });
        router.back();
      });
    } catch (error) {
      toast.error("Error while deleting notes", { autoClose: 2000 });
    }
  };

  return (
    <div className="flex flex-col  mx-auto bg-base-200 border-base-300 rounded-box w-full sm:w-xl md:w-2xl border p-6 ">
      <h2 className="text-center mb-3 text-2xl font-bold">Note Details</h2>
      <div className="flex justify-between mb-4">
        <Link href={"/notes"} className="btn btn-ghost px-2 rounded-full ">
          <CircleArrowLeft />
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-ghost px-2 rounded-xl text-error"
        >
          <Trash2 />
        </button>
      </div>

      <form onSubmit={handleNoteUpdate} className="flex flex-col gap-2 ">
        <div className="space-y-1">
          <label className="label">Title:</label>
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            className="input w-full"
            placeholder="Title"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="label">Content:</label>
          <input
            value={note.content}
            className="input w-full"
            name="content"
            placeholder="Content"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="label ">Created At:</label>
          <input
            value={formatDate(new Date(note.createdAt)) || ""}
            className="input w-full"
            name="content"
            placeholder="Created At"
            readOnly
            required
          />
        </div>

        <div className="space-y-1">
          <label className="label ">Updated At:</label>
          <input
            value={formatDate(new Date(note.updatedAt)) || ""}
            className="input w-full"
            name="content"
            placeholder="Updated At"
            readOnly
            required
          />
        </div>

        <button className="btn btn-neutral mt-4 rounded-xl">
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default NoteDetailsPage;
