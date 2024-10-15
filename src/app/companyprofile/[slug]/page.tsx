import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, MapPin, Users, Briefcase, Globe, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"

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
    about: "TechCorp Solutions is at the forefront of technological innovation, specializing in cloud computing, artificial intelligence, and cybersecurity solutions. Our mission is to empower businesses with cutting-edge technology that drives growth and efficiency.",
    culture: "We foster a culture of innovation, collaboration, and continuous learning. Our diverse team of experts is passionate about solving complex problems and creating value for our clients.",
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
  }

  return (<>
  <Navbar/>
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src={company.logo} alt={company.name} />
          <AvatarFallback>{company.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
          <p className="text-xl text-muted-foreground">{company.description}</p>
        </div>
      </div>

      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="culture">Culture & Benefits</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4">
          <Card>
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
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                  {company.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="text-sm">{company.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-70" />
                <a href={`mailto:${company.email}`} className="text-sm text-blue-500 hover:underline">
                  {company.email}
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>About {company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{company.about}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={company.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                <Linkedin className="h-6 w-6" />
              </a>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Open Positions</CardTitle>
              <CardDescription>Explore our current job openings</CardDescription>
            </CardHeader>
            <CardContent>
              {company.jobs.map((job) => (
                <div key={job.id} className="mb-4 p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Posted on: {job.posted}</p>
                  <Button className="mt-4" variant="outline">View Details</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="culture" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Our Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{company.culture}</p>
            </CardContent>
          </Card>
          <Card>
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
  )
}