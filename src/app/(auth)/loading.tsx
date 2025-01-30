"use client";
import { Loader } from "lucide-react";
import { FC } from "react";

const LoadingPage: FC = () => {
  return (
    <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
