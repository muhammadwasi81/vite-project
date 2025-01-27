import type { InterviewItemProps } from "../../types/types";

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

export default InterviewItem;
