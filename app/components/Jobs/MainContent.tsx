import { JobSection } from "./JobSection";
import { SearchBar } from "./SearchBar";
import type { Job } from "./types";

export function MainContent() {
  const featuredJobs: Job[] = [
    {
      id: "1",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      postedTime: "1 day ago",
      applicants: 22,
      promoted: true,
      logoUrl: "/placeholder.svg",
    },
    {
      id: "1",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      postedTime: "1 day ago",
      applicants: 22,
      promoted: true,
      logoUrl: "/placeholder.svg",
    },
    {
      id: "1",
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA",
      isRemote: true,
      postedTime: "1 day ago",
      applicants: 22,
      promoted: true,
      logoUrl: "/placeholder.svg",
    },
  ];

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

        <div className="flex gap-2 my-6">
          {["Frontend", "Backend", "Graphic Designer"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white rounded-full text-secondary hover:bg-primary hover:text-white transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>

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
