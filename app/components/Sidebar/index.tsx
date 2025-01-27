import type { UserProfile } from "../Jobs/types/types";
import { ProfileSection } from "./profile/ProfileSection";
import { StatsSection } from "./stats/StatsSection";
import { CalendarSection } from "./calender/CalenderSection";

export function Sidebar() {
  const user: UserProfile = {
    name: "Albert Flores",
    title:
      "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
    location: "Clinton, Maryland",
    profileVisitors: 140,
    resumeViewers: 20,
    myJobs: 88,
    bannerUrl:
      "https://s3-alpha-sig.figma.com/img/f7b7/cb33/145f7000c3fac5cc4d409f31a3de3686?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VxnROTwGOlKkWN4gJs0bFA~TfaLEFd1iz2O2rKVoxvXG0RStywBP5Si8OGVx~4jssTi642rENSNE6nj6gF4b36Kwctt0DQR2ErsEVm7sf9kYBIJ3NHaFkdt0rVnaWLf6mvYlOOQmBR6M9vwRxDgc4il643c5sKpS~LNkKC08-HKQT51W-YwRL-4GcC1TFfgmGXZgz1uh2LjhWnONAEU5SSVEqPkISSFj4uryBnj0XHNScSwF3u2gzjqzKfjrFX88CwcrHYt46X9qVaS8Lg2oqUzDr5Lu~xoVIpJVi8vkTtGUiV8SDDzTbE7Gyyll91d2ZtL5R3-W8acZTwgjw2H6Ug__",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/392f/c8a2/2c6eed8d401c7a77703ee92f86e797b1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lp6i7bbmlw-8KSAA8P27u1yZzkfd9OtDsgnjUMzfG8CxVQcRpkBwNZU41QdKyOtSOmkw5H6g77KkL0kVFhyBYx5hEOxVC5~QDTwkPvnf2wdKfXUcimZ-df~tR4L-Bd0fAUmmNzSl4WGF~9wjtOYhVQc26Bu8vAPUvI0o6JOAAL-X0MmLXMDO151T4hYc4UhPBsmn3wFeS3Jq-PTMrb8Z5sRHVnTgvU4Z5C2ZiKcTd2LOk2BUZNO8oMIuM6Wtlh0zJwf8d~hLX0vdZDvT5AsbfI7ml3Z-KM9ka1JqjydFGCdEVD43uAqP-vkk9-vFkWB-V-Ih8huTWtHEbGzpPanEOA__",
  };

  return (
    <aside className="w-full md:w-80">
      <ProfileSection user={user} />
      <StatsSection user={user} />
      <CalendarSection user={user} />
    </aside>
  );
}
