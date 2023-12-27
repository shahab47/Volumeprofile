import { connectDB } from "../../../utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    console.log({ username, email, password });
    const exists = await UserActivation.findOne({
      $or: [{ email }, { username }],
    });
    if (exists) {
      return NextResponse.json({ message: "Username or email alredy exists." });
      {
        status: 500;
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserActivation.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User Registered." }, { status: 201 });
  } catch (error) {
    console.log("Error While Registering User.", error);
    return NextResponse.json(
      { message: "Erro Occured While Registering the User." },
      { status: 500 }
    );
  }
}
