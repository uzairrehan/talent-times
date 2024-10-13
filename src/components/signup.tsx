import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function SignUp() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create Account
        </p>
      </div>
      <div className="space-y-4">
      <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Uzair Rehan" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
        <Button variant="outline" className="w-full">
        Continue with Google
        </Button>
      </div>
    </>
  );
}

export default SignUp;
