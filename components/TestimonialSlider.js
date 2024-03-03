// testimonial data
const testimonialData = [
  {
    image: "/avatar.png",
    name: "محمد یازرلو",
    position: "مشتری",
    message:
      "یکی از بهترین تجربه هایی که داشتم تیم عالی و خلاقی دارید با توجه به نیازها طراحی خلاقانه و زیبایی دارید با تشکر از مدیر محترم تیم",
  },
  {
    image: "/t-avt-2.png",
    name: "لورم اپیسوم",
    position: "مشتری",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
  },
  {
    image: "/me.jpg",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// next image
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation,Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      dir="rtl"
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar name position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image className="rounded-full" src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg"> {person.name} </div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {" "}
                    {person.position}{" "}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:right-0 xl:before:h-[200px] relative xl:pr-20">
                {/* quote icon */}
                <div className="mb-4">
                  {" "}
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />{" "}
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-right">
                  {" "}
                  {person.message}{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default TestimonialSlider;
