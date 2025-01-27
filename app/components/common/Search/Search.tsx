import type { InputHTMLAttributes } from "react";
import SearchIcon from "~/assets/svg/SearchIcon";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Search = ({
  placeholder = "Search...",
  ...props
}: SearchProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <SearchIcon className="w-5 h-5 text-secondary" />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 
                 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 
                 focus:border-primary transition-colors"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
