import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMui,
} from "react-icons/si";

import { DiMaterializecss,DiNodejs } from "react-icons/di";

//  data
const aboutData = [
  {
    title: "مهارت ها",
    info: [
      {
        title: "توسعه دهنده وب",
        icons: [
          <FaHtml5 key={'1'} />,
          <FaCss3 key={'2'} />,
          <FaBootstrap key={'8'} />,
          <DiMaterializecss key={"9"} />,
          <FaJs key={'3'} />,
          <FaReact key={'4'} />,
          <SiNextdotjs key={'5'} />,
          <SiMui key={'10'} />,
          <DiNodejs key={'11'} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key={'1'} />, <SiAdobexd key={'2'} />, <SiAdobephotoshop key={'3'} />],
      },
    ],
  },
  {
    title: "دوره ها",
    info: [
      {
        title: " html & css ",
        stage: "15 جلسه",
      },
      {
        title: " سی اس اس پیشرفته",
        stage: "30 جلسه",
      },
      {
        title: "جاوا اسکریپت مقدماتی",
        stage: "15 جلسه",
      },
      {
        title: "جاوا اسکریپت پیشرفته",
        stage: "15 جلسه",
      },
      {
        title: "پی اچ پی مقدماتی",
        stage: "15 جلسه",
      },
      {
        title: "پی اچ پی پیشرفته",
        stage: "15 جلسه",
      },
      {
        title: " ری اکت مقدماتی",
        stage: "15 جلسه",
      },
      {
        title: "ری اکت پیشرفته",
        stage: "20 جلسه",
      },
      {
        title: "پروژه محوور",
        stage: "30 جلسه",
      }
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[80px]"
      >
        <Avatar />
      </motion.div>
      <div className="my-10 container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2 text-right"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            ایجاد طرح های <span className="text-accent">خلاقانه</span> و با شکوه
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 px-2 xl:px-0 text-right"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-1 text-center ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-lg uppercase tracking-[1px] leading-[1.4] max-w-[100%]">
                  تجربه
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-lg uppercase tracking-[1px] leading-[1.4] max-w-[100%]">
                  رضایت مشتری
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:left-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} />
                </div>
                <div className="text-lg uppercase tracking-[1px] leading-[1.4] max-w-[100%] text-center ">
                  پروژه تمام شده
                </div>
              </div>
              {/* awads */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] ${index !== itemIndex && 'after:bg-white'} after:absolute after:-bottom-3 after:right-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
