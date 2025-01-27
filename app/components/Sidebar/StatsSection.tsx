import type { UserProfile } from "../Jobs/types";

interface StatItemProps {
  label: string;
  value: number;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex justify-between items-center py-3">
      <span className="text-secondary">{label}</span>
      <span className="text-primary font-medium">{value}</span>
    </div>
  );
}

export function StatsSection({ user }: { user: UserProfile }) {
  return (
    <div className="border-t border-b py-2">
      <StatItem label="Profile Visitors" value={user.profileVisitors} />
      <StatItem label="Resume Viewers" value={user.resumeViewers} />
      <StatItem label="My Jobs" value={user.myJobs} />
    </div>
  );
}
