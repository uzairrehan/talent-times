"use client";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

export default function UserNavbar() {
  const route = useRouter()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="https://talenttimes.vercel.app"
          className="flex items-center gap-2"
        >
          <Image src={"/logo.png"} width={100} height={100} alt={"Logo"} />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Home
          </Link>
          <Link
            href="/company/job"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Post Job
          </Link>
          <Link
            href="/company"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Company Jobs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input type="search" placeholder="Search..." className="pl-8 w-full" />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="hover:cursor-pointer" onClick={()=> route.push("/company/profile")}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/company/job"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Post Job
                </Link>
                <Link
                  href="/company"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Company Jobs
                </Link>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
