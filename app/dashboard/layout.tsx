import React from "react";
import Footer from "../ui/footer";
import NavigationBar from "../ui/navigation-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
