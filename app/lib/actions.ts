"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function postbid(offerId: number, bidvalue: number) {
  try {
    await sql`UPDATE offers SET bidvalue= ${bidvalue} WHERE id= ${offerId}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to post bid",
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
