import React from "react";
import Link from "next/link";
import { socialsLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 bg-white">
      <div className="flex justify-center space-x-6 md:order-2">
        {socialsLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-aqua transition-colors duration-300"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} mtingc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
