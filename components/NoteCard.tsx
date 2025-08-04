"use client"

import { useRouter } from "next/navigation";

interface CardInterface {
  _id: string
  title: string,
  content: string,
  userID: string,
  tags: []
}


function NoteCard({details}: {details: CardInterface}) {
const router = useRouter();

  const handleCardClick = () => {
    router.push(process.env.NEXT_PUBLIC_URL + `/notes/${details?._id}`)
  }
  return (
    <div className="card card-border bg-base-100 shadow-lg w-full hover:shadow-xl" onClick={handleCardClick}>
      <div className="card-body">
        <h2 className="card-title">{details?.title}</h2>
        <p>
          {details?.content}
        </p>
        <div className="flex mb-2">
          <ul className="flex gap-2 w-full overflow-auto">

          {
            details?.tags?.map((tag, i) => (
              <li key={i} className="badge badge-outline badge-info w-full">{tag}</li>
            ))
          }
          </ul>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-xl w-18">Edit</button>
          <button className="btn btn-primary rounded-xl w-18">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
