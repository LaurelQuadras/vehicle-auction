"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function NavigationButtons() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleNavigationButtonClick = (buttonSelected: string) => {
    const params = new URLSearchParams(searchParams);
    if (buttonSelected !== "/") {
      params.set("page", buttonSelected);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="h-full gap-4 flex justify-center items-center">
      <button
        className="hover:bg-purple-600 h-4/5 px-2 hover:border hover:rounded-lg hover:border-purple-600"
        onClick={() => handleNavigationButtonClick("/")}
      >
        Live Auctions
      </button>
      <button
        className="hover:bg-purple-600 h-4/5 px-2 hover:border hover:rounded-lg hover:border-purple-600"
        onClick={() => handleNavigationButtonClick("my-bids")}
      >
        My Bids
      </button>
      <button
        className="hover:bg-purple-600 h-4/5 px-2 hover:border hover:rounded-lg hover:border-purple-600"
        onClick={() => handleNavigationButtonClick("discarded")}
      >
        Discarded
      </button>
      <button
        className="hover:bg-purple-600 h-4/5 px-2 hover:border hover:rounded-lg hover:border-purple-600"
        onClick={() => handleNavigationButtonClick("favorites")}
      >
        Favorites
      </button>
    </div>
  );
}
