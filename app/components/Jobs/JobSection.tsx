import { JobCard } from "./JobCard";
import type { Job } from "./types";

interface JobSectionProps {
  title: string;
  jobs: Job[];
  linkText?: string;
}

export function JobSection({ title, jobs, linkText }: JobSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-medium text-heading">{title}</h2>
        {linkText && (
          <a href="#" className="text-primary text-sm hover:underline">
            {linkText}
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
