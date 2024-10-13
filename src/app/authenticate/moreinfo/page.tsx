"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function MoreInfo() {
  return (
    <div className="flex flex-col justify-center h-full items-center mx-3">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Add Information </CardTitle>
          <CardDescription>
            Need your Information for better world 🌎
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Uzair Rehan"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Location">Location</Label>
                <Input
                  id="Location"
                  placeholder="Karachi"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Phone Number">Phone Number</Label>
                <Input
                  id="Phone Number"
                  placeholder="+92-0000000000"
                  type="number"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Type">Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">Company</SelectItem>
                    <SelectItem value="jobseeker">Job Seeker</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default MoreInfo;
