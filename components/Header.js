// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            {" "}
            <Image
              src={"/logo4.png"}
              width={80}
              height={38}
              alt=""
              priority={true}
              className="rounded-[50%]"
            />{" "}
          </Link>
          {/* Social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
