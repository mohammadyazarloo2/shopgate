// link
import Link from "next/link"

// icons
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";
import { PiPhone } from "react-icons/pi";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.youtube.com/@mohammadyazarloo47"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={"tel:+989019043100"} className="hover:text-accent transition-all duration-300">
        <PiPhone />
      </Link>
      <Link href={"https://www.instagram.com/mohammadyazarloo"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
