"use client";

import CompanyNavbar from "@/components/companynavbar";


export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <CompanyNavbar/>
  {children}
  </>;
}
