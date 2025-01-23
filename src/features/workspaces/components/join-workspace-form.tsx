"use client";
import DottedSeparator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";
import { useJoinWorkspace } from "../api/use-join-workspace";

interface JoinWorkspaceFormProps {
  initialValue: {
    name: string;
  };
}

const JoinWorkspaceForm: FC<JoinWorkspaceFormProps> = ({ initialValue }) => {
    const { mutate } = useJoinWorkspace();
    
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join {initialValue.name}
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
          <Button
            variant="secondary"
            size="lg"
            type="button"
            asChild
            className="w-full lg:w-fit"
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button size="lg" type="button" className="w-full lg:w-fit">
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinWorkspaceForm;
