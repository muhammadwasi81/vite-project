import type { UserProfile } from "../Jobs/types";

interface StatItemProps {
  label: string;
  value: number;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex justify-between items-center py-3 px-4 first:pt-3 last:pb-3">
      <span className="text-heading text-md font-normal">{label}</span>
      <span className="text-primary text-md font-normal">{value}</span>
    </div>
  );
}

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
