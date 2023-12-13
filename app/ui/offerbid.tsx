"use client";

import { postbid } from "_/app/lib/actions";
import { useState } from "react";

export default function OfferBid({
  offerId,
  bidvalue,
}: {
  offerId: number;
  bidvalue: number;
}) {
  const [bidAmount, setBidAmount] = useState<number>(bidvalue);
  const onPostOfferBid = postbid.bind(null, offerId, bidAmount);

  return (
    <form action={onPostOfferBid}>
      {bidvalue > 0 ? <span>Your Bid Value is {bidvalue} E</span> : <></>}
      <div className="flex">
        <input
          type="number"
          id="bid_amount"
          className="bg-white border border-gray-300 w-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Bid"
          required
          value={bidAmount}
          onChange={(event) => setBidAmount(Number(event.target.value))}
        />
        <button
          className="mx-4 px-8 rounded-lg bg-blue-700 text-white hover:bg-blue-900"
          disabled={bidAmount === 0}
        >
          Bid
        </button>
      </div>
    </form>
  );
}
