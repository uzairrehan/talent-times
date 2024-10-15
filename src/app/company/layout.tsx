"use client";

import Navbar from "@/components/navbar";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Navbar/>
  {children}
  </>;
}
