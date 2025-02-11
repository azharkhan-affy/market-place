import { jwtDecode } from "jwt-decode";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";
import { LucideLogOut } from "lucide-react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const token = localStorage.getItem("token");
  const decode = token && jwtDecode(token);
  console.log(decode);
  const isVerify = decode && decode?.authorize;
  const role = decode && decode?.role;

  const handleLogout = async () => {
    try {
      //   const res = await axios.post("/");
      localStorage.removeItem("token");
      console.log("token removed");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="border-b shadow fixed top-0 left-0 w-full z-[800] bg-primary-100/10 backdrop-blur ">
      <div className=" max-w-7xl mx-auto py-2 md:py-2 px-2 flex justify-between items-center  ">
        <Link to={"/"}>
          <img src="logo.svg" alt="" className="w-40 " />
        </Link>
        <ul className="flex items-center gap-8">
          <Link to={"/all-influencers"}>Influencers</Link>
          <Link to={"/all-jobs"}>Jobs</Link>
          <Link to={"/all-business"}>Business</Link>
        </ul>
        {decode?.role == "admin" && (
          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center">Admin Dashboard</SheetTitle>
                <SheetDescription>This is your profile </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul>
                  <Link
                    to={"/admin"}
                    className="border p-2 bg-slate-200/40 block rounded-lg shadow-md text-primary-900 font-semibold text-center"
                  >
                    Dashboard
                  </Link>
                </ul>
              </div>
              <SheetFooter className={"mt-auto"}>
                <SheetClose asChild>
                  <Button onClick={handleLogout} className="w-full">
                    {" "}
                    <LucideLogOut />
                    Logout
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
        {!token && (
          <>
            <Button asChild>
              <Link to={"/login"}>Login</Link>
            </Button>
          </>
        )}
        {isVerify === false && (
          <Button>
            <Link
              to={
                role == "business"
                  ? "/profile-verification/business"
                  : role == "influencer" && "/profile-verification/influencer"
              }
            >
              Verify your Profile
            </Link>
          </Button>
        )}
        {isVerify && (
          <Sheet>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center">
                  {role == "influencer" && "Influencer Profile"}
                  {role == "business" && "Business Profile"}
                </SheetTitle>
                <SheetDescription>This is your profile </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul>
                  <Link
                    to={
                      (role == "influencer" && "/influencer") ||
                      (role == "business" && "/business")
                    }
                    className="border p-2 bg-slate-200/40 block rounded-lg shadow-md text-primary-900 font-semibold text-center"
                  >
                    Dashboard
                  </Link>
                </ul>
              </div>
              <SheetFooter className={"mt-auto"}>
                <SheetClose asChild>
                  <Button onClick={handleLogout} className="w-full">
                    {" "}
                    <LucideLogOut />
                    Logout
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
};

export default LandingNavbar;
