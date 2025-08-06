"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function registerUser(payload) {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  const { email, password } = payload;

  if (!email || !password) return { success: false };

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const result = await userCollection.insertOne(payload);

    return result;
  }
  return { success: false };
}
