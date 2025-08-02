import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env.local file");
}

let isConnected = false;

export async function connectDB() {
  try {
    if (isConnected) {
      console.log("✅ Already connected to MongoDB");
      return;
    }
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("🚀 Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}