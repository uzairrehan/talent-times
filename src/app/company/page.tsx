"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

const jobs = [
  {
    title: "Software Engineer",
    status: "hired",
    deadline: "13-5-2024",
    applications: "32",
    firebaseID: "4353456565767568768",
  },
  {
    title: "Frontend Developer",
    status: "open",
    deadline: "21-6-2024",
    applications: "45",
    firebaseID: "5634565435432342341",
  },
  {
    title: "Data Analyst",
    status: "closed",
    deadline: "10-4-2024",
    applications: "23",
    firebaseID: "9487238479823748237",
  },
  {
    title: "Product Manager",
    status: "hired",
    deadline: "30-9-2024",
    applications: "40",
    firebaseID: "3495834953849584958",
  },
  {
    title: "DevOps Engineer",
    status: "open",
    deadline: "15-8-2024",
    applications: "27",
    firebaseID: "2348923849283482394",
  },
  {
    title: "UX/UI Designer",
    status: "closed",
    deadline: "12-2-2024",
    applications: "15",
    firebaseID: "8347347384738473847",
  },
  {
    title: "Mobile App Developer",
    status: "open",
    deadline: "5-7-2024",
    applications: "50",
    firebaseID: "1093481093481093481",
  },
  {
    title: "Cybersecurity Specialist",
    status: "open",
    deadline: "22-12-2024",
    applications: "12",
    firebaseID: "8945738945789347589",
  },
  {
    title: "QA Engineer",
    status: "hired",
    deadline: "19-3-2024",
    applications: "38",
    firebaseID: "6574867548754875487",
  },
  {
    title: "Cloud Architect",
    status: "open",
    deadline: "1-10-2024",
    applications: "60",
    firebaseID: "1234567890123456789",
  },
];

export default function Company() {
  const route = useRouter();
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-auto">
          <Table className="mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">No.</TableHead>
                <TableHead className="w-[100px] text-center">Title</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Deadline</TableHead>
                <TableHead className="text-center">Applications</TableHead>
                <TableHead className="text-center">See Details</TableHead>
                <TableHead className="text-center">Edit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map(
                (
                  { title, status, deadline, applications, firebaseID },
                  index
                ) => (
                  <TableRow key={firebaseID}>
                    <TableCell className="font-bold text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-bold text-center">
                      {title}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={"outline"}>{status}</Badge>
                    </TableCell>
                    <TableCell className="text-center">{deadline}</TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="secondary"
                        size={"sm"}
                        onClick={() =>
                          route.push(`company/seeapplicants/${firebaseID}`)
                        }
                      >
                        {applications}
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size={"sm"}
                        onClick={() =>
                          route.push(`seedetailedjob/${firebaseID}`)
                        }
                      >
                        <ArrowUpRight className="h-3 w-3" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size={"sm"}
                        onClick={() =>
                          route.push(`company/editjob/${firebaseID}`)
                        }
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
