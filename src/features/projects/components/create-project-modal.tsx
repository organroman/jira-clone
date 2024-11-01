"use client";
import ResponsiveModal from "@/components/resonisve-modal";
import { useCreateProjectModal } from "../hooks/use-create-workspace-modal";
import CreateProjectForm from "./create-project-from";

const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateProjectModal;
