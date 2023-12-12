import React from "react";
import Offers from "../ui/offers";

export default function Page() {
  return (
    <div className="flex py-16">
      <div className="w-1/5 flex justify-center items-center p-8">
        Side Filters
      </div>
      <div className="w-4/5 ">
        <Offers />
      </div>
    </div>
  );
}
