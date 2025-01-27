import MapPinIcon from "~/assets/svg/MapPinIcon";
import TeamsIcon from "~/assets/svg/TeamsIcon";
import ClockIcon from "~/assets/svg/ClockIcon";
import SaveIcon from "~/assets/svg/SaveIcon";
import type { Job } from "../types/types";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-gray-300">
      {job.promoted && (
        <div className="text-xs font-medium text-heading mb-3">Promoted</div>
      )}

      <div className="flex gap-3 mb-3">
        <div className="flex-shrink-0 bg-lightgrey rounded-lg p-2">
          <TeamsIcon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-heading">{job.title}</h3>
          <p className="text-secondary text-sm">Teams</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-secondary mb-4">
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" />
          <span>{job.location}</span>
          {job.isRemote && <span>(Remote)</span>}
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4" />
          <span>
            {job.postedTime} ago | {job.applicants} applicants
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex-1 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          Apply Now
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-50">
          <SaveIcon />
        </button>
      </div>
    </div>
  );
}
