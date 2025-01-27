import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}
