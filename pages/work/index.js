// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// farmer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn("down", 0.6)}
            className="w-full xl:max-w-[65%]"
          >
            {/* Slider */}
            <WorkSlider />
          </motion.div>

          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-right mb-4 xl:mb-0">
            <motion.h2
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.2)}
              className="h2 xl:mt-8"
            >
              پرژه ها <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.4)}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              تیم برنامه نویسی ماهر با بهترین خدمات در خدمت شماست شما می توانید
              با برقراری تماس با ما از خدمات ما بیشتر مطلع بشوید
            </motion.p>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
