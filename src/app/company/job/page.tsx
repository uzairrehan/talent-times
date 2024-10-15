"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export default function JobCreationForm() {
  const [deadline, setDeadline] = useState<Date>()

  return (<>
    <Card className="w-full max-w-4xl mx-auto border-none">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Job Posting</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="job-title">Job Title</Label>
            <Input id="job-title" placeholder="Enter job title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" placeholder="Describe the job role and responsibilities" className="min-h-[100px]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea id="requirements" placeholder="List job requirements and qualifications" className="min-h-[100px]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="employment-type">Employment Type</Label>
              <Select>
                <SelectTrigger id="employment-type">
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Job location or Remote" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="salary-min">Salary Range</Label>
              <div className="flex items-center space-x-2">
                <Input id="salary-min" type="number" placeholder="Min" />
                <span>to</span>
                <Input id="salary-max" type="number" placeholder="Max" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Application Deadline</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!deadline && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {deadline ? format(deadline, "PPP") : "Select deadline"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={deadline}
                    onSelect={setDeadline}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Benefits</Label>
            <div className="grid gap-2 sm:grid-cols-2">
              {["Health Insurance", "Dental Insurance", "Vision Insurance", "401(k)", "Paid Time Off", "Remote Work Option", "Professional Development", "Gym Membership"].map((benefit) => (
                <div className="flex items-center space-x-2" key={benefit}>
                  <Checkbox id={benefit.toLowerCase().replace(/\s+/g, '-')} />
                  <Label htmlFor={benefit.toLowerCase().replace(/\s+/g, '-')}>{benefit}</Label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Create Job Posting</Button>
      </CardFooter>
    </Card>
    </>
  )
}