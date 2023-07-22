import Link from "next/link";
import { socialsLinks } from "@/constants";

const Socials = ({ dark }: { dark?: boolean }) => {
  return (
    <div className="flex items-center gap-x-5 text-xl md:order-2">
      {socialsLinks.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          className={`${dark ? "text-neutral-400": "text-white"} hover:text-aqua transition-all duration-300`}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;