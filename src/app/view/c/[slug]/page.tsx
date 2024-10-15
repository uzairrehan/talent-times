import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  MapPin,
  Users,
  Briefcase,
  Globe,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import UserNavbar from "@/components/usernavbar";
import CompanyNavbar from "@/components/companynavbar";
import JobCard from "@/components/jobcard";

export default function CompanyProfile() {
  const company = {
    name: "TechCorp Solutions",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Leading provider of innovative software solutions",
    industry: "Information Technology",
    founded: "2005",
    size: "1000-5000 employees",
    location: "San Francisco, CA",
    website: "https://techcorpsolutions.com",
    phone: "+1 (555) 123-4567",
    email: "info@techcorpsolutions.com",
    socialMedia: {
      facebook: "https://facebook.com/techcorpsolutions",
      twitter: "https://twitter.com/techcorpsolutions",
      linkedin: "https://linkedin.com/company/techcorpsolutions",
    },
    about:
      "TechCorp Solutions is at the forefront of technological innovation, specializing in cloud computing, artificial intelligence, and cybersecurity solutions. Our mission is to empower businesses with cutting-edge technology that drives growth and efficiency.",
    culture:
      "We foster a culture of innovation, collaboration, and continuous learning. Our diverse team of experts is passionate about solving complex problems and creating value for our clients.",
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible work hours",
      "Remote work options",
      "Professional development opportunities",
      "Gym membership",
      "Paid time off",
    ],
    jobs: [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        posted: "2023-10-01",
      },
      {
        id: 2,
        title: "Product Manager",
        department: "Product",
        location: "New York, NY",
        type: "Full-time",
        posted: "2023-10-05",
      },
      {
        id: 3,
        title: "UX Designer",
        department: "Design",
        location: "Remote",
        type: "Contract",
        posted: "2023-10-10",
      },
    ],
  };
  const user = {
    role: "company",
  };
  return (
    <>
      {user.role === "company" ? <CompanyNavbar /> : <UserNavbar />}
      <div className="container mx-auto p-4 mt-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6 mb-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src={company.logo} alt={company.name} />
            <AvatarFallback>{company.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{company.name}</h1>
            <p className="text-xl text-muted-foreground">
              {company.description}
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="about"
          className="space-y-4 justify-center items-center flex flex-col"
        >
          <TabsList className="">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="culture">Culture & Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-4">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 opacity-70" />
                  <span className="text-sm">{company.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 opacity-70" />
                  <span className="text-sm">Founded in {company.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 opacity-70" />
                  <span className="text-sm">{company.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 opacity-70" />
                  <span className="text-sm">{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 opacity-70" />
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {company.website}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 opacity-70" />
                  <span className="text-sm">{company.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 opacity-70" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    {company.email}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Separator />
            <Card className="border-none">
              <CardHeader>
                <CardTitle>About {company.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{company.about}</p>
              </CardContent>
            </Card>
            <Separator />

            <Card className="border-none">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <a
                  href={company.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href={company.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={company.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="jobs" className="space-y-4">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>
                  Explore our current job openings
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <JobCard
                  title={"Software Engineer"}
                  companyName={"Acme Inc"}
                  location={"San Francisco, CA"}
                  fromSalary={120000}
                  toSalary={150000}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
                  }
                  datePosted={new Date()}
                  badges={"2435345"}
                  easyApplyLink={"534534"}
                  firebaseID={"6435786485"}
                />{" "}
                <JobCard
                  title={"Software Engineer"}
                  companyName={"Acme Inc"}
                  location={"San Francisco, CA"}
                  fromSalary={120000}
                  toSalary={150000}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
                  }
                  datePosted={new Date()}
                  badges={"2435345"}
                  easyApplyLink={"534534"}
                  firebaseID={"6435786485"}
                />{" "}
                <JobCard
                  title={"Software Engineer"}
                  companyName={"Acme Inc"}
                  location={"San Francisco, CA"}
                  fromSalary={120000}
                  toSalary={150000}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque fugiat, beatae rerum praesentium illum labore, "
                  }
                  datePosted={new Date()}
                  badges={"2435345"}
                  easyApplyLink={"534534"}
                  firebaseID={"6435786485"}
                />{" "}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="culture" className="space-y-4">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Our Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{company.culture}</p>
              </CardContent>
            </Card>
            <Separator />

            <Card className="border-none">
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {company.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
