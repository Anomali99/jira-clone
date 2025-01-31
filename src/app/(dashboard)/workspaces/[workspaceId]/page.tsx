import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { FC } from "react";

const WorkspaceId: FC = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>WorkspaceId</div>;
};

export default WorkspaceId;
