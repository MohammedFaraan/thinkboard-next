import mongoose, {Schema, models, model} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: null
    },
    
}, {timestamps: true});

export const User = models.User || model("User", userSchema);