import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex px-32 py-16 bg-gray-200">
      <div className="flex flex-col w-1/4">
        <span className="font-bold">Vehicle Auction</span>
        <span>Audatex AUTOonline GmbH</span>
        <span>Copyright 2023 Solera</span>
        <span>All Rights Reserved</span>
      </div>
      <div className="flex w-3/4 justify-between mr-16">
        <div className="flex flex-col">
          <span className="font-bold">Company</span>
          <Link href="https://www.autoonline.de">About AutoOnline</Link>
          <Link href="https://www.autoonline.de">Locations</Link>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Conditions</span>
          <Link href="https://www.autoonline.de">Legal</Link>
          <Link href="https://www.autoonline.de">Privacy</Link>
          <Link href="https://www.autoonline.de">Terms</Link>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Support</span>
          <Link href="https://www.autoonline.de">Help</Link>
          <Link href="https://www.autoonline.de">Accessibility/Tips</Link>
          <Link href="https://www.autoonline.de">International Trading</Link>
        </div>
      </div>
    </div>
  );
}
