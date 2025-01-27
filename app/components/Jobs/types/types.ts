export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  postedTime: string;
  applicants: number;
  promoted?: boolean;
  logoUrl: string;
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  profileVisitors: number;
  resumeViewers: number;
  myJobs: number;
  imageUrl: string;
  bannerUrl: string;
}
