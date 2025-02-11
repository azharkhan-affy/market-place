import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      //   const res = await axios.post("/");
      localStorage.removeItem("token");
      console.log("token removed");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="border-b shadow fixed top-0 left-0 w-full z-[50] bg-primary-100/10">
      <div className=" max-w-7xl mx-auto py-2 md:py-2 px-2 flex justify-between items-center  backdrop-blur">
        <Link to={"/business"}>
          <img src="../../public/logo.svg" alt="" className="w-40 " />
        </Link>
        <ul className="flex items-center gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/business/jobs"}>Jobs</Link>
          <Link to={"/business/influencers"}>Influencers</Link>
          <Link to={"/business/create-jobs"}>create jobs</Link>
        </ul>
        <Button
          onClick={handleLogout}
          className="bg-secondary-700 hover:bg-secondary-700/90"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
