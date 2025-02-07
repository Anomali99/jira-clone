import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { FC } from "react";
import WorkspaceIdClient from "./client";

const WorkspaceId: FC = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceIdClient />;
};

export default WorkspaceId;
