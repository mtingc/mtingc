import Image from "next/image";
import Link from "next/link";
import { logo } from "@/constants";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo.src} width={220} height={48} alt={logo.alt} priority={true} />
    </Link>
  );
};

export default Logo;
