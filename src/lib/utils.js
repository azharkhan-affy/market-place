import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  MessageCircle,
  User,
  Settings,
} from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const routeToVerification = (verification, navigate) => {
  if (verification.type == "influencer") {
    navigate("/profile-verification/influencer");
  } else if (verification.type == "business") {
    navigate("/profile-verification/business");
  }
};

export const giveRoute = (location) => {
  const currentLocation = location.pathname;

  if (currentLocation == "/admin") {
    return adminRoutes;
  }
};

export const adminRoutes = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "All Jobs",
    path: "/admin/all-jobs",
    icon: Briefcase,
  },
  {
    name: "All Influencers",
    path: "/admin/all-influencers",
    icon: Users,
  },
  {
    name: "All Business Owners",
    path: "/admin/all-business-owners",
    icon: Building2,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: MessageCircle,
  },
  {
    name: "Profile",
    path: "/admin/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];
