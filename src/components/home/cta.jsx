import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Cta = ({ reverse, imgSrc, heading, subHeading, items }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleGetStarted = () => {
    if (token) {
      navigate("/community");
    } else {
      navigate("/auth");
    }
  };
  // useGsapAnimation(".cta");
  return (
    <section className="overflow-hidden bg-white/60  dark:bg-slate-900/70 backdrop-blur-md  pb-4 md:pb-0 max-w-7xl md:mx-auto border-[.5px] dark:border-white/10  rounded-lg">
      <div
        className={`flex items-center justify-between  md:gap-10 gap-0 flex-col  ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className=" md:h-96 h-auto cta  md:w-1/2 w-full overflow-hidden ">
          <img
            className="object-cover opacity-90 heroimg w-full md:h-full h-[40vh] "
            src={imgSrc}
            alt="cta"
          />
        </div>
        <div className="mt-4 md:mt-0 cta md:w-1/2 w-full px-10 flex flex-col space-y-4 cta-content cursive--font">
          <h2 className="lg:text-3xl font-[400]  md:text-2xl text-xl text-gray-700 dark:text-zinc-100 ">
            {heading}
          </h2>
          <p className="text-base text-gray-400 mb-6">{subHeading}</p>
          {items?.map((item, index) => (
            <div className="flex items-start item" key={index}>
              <div className="text-primary flex items-center justify-center p-2">
                {item.icon}
              </div>
              <div className="ml-3">
                <h5 className="text-base font-medium text-gray-500 ">
                  {item.heading}
                </h5>
                <p className="text-gray-400 text-sm ">{item.subHeading}</p>
              </div>
            </div>
          ))}
          <div className="flex">
            <Button
              href="#"
              className=" md:text-xl dark:bg-secondary mt-4 dark:hover:bg-secondary/70 dark:text-zinc-900 "
              onClick={handleGetStarted}
            >
              Get started
              <ChevronRight className="ml-1  w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
