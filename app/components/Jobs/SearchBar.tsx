import SearchIcon from "~/assets/svg/SearchIcon";
import { Button } from "../common/Button/Button";

export function SearchBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white p-4 rounded-lg">
      <div className="md:col-span-5 relative">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="w-full h-12 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
      </div>

      <div className="md:col-span-3">
        <select className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Select Location</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <select className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Job Type</option>
        </select>
      </div>

      <Button size="sm" startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
}
