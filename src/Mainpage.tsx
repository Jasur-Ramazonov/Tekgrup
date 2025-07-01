import { Link } from "react-router-dom";
import Header from "./Header";
import Counter from "./Count";
import "animate.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import ImageSwiper from "./Swiper";
import Footer from "./Footer";

const Mainpage = () => {
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
    <div>
      <Header />
      <section
        className="bg-cover bg-center h-[420px] md:h-[650px]"
        style={{
          backgroundImage: `url("https://tekgrup.uz/wp-content/uploads/2024/07/young-male-pharmacist-giving-prescription-medications-to-senior-female-customer-in-a-pharmacy.jpg")`,
        }}
      >
        <div className="w-full h-full bg-blue-800/30 flex justify-center items-center font-openSans">
          <div
            ref={ref}
            className={`flex flex-col justify-center items-center gap-y-5 w-full md:w-1/2 ${
              inView ? "animate__bounceIn animate__animated" : ""
            }`}
          >
            <div className="uppercase font-[500] text-[#009f7f] bg-white py-1 px-5 rounded-full md:w-fit text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] tracking-widest">
              {t("first page title")}
            </div>
            <p className="font-[700] text-white text-[32px] md:text-[43px] lg:text-[59px] w-full text-center leading-[32px] md:leading-[43px] lg:leading-[59px]">
              {t("first page text")}
            </p>
            <p className="text-white text-[14px] md:text-[15px] lg:text-base text-center">
              {t("first page second text")}
            </p>
            <Link
              to="#"
              className="bg-white text-[#009f7f] py-4 px-7 rounded-md hover:text-[#656dff] hover:bg-[#d8dafe] duration-100 ease-linear text-lg"
            >
              {t("first page button text")}
            </Link>
          </div>
        </div>
      </section>
      <section className="h-fit md:h-[650px] font-openSans flex justify-center">
        <div className="container w-full h-full flex justify-center items-center">
          <div className="w-11/12 md:w-10/12 flex flex-col gap-10">
            <div
              ref={ref2}
              className={`w-full shadow-2xl rounded-xl grid grid-cols-2 md:grid-cols-3 place-items-center p-5 xl:px-30 ${
                inView2
                  ? "animate__fadeInLeftBig animate__animated opacity-0"
                  : "opacity-0"
              }`}
            >
              <div className="flex flex-col justify-center items-center w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  {<Counter end={8} duration={3} />}+ {t("year")}
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Available in the market.")}
                </p>
              </div>
              <div className="border-x py-8 w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  {<Counter end={10} duration={3} />}+
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Exclusive medications.")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  {<Counter end={30} duration={3} />}+
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Employees")}
                </p>
              </div>
            </div>
            <div
              ref={ref2}
              className={`w-full shadow-2xl rounded-xl grid grid-cols-2 md:grid-cols-3 place-items-center p-5 xl:px-30 ${
                inView2
                  ? "animate__fadeInLeft animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="flex flex-col justify-center items-center w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  {<Counter end={15} duration={3} />}+
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Partners")}
                </p>
              </div>
              <div className="border-x py-8 w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  200+
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Regular customers")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 w-full">
                <p className="font-[700] text-[#0c4da2] text-[27px] md:text-[34px] lg:text-[44px] leading-[49px] text-center">
                  2,000{t("kv")}
                </p>
                <p className="font-semibold text-[#0c4da2] text-[14px] md:text-[15px] lg:text-base leading-6 text-center">
                  {t("Total square meters of all warehouses")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={ref3}
        className={`w-full flex lg:hidden justify-center gap-2 items-center px-2 mb-10 mt-10 ${
          inView3 ? "animate__fadeInLeftBig animate__animated" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-2 w-full px-5 py-10 shadow-2xl rounded-xl relative">
          <span className="w-fit font-bold text-[#868686] text-[22px] md:text-[27px] leading-[27px] md:leading-[33px] flex gap-2">
            <p>Editor's</p> <p>choice</p>
          </span>
          <div className="h-[1px] w-[70%] bg-[#dfdfe0]"></div>
        </div>
      </section>
      <section
        className="bg-cover bg-center h-[420px] md:h-[650px] mb-10 font-openSans"
        style={{ backgroundImage: "url('../backround image 2.jpg')" }}
      >
        <div className="w-full h-full bg-blue-800/30 flex justify-center items-center flex-col gap-4">
          <p className="font-bold text-white text-[27px] md:text-[34px] lg:text-[44px] leading-[30px] md:leading-[38px] lg:leading-[49px] text-center w-full md:w-1/2">
            {t(
              "We are one of the leading distributors in the pharmaceutical industry."
            )}
          </p>
          <p className="text-white text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px] text-center">
            {t("The best services for the best clients.")}
          </p>
          <Link
            to="#"
            className="bg-[#0c4da2] text-white hover:text-[#656dff] text-[18px] leading-[18px] px-10 py-5 rounded-md duration-150 ease-linear mt-5"
          >
            {t("Contact")}
          </Link>
        </div>
      </section>
      <section className="md:h-[650px] font-openSans flex justify-center mb-20 md:mb-40">
        <div className="container flex justify-center items-center w-full h-full mt-10 md:mt-40">
          <div className="w-11/12 md:w-10/12 flex justify-between flex-col lg:flex-row">
            <div
              ref={ref4}
              className={`w-full lg:w-[45%] flex flex-col gap-4 justify-center  ${
                inView4
                  ? "animate__fadeInLeft animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <p className="uppercase font-[500] text-[#009f7f] text-[14px] leading-[21px] tracking-widest text-center md:text-start">
                {t("Why choose us?")}
              </p>
              <p className="font-bold text-[#1f2937] text-[34px] lg:text-[44px] leading-[38px] lg:leading-[49px] tracking-tight text-center md:text-start">
                {t("The best services for the best customers.")}
              </p>
              <div className="w-fit md:w-[500px]">
                <img src="../photo 1.png" alt="photo" />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 gap-5 w-full lg:w-[45%] mb-10 ">
              <div
                ref={ref5}
                className={`box-shadow w-full px-10 md:px-16 py-5 md:py-10 rounded-xl ${
                  inView5
                    ? "animate__fadeInRight animate__animated opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[#868686] text-[22px] lg:text-[25px] leading-[28px] lg:leading-[32px]">
                  {t("Reliability")}
                </p>
              </div>
              <div
                ref={ref6}
                className={`box-shadow w-full px-10 md:px-16 py-5 md:py-10 rounded-xl ${
                  inView6
                    ? "animate__fadeInRight animate__animated duration1 opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[#868686] text-[22px] lg:text-[25px] leading-[28px] lg:leading-[32px]">
                  {t("High-level security")}
                </p>
              </div>
              <div
                ref={ref7}
                className={`box-shadow w-full px-10 md:px-16 py-5 md:py-10 rounded-xl delay-100 ${
                  inView7
                    ? "animate__fadeInRight animate__animated duration2 opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[#868686] text-[22px] lg:text-[25px] leading-[28px] lg:leading-[32px]">
                  {t("Time-tested quality")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-[420px] md:h-[650px] font-openSans bg-cover bg-center md:mt-80"
        style={{ backgroundImage: "url('../backround image 3.jpg')" }}
      >
        <div className="w-full h-full bg-blue-800/70 font-openSans flex flex-col gap-2 justify-center items-center">
          <div
            ref={ref8}
            className={`flex flex-col justify-center items-center gap-4 w-full ${
              inView8
                ? "animate__fadeInRight animate__animated opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="font-bold text-white text-[27px] md:text-[34px] lg:text-[44px] leading-[30px] md:leading-[38px] lg:leading-[49px]">
              {t("Our partners")}
            </p>
            <p className="text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px] text-white text-center w-full md:w-[70%] lg:w-[45%]">
              {t(
                "Our partners are satisfied with us because we provide the highest quality, safe, and reliable services."
              )}
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
              <ImageSwiper />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mainpage;
