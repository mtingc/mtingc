import { useEffect, useState } from "react";
import { Logo, Socials } from "@/components";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full flex items-center px-16 xl:px-0 ${
        scroll
          ? "bg-neutral-800 text-neutral-200 xl:h-[70px]"
          : "bg-transparent text-neutral-800 xl:h-[90px]"
      } transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* logo */}
          <Logo />
          {/* socials */}
          <Socials />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
