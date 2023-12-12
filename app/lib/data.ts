"use server";

import { sql } from "@vercel/postgres";

export async function getOffers() {
  try {
    const data = await sql`SELECT * FROM offers`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the offers.");
  }
}
