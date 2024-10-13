import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function SignIn() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="uzairrehann@gmail.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="destructive" className="w-full">
          Continue with Google
        </Button>
      </div>
    </>
  );
}

export default SignIn;
