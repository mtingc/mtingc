import Link from "next/link";
import { socialsLinks } from "@/constants";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialsLinks.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          className="text-white hover:text-aqua transition-all duration-300"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;