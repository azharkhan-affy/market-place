import { useNavigate } from "react-router-dom";
import { BackgroundLines } from "../ui/hero-sction";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleGetStarted = () => {
    if (token) {
      navigate("/community");
    } else {
      navigate("/auth");
    }
  };

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10  relative z-20 font-bold tracking-tight">
        Where Influencers & Businesses! <br /> Connect, Collaborate, and Climb
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Empowering influencers and brands to create impactful partnerships.
        Discover opportunities, collaborate seamlessly, and drive success
        together!
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 z-[10]  bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
      >
        Get Started
      </motion.button>
    </BackgroundLines>
  );
};

export default Hero;
