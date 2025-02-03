"use client";
import { FC } from "react";
import ResponsiveModal from "@/components/responsive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import CreateTaskModalWrapper from "./create-task-modal-wrapper";

const CreateTaskModal: FC = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskModalWrapper onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateTaskModal;
