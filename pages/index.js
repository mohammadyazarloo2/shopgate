// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// farmer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full mt-0">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r form-primary/10 via-black/30 to-black/10">
        <div className="text-right justify-end xl:pt-40 xl:text-right h-full container flex flex-col justify-center lg:justify-start  lg:absolute lg:left-0">
          {/* title */}
          <motion.h1
            className="h2"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            تبدیل ایدهایتان <br /> به{" "}
            <span className="text-accent">واقعیت دیجیتالی</span>{" "}
          </motion.h1>
          <motion.p
            className=" xl:mx-0 mb-2 xl:mb-5 text-right w-full"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            شما می توانید انواع ایده های خود را با ما در میان بگذارید
            ما در تلاش هستیم سایت های تعاملی بیشتری را توسعه بدهیم
            ما با استفاده از تکنولوژی های قدرتمند مفتخریم مدعی این باشیم
             که سایت شما را با توجه به نوع کسب و کارتان با ان هوش مصنوعی مختص به خود را بدهیم
              در صورت نیاز می توانید با ما در ارتباط باشید
          </motion.p>
          {/* btn */}
          <div className="flex justify-start xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex justify-start"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion animate-pulse xl:bg-cover xl:bg-right xs:bg-no-repeat w-[200px] h-[200px] bottom-[10%] right-[30%] absolute mix-blend-color-dodge translate-z-0">
          {" "}
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full flex items-end max-w-[637px] max-h-[578px] absolute bottom-0 lg:bottom-0 lg:left-[0%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
