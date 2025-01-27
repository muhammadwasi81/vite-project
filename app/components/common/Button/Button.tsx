import type { ButtonProps } from "./types";

export const Button = ({
  variant = "primary",
  size = "md",
  title,
  startIcon,
  endIcon,
  fullWidth = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {title || children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
