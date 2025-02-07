import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { FC } from "react";
import WorkspaceIdSettingsClient from "./client";

const WorkspaceIdSettingsPage: FC = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceIdSettingsClient />;
};

export default WorkspaceIdSettingsPage;
