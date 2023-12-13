"use server";

import { sql } from "@vercel/postgres";

export async function postbid(offerId: number, bidvalue: number) {
  try {
    await sql`UPDATE offers SET bidvalue= ${bidvalue} WHERE id= ${offerId}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to post bid",
    };
  }
}
