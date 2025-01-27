import type { UserProfile } from "../Jobs/types";

interface ProfileSectionProps {
  user: UserProfile;
}

export function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <div className="text-center p-6">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-heading mb-2">{user.name}</h2>
      <p className="text-secondary text-sm mb-1">{user.title}</p>
      <p className="text-secondary text-sm">{user.location}</p>
    </div>
  );
}
