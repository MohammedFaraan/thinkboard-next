"use client";

import axios from "axios";
import { CircleArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_URL + "/api/notes";

function NoteCreatePage() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleCreateNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      axios.post(API_URL, note).then((res) => {
        toast.success(res.data.message || "Note Created!", { autoClose: 2000 });
        router.back();
      });
    } catch (error) {
      toast.error("Error while updating notes", { autoClose: 2000 });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col  mx-auto bg-base-200 border-base-300 rounded-box w-full sm:w-xl md:w-2xl border p-6 ">
      <h2 className="text-center mb-3 text-2xl font-bold">Create Note</h2>
      <div className="flex justify-between mb-4">
        <Link href={"/notes"} className="btn btn-ghost px-2 rounded-full ">
          <CircleArrowLeft />
        </Link>
      </div>

      <form onSubmit={handleCreateNote} className="flex flex-col gap-2 ">
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

        <button className="btn btn-neutral mt-4 rounded-xl">
          {isLoading ? "Create..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default NoteCreatePage;
