import DashboardPage from "@/src/views/pages/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toefl Practice",
  description:
    "Toefl Practice is a specialized software solution designed to streamline the driver recruitment and onboarding process for YEGO, addressing the unique needs of the transportation industry in Rwanda. The platform focuses on efficiently recruiting qualified drivers, conducting necessary background checks, and facilitating comprehensive training programs to ensure a safe and reliable transportation service.",
};
const LandingPage = () => {
  return (
    <div className="bg-background_color">
      <DashboardPage />
    </div>
  );
};

export default LandingPage;
