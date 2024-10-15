"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EmailVerification() {
  return (
    <div className="max-w-[350px] mx-auto p-4 h-full flex flex-col justify-center ">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">
            Email Verification
          </CardTitle>
          <CardDescription>
            Check your Inbox!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button type="submit" className="w-full">Resend Email</Button>
        </CardContent>
      </Card>
    </div>
  );
}
 