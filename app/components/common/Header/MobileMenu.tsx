import { Link } from "react-router";
import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
import { mobileNavigationRoutes } from "./routes";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t">
      <div className="px-2 mb-4">
        <Search placeholder="Search jobs..." />
      </div>
      <nav className="flex flex-col gap-4">
        {mobileNavigationRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="text-secondary hover:text-primary font-medium px-2"
          >
            {route.label}
          </Link>
        ))}
        <div className="pt-4 px-2">
          <Button variant="primary" size="md" className="w-full">
            Resume Builder
          </Button>
        </div>
      </nav>
    </div>
  );
}
