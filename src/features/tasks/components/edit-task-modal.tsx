"use client";
import { FC } from "react";
import ResponsiveModal from "@/components/responsive-modal";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";
import EditTaskFormWrapper from "./edit-task-form-wrapper";

const EditTaskModal: FC = () => {
  const { taskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper id={taskId} onCancel={close} />}
    </ResponsiveModal>
  );
};

export default EditTaskModal;
