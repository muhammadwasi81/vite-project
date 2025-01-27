import { ChevronUpIcon } from "lucide-react";
import type { UserProfile } from "~/components/Jobs/types/types";
import { useState } from "react";
import InterviewItem from "./components/InterviewItem";

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
