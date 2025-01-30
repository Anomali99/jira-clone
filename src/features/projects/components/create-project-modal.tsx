"use client";
import { FC } from "react";
import ResponsiveModal from "@/components/responsive-modal";
import CreateWorkspaceForm from "./create-project-form";
import { useCreateProjectModal } from "../hooks/use-create-project-modal";

const CreateProjectModal: FC = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateProjectModal;
