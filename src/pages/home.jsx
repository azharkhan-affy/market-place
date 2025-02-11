import Cta from "../components/home/cta";
import Hero from "../components/home/hero";
import {
  BriefcaseBusiness,
  Camera,
  Headset,
  MonitorCheck,
  Phone,
  User,
} from "lucide-react";
import LandingNavbar from "../components/landing-navbar";
import Footer from "../components/footer";
// import { AnimatedTestimonials } from "../components/ui/animate-testimonials";
import { lazy, Suspense } from "react";
const AnimatedTestimonials = lazy(() =>
  import("./../components/ui/animate-testimonials")
);
const Home = () => {
  const clientItems = [
    {
      icon: <Camera />,
      heading: "Find Photographers",
      subHeading:
        "Browse portfolios and find the perfect photographer for your needs.",
    },
    {
      icon: <User />,
      heading: "Review Profiles",
      subHeading: "Read reviews and see the work of potential candidates.",
    },
    {
      icon: <Headset />,
      heading: "Hire Professionals",
      subHeading: "Contact and hire photographers who fit your vision.",
    },
  ];

  // Data for Freelancers section
  const freelancerItems = [
    {
      icon: <BriefcaseBusiness />,
      heading: "Showcase Your Work",
      subHeading:
        "Upload and display your portfolio to attract potential clients.",
    },
    {
      icon: <Phone />,
      heading: "Connect with Clients",
      subHeading:
        "Find and communicate with clients looking for photography services.",
    },
    {
      icon: <MonitorCheck />,
      heading: "Grow Your Network",
      subHeading:
        "Expand your professional network and gain more opportunities.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with this team has completely elevated my content game! The photos are stunning, and my engagement has skyrocketed.",
      name: "Sophia Martinez",
      designation: "Lifestyle & Fashion Influencer",
      src: "testimonial-2.webp",
    },
    {
      quote:
        "The branding photoshoot was a game-changer for my personal brand. My audience loves the aesthetic, and collaborations have increased!",
      name: "Jake Thompson",
      designation: "Fitness & Wellness Creator",
      src: "testimonial-1.webp",
    },
    {
      quote:
        "I needed high-quality content for my social media campaigns, and they delivered beyond my expectations! The visuals are on point.",
      name: "Ava Reynolds",
      designation: "Beauty & Skincare Influencer",
      src: "testimonial-3.webp",
    },
  ];
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <div className="cta-client relative max-w-7xl sm:mx-auto overflow-hidden h-fit  p-4 ">
        <Cta
          reverse={false}
          imgSrc="https://images.unsplash.com/photo-1531496681078-27dc2277e898?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Clients"
          subHeading="Connect with skilled photographers for your projects."
          items={clientItems}
          btnName="Find Photographers"
        />
      </div>
      <div className="cta-freelancer relative max-w-7xl sm:mx-auto h-fit p-4 overflow-hidden rounded-lg">
        <div className="-z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] dark:bg-gradient-to-r from-blue-400/80 dark:to-blue-600/80 blur-3xl opacity-40 w-full h-full cta-freelancer mx-4"></div>
        <Cta
          reverse={true}
          imgSrc="https://images.unsplash.com/photo-1522198684868-88edd8463fc9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="For Influencers"
          subHeading="Expand your reach and grow your photography business."
          items={freelancerItems}
          btnName="Join Us"
        />
      </div>
      {/* <HomeClientSection />
      <FeedBack />
      <FreelanceService /> */}
      {/* <Suspense
        fallback={
          <div className="my-16 flex items-center justify-center">
            <Loader className="flex animate-spin" />
          </div>
        }
      >
        <AnimatedTestimonials testimonials={testimonials} />
      </Suspense> */}
      <Footer />
    </div>
  );
};

export default Home;
