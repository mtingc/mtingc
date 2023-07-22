import React from "react";
import Link from "next/link";
import { socialsLinks } from "@/constants";
import { Socials } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <Socials dark />
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} mtingc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
