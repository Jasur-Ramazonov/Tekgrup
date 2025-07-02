// ImageSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageSwiper2() {
  const images = [
    { src: "../certificat 1.jpg", alt: "sertifikat" },
    { src: "../certificat 2.png", alt: "sertifikat" },
    { src: "../certificat 3.png", alt: "sertifikat" },
    { src: "../certificat 2.png", alt: "sertifikat" },
  ];

  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        1285: {
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
            className={`flex justify-center items-center bg-white w-full h-fit md:h-[500px] cursor-grab`}
          >
            <img src={img.src} alt={img.alt} className="w-fit object-contain" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
