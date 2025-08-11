"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function registerUser(payload) {
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  const { email, password } = payload;

  if (!email || !password) return { success: false };

  const user = await userCollection.findOne({ email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userCollection.insertOne({
      ...payload,
      password: hashedPassword,
    });

    return {
      success: true,
      insertedId: result.insertedId.toString(), // Convert ObjectId to string
    };
  }

  return { success: false };
}
