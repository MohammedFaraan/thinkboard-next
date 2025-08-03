import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


export  async function GET() {
  await connectDB();
  const users = await User.find().sort({updatedAt: -1});
  return NextResponse.json(users);
}