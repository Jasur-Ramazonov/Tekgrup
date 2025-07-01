import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ImageSwiper2 from "./Swiper2";

const About = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref9, inView: inView9 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main>
      <Header />
      <section
        className="w-full bg-cover bg-center h-[200px] md:h-[250px] lg:h-[350px] font-openSans"
        style={{
          backgroundImage: "url('../Backround image 5.jpg')",
        }}
      >
        <div className="w-full h-full bg-black/30 flex flex-col gap-4 justify-center items-center">
          <p
            ref={ref}
            className={`font-bold text-white text-[32px] md:text-[43px] lg:text-[59px] leading-[32px] md:leading-[43px] lg:leading-[59px] ${
              inView
                ? "animate__fadeInUp animate__animated opacity-100"
                : "opacity-0"
            }`}
          >
            {t("About")}
          </p>
          <p
            ref={ref2}
            className={`font-semibold text-white text-[19px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[28px] lg:leading-[32px] text-center    ${
              inView2
                ? "animate__fadeInDown animate__animated opacity-100"
                : "opacity-0"
            }`}
          >
            {t("We strive for a healthier world!")}
          </p>
        </div>
      </section>
      <section className="w-full h-fit flex justify-center items-center font-openSans mt-20 lg:mt-40 mb-20 lg:mb-40">
        <div className="container flex justify-center">
          <div className="w-11/12 md:w-10/12 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div
              ref={ref3}
              className={`flex flex-col gap-5 w-full lg:w-[40%] ${
                inView3
                  ? "animate__fadeInLeft animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <p className="uppercase font-[500] text-[#009f7f] text-[13px] md:text-sm leading-[20px] tracking-widest">
                {t("Who are we?")}
              </p>
              <p className="font-bold text-[27px] md:text-[34px] lg:text-[44px] leading-[30px] md:leading-[38px] lg:leading-[49px]">
                {t("About page text 1")}
              </p>
              <p className="text-[#654343] text-[14px] md:text-[15px] lg:text-base leading-[16px] md:leading-[17px]">
                {t("About page text 2")}
              </p>
              <p className="text-[#654343] text-[14px] md:text-[15px] lg:text-base leading-[16px] md:leading-[17px]">
                {t("About page text 3")}
              </p>
            </div>
            <div
              ref={ref4}
              className={`h-[300px] lg:h-[510px] w-full lg:w-[52%] bg-cover bg-center overflow-hidden rounded-xl ${
                inView4
                  ? "animate__fadeInRight animate__animated opacity-100"
                  : "opacity-0"
              }`}
              style={{ backgroundImage: "url('../Tekgruup.jpg')" }}
            ></div>
          </div>
        </div>
      </section>
      <section
        className="h-[300px] md:h-[420px] lg:h-[650px] w-full flex justify-center items-center bg-center bg-cover font-openSans"
        style={{ backgroundImage: "url('../Backround image 6.jpg')" }}
      >
        <div className="w-full h-full bg-black/30 flex justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-5 w-full md:w-[70%] lg:w-[45%]">
            <p className="font-bold text-white text-[27px] md:text-[34px] lg:text-[44px] leading-[30px] md:leading-[38px] lg:leading-[49px]">
              {t("What do we do?")}
            </p>
            <p className="text-center text-white text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
              {t("About page text 4")}
            </p>
            <Link
              to="#"
              className="px-8 py-4 rounded-md bg-[#0c4da2] text-white hover:text-[#656dff] duration-75 ease-linear"
            >
              {t("More")}
            </Link>
          </div>
        </div>
      </section>
      <section className="md:h-[650px] font-openSans flex justify-center mb-20 md:mb-60 lg:mb-40">
        <div className="container flex justify-center items-center w-full h-full mt-20 md:mt-40">
          <div className="w-11/12 md:w-10/12 flex justify-between flex-col lg:flex-row">
            <div
              ref={ref5}
              className={`w-full lg:w-[45%] flex flex-col gap-4 justify-center  ${
                inView5
                  ? "animate__fadeInLeft animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <p className="uppercase font-[500] text-[#009f7f] text-[14px] leading-[21px] tracking-widest text-center md:text-start">
                {t("What are we engaged in?")}
              </p>
              <p className="font-bold text-[#1f2937] text-[34px] lg:text-[44px] leading-[38px] lg:leading-[49px] tracking-tight text-center md:text-start">
                {t("About page text 5")}
              </p>
              <div className="w-fit md:w-[500px]">
                <img src="../photo 1.png" alt="photo" />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 gap-5 w-full lg:w-[45%] mb-10 ">
              <div
                ref={ref6}
                className={`box-shadow w-full px-10 md:px-16 py-5 md:py-10 rounded-xl ${
                  inView6
                    ? "animate__fadeInRight animate__animated opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[#868686] text-[22px] lg:text-[25px] leading-[28px] lg:leading-[32px]">
                  {t("Storage and delivery of pharmaceutical products.")}
                </p>
              </div>
              <div
                ref={ref7}
                className={`box-shadow w-full px-10 md:px-16 py-5 md:py-10 rounded-xl ${
                  inView7
                    ? "animate__fadeInRight animate__animated duration1 opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[#868686] text-[22px] lg:text-[25px] leading-[28px] lg:leading-[32px]">
                  {t(
                    "Marketing and distribution of medicines, medical equipment, cosmetics, and hygiene products."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-fit font-openSans bg-cover bg-center md:mt-80"
        style={{ backgroundImage: "url('../backround image 3.jpg')" }}
      >
        <div className="w-full h-full bg-green-800/70 font-openSans flex flex-col gap-2 justify-center items-center pb-20 pt-20">
          <div
            ref={ref8}
            className={`flex flex-col justify-center items-center gap-4 w-full ${
              inView8
                ? "animate__fadeInRight animate__animated opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="font-bold text-white text-[27px] md:text-[34px] lg:text-[44px] leading-[30px] md:leading-[38px] lg:leading-[49px]">
              {t("Our certificates")}
            </p>
          </div>
          <div className="container flex justify-center items-center pt-10">
            <div
              ref={ref9}
              className={`flex items-center justify-between w-11/12 md:w-full lg:w-10/12 ${
                inView9
                  ? "animate__fadeIn animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <ImageSwiper2 />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
