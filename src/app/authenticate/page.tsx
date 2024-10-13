"use client";
import { Button } from "@/components/ui/button";
import SignUp from "@/components/signup";
import SignIn from "@/components/signin";
import { useState } from "react";

function Authenticate() {
  const [page, setPage] = useState("SignUp");

  return (
    <>
      <div className="mx-auto max-w-[350px] space-y-6 ">
      <div className="flex flex-center items-center w-full">
        <Button
          onClick={() => setPage("SignIn")}
          variant={page == "SignIn" ? "default":"outline"}
        >
          Sign In
        </Button>
        <Button
          onClick={() => setPage("SignUp")}
          variant={page == "SignUp" ? "default":"outline"}

        >
          Sign Up
        </Button>
        </div>
      {page == "SignUp" ? <SignUp /> : <SignIn />}

      </div>

      
    </>
  );
}

export default Authenticate;
