import React from "react";
import Offer from "./offer";
import { getOffers, getOffersBidData } from "_/app/lib/data";

export default async function Offers() {
  const offers = await getOffers();
  const offersBidData = await getOffersBidData();

  return (
    <div className="flex flex-wrap gap-8">
      {offers
        .sort((offer) => offer.distance)
        .map((offer, i) => {
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
              bidvalue={
                offersBidData.filter((offerbid) => offerbid.id === offer.id)[0]
                  .bidvalue ?? 0
              }
            />
          );
        })}
    </div>
  );
}
