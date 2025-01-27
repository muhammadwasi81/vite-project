import { ChevronUpIcon } from "lucide-react";
import type { InterviewItemProps, UserProfile } from "~/components/Jobs/types";
import { useState } from "react";

function InterviewItem({
  title,
  company,
  datetime,
  location,
}: InterviewItemProps) {
  return (
    <div className="flex items-start gap-3 py-2 mb-2 bg-gray-50 rounded-lg">
      <div className="flex shrink-0 w-8 h-8">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
          alt={`${company} logo`}
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-grey whitespace-nowrap">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{company}</p>
        <p className="text-sm text-gray-500 whitespace-nowrap">
          {datetime} | {location}
        </p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button className="px-3 py-1 text-sm font-medium text-[#10B981] bg-[#ECFDF5] rounded-full">
          Accepted
        </button>
        <button className="px-3 py-1 text-sm font-medium text-[#6B7280] hover:bg-gray-50 rounded-full">
          Deny
        </button>
      </div>
    </div>
  );
}

export function CalendarSection({ user }: { user: UserProfile }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm mt-3 px-2">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-heading">My calendar</h3>
          <button
            className="text-gray-500 hover:text-gray-700 transition-transform duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ChevronUpIcon
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isExpanded ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
        <p className="text-[15px] text-gray-500 mb-4">Upcoming Interviews</p>

        <div
          className={`divide-y divide-gray-100 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <InterviewItem
            title="UI UX Designer"
            company="Figma"
            datetime="16th Feb | 13:45"
            location="Remote"
          />
          <InterviewItem
            title="UI UX Designer"
            company="Figma"
            datetime="16th Feb | 13:45"
            location="Remote"
          />
          <InterviewItem
            title="UI UX Designer"
            company="Figma"
            datetime="16th Feb | 13:45"
            location="Remote"
          />
        </div>
      </div>
    </div>
  );
}
