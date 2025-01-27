import ChevronDownIcon from "~/assets/svg/ChevronDownIcon";
import type { UserProfile } from "../Jobs/types";
import { ProfileSection } from "./ProfileSection";
import { StatsSection } from "./StatsSection";
import AlbertIcon from "~/assets/svg/AlbertIcon";

export function Sidebar() {
  const user: UserProfile = {
    name: "Albert Flores",
    title:
      "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
    location: "Clinton, Maryland",
    profileVisitors: 140,
    resumeViewers: 20,
    myJobs: 88,
    imageUrl: <AlbertIcon />,
  };

  return (
    <aside className="w-full md:w-80 bg-white border-r">
      <ProfileSection user={user} />
      <StatsSection user={user} />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">My Calendar</h3>
          <button className="text-secondary">
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-secondary">Upcoming Interviews</p>
      </div>
    </aside>
  );
}
