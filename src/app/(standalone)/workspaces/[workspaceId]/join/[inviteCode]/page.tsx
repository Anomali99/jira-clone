import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { FC } from "react";
import WorkspaceIdJoinClient from "./client";

const WorkspaceIdJoinPage: FC = async () => {
  const user = getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceIdJoinClient />;
};

export default WorkspaceIdJoinPage;
