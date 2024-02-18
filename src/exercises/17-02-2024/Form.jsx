import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setError({ email: "", password: "" });

    if (!formData.email.includes("@")) {
      setError((prevError) => {
        return { ...prevError, email: "Email must include @" };
      });
    }

    if (formData.password.length < 8) {
      setError((prevError) => {
        return {
          ...prevError,
          password: "Password length should be greater than 8",
        };
      });
    } else {
      console.log("submitted");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>Enter your credentials.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-y-2 gap-x-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ex@sample.com"
                className={`${
                  error.email &&
                  "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                } col-span-3`}
              />
              {error.email && (
                <p className="col-span-3 col-start-2 text-xs italic text-red-500 ps-2">
                  {error.email}
                </p>
              )}
            </div>
            <div className="grid items-center grid-cols-4 gap-y-2 gap-x-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type={showPass ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                className={`${
                  error.password &&
                  "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                } col-span-3`}
              />
              {error.password && (
                <p className="col-span-3 col-start-2 text-xs italic text-red-500 ps-2">
                  {error.password}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleFormSubmit}>
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
