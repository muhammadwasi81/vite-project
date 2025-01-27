import type { UserProfile } from "../../Jobs/types/types";
import StatItem from "./components/StatsItem";

export function StatsSection({ user }: { user: UserProfile }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm mt-3">
      <div className="divide-y divide-[#E5E7EB]">
        <StatItem label="Profile Visitors" value={user.profileVisitors} />
        <StatItem label="Resume Viewers" value={user.resumeViewers} />
        <StatItem label="My Jobs" value={user.myJobs} />
      </div>
    </div>
  );
}
