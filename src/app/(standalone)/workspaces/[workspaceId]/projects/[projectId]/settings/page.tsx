import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdSettingsClient } from "./client";

const ProjectIdSettingPage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <ProjectIdSettingsClient />;
};

export default ProjectIdSettingPage;
