import React from "react";
import Image from "next/image";

export default function Offer() {
  return (
    <div>
      <Image
        src="https://imagehandler.autoonline.com/ImageHttpHandler.ashx?ObjectID=1202312103845258&ImageID=351337063"
        width={324}
        height={250}
        alt="Picture"
        className="border rounded-t-xl"
      />
      <form>
        <div className="flex flex-col border rounded-b-xl gap-4 pb-4 p-2">
          <span>Neusorg | 531 Km</span>
          <span>HYUNDAI KONA EV OS-HYUNDAI</span>
          <span>28 kW . 68,995 km . Elektro . ID:845258</span>
          <span>RE: 2.756 E . 02/2019</span>
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
