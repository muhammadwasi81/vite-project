export const navigationRoutes = [
  {
    path: "/companies",
    label: "Top Companies",
  },
  {
    path: "/tracker",
    label: "Job Tracker",
  },
  {
    path: "/calendar",
    label: "My Calendar",
  },
  {
    path: "/documents",
    label: "Documents",
  },
  {
    path: "/messages",
    label: "Messages",
  },
  {
    path: "/notifications",
    label: "Notifications",
  },
] as const;

// Mobile menu has fewer items
export const mobileNavigationRoutes = navigationRoutes.slice(0, 4);
