import { Button } from "../common/Button/Button";
import { JobSection } from "./sections/JobSection";
import { SearchBar } from "./search/SearchBar";
import { featuredJobs } from "~/data/jobs";

export function MainContent() {
  return (
    <main className="flex-1 p-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-heading mb-2">
            Find your Dream Job, <span className="text-primary">Albert!</span>
          </h1>
          <p className="text-secondary">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>

        <SearchBar />

        <div className="flex gap-2 mt-6 mb-2">
          <span className="text-secondary text-md mt-1.5">Similar:</span>
          {["Frontend", "Backend", "Graphic Designer"].map((filter) => (
            <Button
              variant="outline"
              key={filter}
              title={filter}
              className="px-4 font-normal text-sm"
            />
          ))}
        </div>
        <div className="border-b border-gray mb-5"></div>

        <JobSection
          title="Featured Jobs"
          jobs={featuredJobs}
          linkText="See Featured Jobs"
        />

        <JobSection
          title="Recommended Jobs"
          jobs={featuredJobs}
          linkText="See Recommended Jobs"
        />
      </div>
    </main>
  );
}
