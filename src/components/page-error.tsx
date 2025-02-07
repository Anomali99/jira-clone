"use client";
import { AlertTriangle } from "lucide-react";
import { FC } from "react";

interface PageErrorProps {
  message: string;
}

const PageError: FC<PageErrorProps> = ({
  message = "Something went wrong",
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AlertTriangle className="size-6 text-muted-foregrounds mb-2" />
      <p className="text-sm text-muted-foregrounds font-medium">{message}</p>
    </div>
  );
};

export default PageError;
