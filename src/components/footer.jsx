const Footer = () => {
  const items = [
    {
      title: "Services",
      items: [
        "Brand Photoshoots",
        "Social Media Content Photography",
        "Product Photography for E-commerce",
        "Corporate Headshots",
        "Lifestyle Photography",
        "Event Coverage",
        "Photo Editing & Retouching",
        "Custom Photography Packages",
      ],
    },
    {
      title: "Products",
      items: [
        "High-Resolution Digital Downloads",
        "Branded Content Packages",
        "Photo Licensing",
        "Custom Presets & Filters",
        "Stock Photography",
      ],
    },
    {
      title: "Resources",
      items: [
        "Content Strategy Guides",
        "Photography Tips for Influencers",
        "Social Media Growth Resources",
        "Branding & Visual Identity Tips",
        "Case Studies & Success Stories",
      ],
    },
    {
      title: "Support",
      items: [
        "Consultation & Booking Assistance",
        "Brand Collaboration Inquiries",
        "Custom Package Requests",
        "Technical Support",
      ],
    },
    {
      title: "Company",
      items: [
        "Our Story",
        "Meet the Team",
        "Client Testimonials",
        "Press & Media Features",
        "Work With Us",
        "Privacy Policy & Terms",
      ],
    },
  ];

  return (
    <footer className="pt-10  border-b border-t  cursive--font bg-white dark:bg-slate-900 ">
      <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4">
        {items.map((item) => {
          return (
            <div key={item.title} className="px-4 md:px-0 footer">
              <h2 className="font-medium text-[16px] mb-4">{item.title}</h2>
              {item.items.map((item) => {
                return (
                  <div key={item} className="text-sm mb-2 ">
                    <span className="cursor-pointer text-gray-600 dark:text-gray-400 text-[400] hover:text-primary">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <hr className="mt-4" />
      <footer className="py-4  cursive--font  text-gray-700 dark:text-gray-400 max-w-7xl text-center text-sm w-[90%] footer mx-auto ">
        © {new Date().getFullYear()} Global Inc. <br />
        Privacy Policy
      </footer>
    </footer>
  );
};

export default Footer;
