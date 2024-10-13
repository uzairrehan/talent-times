"use client" ;
import { googleSign, loginWithEmailPassword, passwordReset } from "@/firebase/firebaseauthentication";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FormEvent, useState } from "react";

function SignIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  function handlePasswordReset(){
    passwordReset(email)
  }
  function handleSubmit(e:FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    loginWithEmailPassword(email,password)
  }

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
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
            placeholder="••••••••"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>

        <div className="text-right">
          <a
            href="#"
            className="text-sm  hover:underline"
            onClick={handlePasswordReset}
          >
            Forgot password?
          </a>
        </div>

        <Button  className="w-full"  type="submit">
          Login
        </Button>
        <Button variant="destructive" className="w-full" onClick={googleSign}>
          Continue with Google
        </Button>
        </form>

    </>
  );
}

export default SignIn;
