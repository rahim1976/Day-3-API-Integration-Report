"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSanityStudio = pathname?.startsWith("/studio") ?? false;

  return (
    <>
      {!isSanityStudio && <Navbar />}
      {children}
      {!isSanityStudio && <Footer />}
    </>
  );
}