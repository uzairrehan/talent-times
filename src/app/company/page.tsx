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
      <div className="min-h-screen flex items-center flex-col justify-center gap-4 p-4 content-center">
        <Table className="max-w-screen-md ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>See Details</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map(
              ({ title, status, deadline, applications, firebaseID }) => (
                <TableRow key={firebaseID}>
                  <TableCell className="font-bold">{title}</TableCell>
                  <TableCell>
                    <Badge>{status}</Badge>
                  </TableCell>
                  <TableCell>{deadline}</TableCell>
                  <TableCell>
                    <Button variant="secondary" 
                    size={"sm"}
                    
                    onClick={() => route.push(`company/seeapplicants/${firebaseID}`)}>
                    {applications}
                    </Button>
                    </TableCell>
                  <TableCell>
                    <Button
                    size={"sm"}

                      onClick={() => route.push(`seedetailedjob/${firebaseID}`)}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                    size={"sm"}
                      onClick={() => route.push(`company/editjob/${firebaseID}`)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
