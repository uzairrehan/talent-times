import { googleSign, signupWithEmailPassword } from "@/firebase/firebaseauthentication";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FormEvent, useState } from "react";

function SignUp() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  function handleSubmit(e:FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    signupWithEmailPassword(email,password)
  }

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="uzairrehann@gmail.com"
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" >
          Sign up
        </Button>
        <Button variant="destructive" className="w-full" onClick={googleSign}>
          Continue with Google
        </Button>
      </form>
    </>
  );
}

export default SignUp;
