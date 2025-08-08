import NoteDetailsPage from "@/components/NoteDetailsPage";
import { Metadata } from "next";

function NoteDetails() {
  return (
    <div className="mt-5 p-6">
      <NoteDetailsPage />
    </div>
  );
}

export default NoteDetails;

export const metadata: Metadata = {
  title: "ThinkBoard - Note",
};
