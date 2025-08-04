import { Schema, models, model } from "mongoose";

const noteSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
       ref: "User"
        ,  required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    
}, {timestamps: true})

export const Note = models.Note || model("Note", noteSchema);