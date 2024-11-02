"use client";

import ResponsiveModal from "@/components/resonisve-modal";
import { useUpdateTaskModal } from "../hooks/use-update-task-modal";
import { UpdateTaskFromWrapper } from "./update-task-form-wrapper";

const UpdateTaskModal = () => {
  const { taskId, close } = useUpdateTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <UpdateTaskFromWrapper onCancel={close} id={taskId} />}
    </ResponsiveModal>
  );
};

export default UpdateTaskModal;
