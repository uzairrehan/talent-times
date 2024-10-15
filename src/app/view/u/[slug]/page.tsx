import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, MapPinIcon, MailIcon, PhoneIcon, DownloadIcon, GlobeIcon, LinkedinIcon, GithubIcon } from "lucide-react"
// import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, GlobeIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react"
// import UserNavbar from "@/components/usernavbar"
// import CompanyNavbar from "@/components/companynavbar"

export default function ExpandedProfileView() {
  return (
    <>
    {/* {user.role === "company" ? <CompanyNavbar/> :<UserNavbar/> } */}
    <Card className="w-full max-w-4xl mx-auto border-none">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="w-32 h-32">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left space-y-1">
          <CardTitle className="text-3xl">John Doe</CardTitle>
          <p className="text-xl text-muted-foreground">Senior Software Engineer</p>
          <p className="text-sm text-muted-foreground">s/o William Doe</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" /> Born: January 1, 1990
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3" /> New York, USA
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p className="flex items-center gap-2"><MailIcon className="w-4 h-4" /> john.doe@example.com</p>
            <p className="flex items-center gap-2"><PhoneIcon className="w-4 h-4" /> +1 (555) 123-4567</p>
            <p className="flex items-center gap-2"><LinkedinIcon className="w-4 h-4" /> linkedin.com/in/johndoe</p>
            <p className="flex items-center gap-2"><GithubIcon className="w-4 h-4" /> github.com/johndoe</p>
          </div>
        </section>

        <Separator />

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Experience</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Senior Software Engineer at Tech Corp (2018 - Present)</li>
            <li>Web Developer at StartUp Inc. (2015 - 2018)</li>
            <li>Junior Developer at Code Solutions (2013 - 2015)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Education</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>MSc in Computer Science, Tech University (2013 - 2015)</li>
            <li>BSc in Software Engineering, State College (2009 - 2013)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
            <Badge>Git</Badge>
            <Badge>AWS</Badge>
            <Badge>Docker</Badge>
            <Badge>GraphQL</Badge>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Languages</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>English (Native)</li>
            <li>Spanish (Fluent)</li>
            <li>French (Intermediate)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Certifications</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AWS Certified Solutions Architect</li>
            <li>Google Cloud Professional Developer</li>
            <li>Certified Scrum Master</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Notable Projects</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Led development of a high-traffic e-commerce platform (2M+ monthly users)</li>
            <li>Created an open-source library for React state management (3K+ GitHub stars)</li>
            <li>Developed a machine learning model for predictive maintenance in manufacturing</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Open Source</Badge>
            <Badge variant="secondary">AI/ML</Badge>
            <Badge variant="secondary">Blockchain</Badge>
            <Badge variant="secondary">IoT</Badge>
            <Badge variant="secondary">Hiking</Badge>
            <Badge variant="secondary">Photography</Badge>
          </div>
        </section>

        <Separator />

        <section className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <a href="/cv.pdf" download>
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:john.doe@example.com">
              <MailIcon className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer">
              <GlobeIcon className="mr-2 h-4 w-4" />
              Website
            </a>
          </Button>
        </section>
      </CardContent>
    </Card>
    </>
  )
}