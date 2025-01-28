import type { UserProfile } from "../../Jobs/types/types";

interface ProfileSectionProps {
  user: UserProfile;
}

export function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="relative w-full h-[100px]">
        <img
          src={user.bannerUrl}
          alt="Profile banner"
          className="w-full h-full object-cover rounded-t-lg cursor-pointer"
        />

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[45px]">
          <div className="w-[86px] h-[86px] rounded-full p-0.5 bg-white">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={user.imageUrl}
                alt={user.name}
                className="object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-6 text-center">
        <h2 className="text-lg font-semibold text-heading mb-2">{user.name}</h2>
        <p className="text-md text-heading mb-1 max-w-xl mx-auto">
          {user.title}
        </p>
        <p className="text-md text-grey">{user.location}</p>
      </div>
    </div>
  );
}
