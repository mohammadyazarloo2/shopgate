// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-32 -bottom-2 rotate-12 mix-blend-color-dodge animate-bounce duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
