"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DottedSeparator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SignUpCard: FC = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            placeholder="Enter your name"
            disabled={false}
          />
          <Input
            required
            type="email"
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type="password"
            placeholder="Enter password"
            disabled={false}
          />
          <Button disabled={false} size="lg" className="w-full">
            Sign Up
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="W-FULL"
        >
          <FcGoogle className="mr-2 size-5" />
          Sign Up with Google
        </Button>
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className="W-FULL"
        >
          <FaGithub className="mr-2 size-5" />
          Sign Up with Github
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
