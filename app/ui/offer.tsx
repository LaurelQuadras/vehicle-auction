import React from "react";
import Image from "next/image";
import OfferBid from "./offerbid";

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
  bidvalue,
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
  bidvalue: number;
}) {
  return (
    <div>
      <Image
        src={image_url}
        width={355}
        height={250}
        alt="Picture"
        className="border rounded-t-xl"
      />
      <div className="flex flex-col border rounded-b-xl gap-4 pb-4 p-2 bg-gray-50">
        <span>
          {location} | {distance} Km
        </span>
        <span>{offer_name}</span>
        <span>
          {power} kW . {odometer} km . {type} . ID:{id.toString().slice(4)}
        </span>
        <span>
          RE: {repair_estimate} E . RV: {replacement_value} E
        </span>
        <OfferBid
          offerId={id}
          bidvalue={bidvalue}
        />
      </div>
    </div>
  );
}
