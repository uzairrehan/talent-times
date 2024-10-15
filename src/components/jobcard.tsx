"use client";
import { ArrowUpRight, BookmarkPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaEye } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { JobCardType } from "@/types/types";

export default function JobCard({
  title,
  companyName,
  location,
  fromSalary,
  toSalary,
  description,
  datePosted,
  badges,
  easyApplyLink,
  firebaseID,
}: JobCardType) {
  const route = useRouter();

  return (
    <Card className="w-full max-w-5xl">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <a
                href="#"
                className="text-blue-500 hover:underline inline-flex items-center"
              >
                {companyName}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">{location}</p>
              <p className="font-semibold">
                ${fromSalary} - ${toSalary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>{badges}</Badge>
              <Badge>{badges}</Badge>
              <Badge>{badges}</Badge>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          </div>
          <div className="flex flex-col sm:items-end justify-between gap-4">
            <div className="space-y-2 w-full sm:w-auto">
              <Button
                className="w-full flex gap-2"
                onClick={() => route.push(easyApplyLink)}
              >
                <VscGitStashApply />
                Easy Apply
              </Button>
              <Button className="w-full flex gap-2" variant="outline">
                <BookmarkPlus className="h-4 w-4" />
                Save job
              </Button>
              <Button
                variant="outline"
                className="w-full flex gap-2"
                onClick={() => route.push(firebaseID)}
              >
                <FaEye />
                See Details
              </Button>
            </div>
            <p className="text-xs text-gray-400">Posted {JSON.stringify(datePosted)} ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
