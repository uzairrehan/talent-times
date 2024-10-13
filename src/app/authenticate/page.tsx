"use client";
import SignUp from "@/components/signup";
import SignIn from "@/components/signin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Authenticate() {
  return (
    <>
      <Tabs defaultValue="signup" className="mx-auto max-w-[350px] space-y-6 px-3 h-full flex flex-col justify-center ">
          <div className="flex flex-center items-center w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Sign up</TabsTrigger>
              <TabsTrigger value="signin">Sign in</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="signup">
            <SignUp />
          </TabsContent>
          <TabsContent value="signin">
            <SignIn />
          </TabsContent>
      </Tabs>
    </>
  );
}

export default Authenticate;
