import React from "react";
import { lusitana } from "_/app/ui/fonts";
import NavigationButtons from "../ui/navigation-buttons";

export default function NavigationBar() {
  return (
    <div className="h-16 w-screen bg-purple-400 flex gap-4">
      <div className="w-1/4 flex items-center justify-center">
        <span
          className={`${lusitana.className} text-2xl font-bold tracking-wider`}
        >
          SPEEDonline
        </span>
      </div>
      <div>
        <span className="w-3/4">
          <NavigationButtons />
        </span>
      </div>
    </div>
  );
}
