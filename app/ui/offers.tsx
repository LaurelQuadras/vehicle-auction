import React from "react";
import Offer from "./offer";
import { getOffers } from "_/app/lib/data";

export default async function Offers() {
  const offers = await getOffers();

  return (
    <div className="flex flex-wrap gap-8">
      {offers.map((offer, i) => {
        return (
          <Offer
            key={i}
            id={offer.id}
            image_url={offer.image_url}
            location={offer.location}
            distance={offer.distance}
            offer_name={offer.offer_name}
            power={offer.power}
            odometer={offer.odometer}
            type={offer.type}
            repair_estimate={offer.repair_estimate}
            replacement_value={offer.replacement_value}
            bidValue={offer.bidValue}
          />
        );
      })}
    </div>
  );
}
