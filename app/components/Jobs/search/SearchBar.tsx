import ChevronDownIcon from "~/assets/svg/ChevronDownIcon";
import { Button } from "../../common/Button/Button";
import SearchWhiteIcon from "~/assets/svg/SearchWhiteIcon";

export function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-white p-4 rounded-xl shadow-sm">
      <div className="relative flex-1 mt-1">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="w-full h-12 pl-4 pr-4 text-base text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
        />
      </div>

      <div className="hidden md:block w-px bg-gray-200 my-2"></div>

      <div className="relative min-w-[200px]">
        <select className="w-full appearance-none h-12 pl-4 pr-10 text-base text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white">
          <option value="">Select Location</option>
        </select>
        <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-2 text-grey pointer-events-none" />
      </div>

      <div className="hidden md:block w-px bg-gray-200 my-2"></div>

      <div className="relative min-w-[200px]">
        <select className="w-full appearance-none h-12 pl-4 pr-10 text-base text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white">
          <option value="">Job Type</option>
        </select>
        <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-2 text-grey pointer-events-none" />
      </div>

      <Button
        className="h-10 px-6 mt-1 text-base font-medium rounded-lg"
        startIcon={<SearchWhiteIcon />}
        title="Search"
      />
    </div>
  );
}
