import React from "react";
import Image from "next/image";

export default function Offer({
  id,
  image_url,
  location,
  distance,
  offer_name,
  power,
  odometer,
  type,
  repair_estimate,
  replacement_value,
  bidValue,
}: {
  id: number;
  image_url: string;
  location: string;
  distance: string;
  offer_name: string;
  power: number;
  odometer: number;
  type: string;
  repair_estimate: number;
  replacement_value: number;
  bidValue: number;
}) {
  return (
    <div>
      <Image
        src={image_url}
        width={335}
        height={250}
        alt="Picture"
        className="border rounded-t-xl"
      />
      <form>
        <div className="flex flex-col border rounded-b-xl gap-4 pb-4 p-2">
          <span>
            {location} | {distance} Km
          </span>
          <span>{offer_name}</span>
          <span>
            {power} kW . {odometer} km . {type} . ID:{id.toString().slice(0, 6)}
          </span>
          <span>
            RE: {repair_estimate} E . RV: {replacement_value} E
          </span>
          <input
            type="number"
            id="bid_amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bid"
            required
          />
        </div>
      </form>
    </div>
  );
}
