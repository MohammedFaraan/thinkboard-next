"use client"

interface CardInterface {
  title: string,
  content: string,
  userID: string,
  tags: []
}
function NoteCard({details}: {details: CardInterface}) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{details?.title}</h2>
        <p>
          {details?.content}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-xl w-18">Edit</button>
          <button className="btn btn-primary rounded-xl w-18">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
