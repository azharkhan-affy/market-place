import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, LayoutDashboard, Users } from "lucide-react";

const SidebarDashboard = ({ children }) => {
  const [items, setItems] = useState([
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
  ]);
  const location = useLocation();

  return (
    <SidebarProvider>
      <Sidebar>
        <div className="p-3 flex items-center justify-center">
          <Link to={"/"}>
            <img src="/logo.svg" alt="" className="" />
          </Link>
        </div>
        <SidebarHeader />

        <SidebarContent>
          <div className="sidebar">
            <ul className="space-y-1">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link key={index} to={item.path}>
                    <li
                      className={`flex mx-4 rounded-md items-center gap-2 p-2 px-6 relative `}
                    >
                      {location.pathname == item.path && (
                        <motion.div
                          layoutId="active"
                          className="absolute inset-0 bg-primary-300 rounded-full "
                        ></motion.div>
                      )}
                      <span className="relative">
                        <Icon />
                      </span>{" "}
                      <span className="relative">{item.name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main className="bg-[#f3f2f7] w-screen flex-col">
        <div className="p-3 md:-mb-2  backdrop-blur-sm shadow-xl shadow-gray-400/30 flex items-center justify-between">
          <div className="hidden md:flex">
            <SidebarTrigger></SidebarTrigger>
          </div>

          <Sheet>
            <SheetTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
          </Sheet>
        </div>
        {/* {children} */}
        <div className="md:p-4 p-2 ">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default SidebarDashboard;
