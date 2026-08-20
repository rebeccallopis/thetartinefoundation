import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission + Vision" },
  { href: "/programs", label: "Programs" },
  { href: "/facts", label: "The Facts" },
  { href: "/team", label: "Team" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
] as const;
