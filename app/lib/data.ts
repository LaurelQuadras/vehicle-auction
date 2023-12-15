"use server";

import { sql } from "@vercel/postgres";

export async function getOffers() {
  console.log("Came here");
  try {
    const data = await sql`SELECT * FROM offers`;
    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch the offers.");
  }
}

export async function getOffersBidData() {
  try {
    const bidData = await sql`SELECT id, bidvalue FROM offers`;
    return bidData.rows;
  } catch (error) {
    throw new Error("Failed to fetch the offers.");
  }
}
