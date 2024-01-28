import { connectDB } from "../../../utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/userModel";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    console.log({ username, email, password });
    const exists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (exists) {
      return NextResponse.json({
        message: "Username or email alredy exists.",
        status: 409,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User Registered." }, { status: 201 });
  } catch (error) {
    console.log("Error While Registering User.", error);
    return NextResponse.json(
      { message: "Error Occured While Registering the User." },
      { status: 500 }
    );
  }
}
