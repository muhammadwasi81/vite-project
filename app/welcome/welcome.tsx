import { MainContent } from "~/components/Jobs/MainContent";
import MainLayout from "~/components/Layouts/MainLayout";
import { Sidebar } from "~/components/Sidebar/Sidebar";

export function Welcome() {
  return (
    <MainLayout>
      <div className="px-4 sm:px-6 md:px-10 py-3 md:py-5 min-h-screen flex flex-col md:flex-row gap-4 md:gap-6 bg-[#F5F7FA]">
        <Sidebar />
        <MainContent />
      </div>
    </MainLayout>
  );
}
