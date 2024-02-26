// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icpns
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "برندسازی",
    description: "ایده های خود را به واقعیت تبدیل کنید",
  },
  {
    icon: <RxPencil2 />,
    title: "طراحی",
    description: "طراحی رابطه کاربری شما را بهبود می بخشیم",
  },
  {
    icon: <RxDesktop />,
    title: "توسعه",
    description: "تیم توسعه ما همیشه در کنار شماست",
  },
  {
    icon: <RxRocket />,
    title: "بهینه سازی و سئو",
    description: "تیم ما خدمات بهینه سازی و سئوی مناسب سایت شما را ارئه می دهد",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      dir="rtl"
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and desc */}
              <div>
                <div> {item.title} </div>
                <p> {item.description} </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
