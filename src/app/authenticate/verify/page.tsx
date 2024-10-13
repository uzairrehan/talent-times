'use client'


import { Button } from "@/components/ui/button"


export default function EmailVerification() {


  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>

          <Button type="submit" >
            Verify Email
          </Button>
        
    </div>
  )
}