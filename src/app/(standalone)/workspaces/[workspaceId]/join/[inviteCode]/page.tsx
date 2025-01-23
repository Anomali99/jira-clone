import { getCurrent } from "@/features/auth/queries";
import JoinWorkspaceForm from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";
import { FC } from "react";

interface WorkspaceJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceJoinPage: FC<WorkspaceJoinPageProps> = async ({ params }) => {
  const user = getCurrent();
  if (!user) redirect("/sign-in");

  const initialValue = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!initialValue) redirect("/");

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValue={initialValue} />
    </div>
  );
};

export default WorkspaceJoinPage;
