// ImageSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageSwiper() {
  const images = [
    { src: "../swiper 1.png", alt: "Dalin" },
    { src: "../swiper 2.jpg", alt: "Atabay" },
    { src: "../swiper 3.png", alt: "Onko" },
    { src: "../swiper 4.jpg", alt: "Another brand" },
    { src: "../swiper 5.png", alt: "Logo" },
    { src: "../swiper 6.png", alt: "Logo" },
  ];

  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="w-full bg-red-400">
          <div
            className={`flex justify-center items-center bg-white w-full h-[250px] cursor-grab`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-[200px] object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
