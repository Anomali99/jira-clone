"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createWorkspaceSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import DottedSeparator from "@/components/dotted-separator";

interface CreateWorkspaceFormProps {
  onCancel: () => void;
}

const CreateWorkspaceForm: FC<CreateWorkspaceFormProps> = ({ onCancel }) => {
  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    console.log({ values });
  };
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">
          Create a new workspaces
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7"></CardContent>
    </Card>
  );
};

export default CreateWorkspaceForm;
