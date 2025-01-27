import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../Button/Button";
import LogoIcon from "~/assets/svg/Logo";
import AvatarIcon from "~/assets/svg/Avatar";
import { Search } from "../Search/Search";
import { navigationRoutes, mobileNavigationRoutes } from "./routes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-medium text-heading">Find Jobs</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navigationRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="text-secondary hover:text-primary font-medium"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="w-64">
              <Search placeholder="Search jobs..." />
            </div>
            <Button variant="primary" size="md">
              Resume Builder
            </Button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              <AvatarIcon />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-6 bg-heading transition-transform duration-200 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-heading transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-heading transition-transform duration-200 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
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
        )}
      </div>
    </header>
  );
}
