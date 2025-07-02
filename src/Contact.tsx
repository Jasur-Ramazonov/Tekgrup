import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import { MdOutlineMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
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
  const { t } = useTranslation();

  const { register, reset, handleSubmit } = useForm<{
    name: string;
    phone: string;
    email: string;
    message?: string;
  }>();

  return (
    <main>
      <Header />
      <section
        className="h-[200px] md:h-[250px] lg:h-[340px] w-full bg-center bg-cover font-openSans"
        style={{ backgroundImage: "url('../backround image 2.jpg')" }}
      >
        <div className="w-full h-full bg-blue-800/30 flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p
              ref={ref}
              className={`text-white font-bold text-[32px] md:text-[43px] lg:text-[59px] leading-[32px] md:leding-[43px] lg:leading-[59px] text-center tracking-tight ${
                inView
                  ? "animate__fadeInDown animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              {t("Get in touch with us")}
            </p>
            <p
              ref={ref2}
              className={`text-white font-semibold text-[19px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[28px] lg:leading-[32px] text-center ${
                inView2
                  ? "animate__fadeInUp animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              {t("Are you interested in our services? Get in touch with us.")}
            </p>
          </div>
        </div>
      </section>
      <section className="h-fit bg-[#fafafa] w-full flex justify-center items-center font-openSans pt-20 pb-20">
        <div className="container flex justify-center items-center">
          <div className="w-11/12 md:w-10/12 flex flex-col xl:flex-row justify-center items-center gap-5">
            <div
              ref={ref3}
              className={`w-full xl:w-[45%] h-[500px] bg-white flex justify-center items-center rounded-xl shadow-xl ${
                inView3
                  ? "animate__fadeInLeft animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="flex flex-col gap-7 w-[90%] md:w-[80%]">
                <p className="font-500 text-[#009f7f] text-[14px] leading-[21px] tracking-widest uppercase">
                  {t("Get in touch with us")}
                </p>
                <p className="font-bold text-[34px] lg:text-[44px] leading-[38px] lg:leading-[49px]">
                  {t("Contact us now")}
                </p>
                <div className="w-full bg-[#e1e1e3] h-[1px]"></div>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#d4f8c4]"></div>
                    <div className="flex flex-col">
                      <p className="font-bold text-[#868686] text-base md:text-[18px] lg:text-[19px] leading-[22px] md:leading-[25px] lg:leading-[26px]">
                        {t("Human Resources Department")}
                      </p>
                      <p className="text-[#868686] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                        hr.uz@tekgrup.net
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#d4f8c4]"></div>
                    <div className="flex flex-col">
                      <p className="font-bold text-[#868686] text-base md:text-[18px] lg:text-[19px] leading-[22px] md:leading-[25px] lg:leading-[26px]">
                        {t("Sales Department")}
                      </p>
                      <p className="text-[#868686] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                        sales.uz@tekgrup.net | +998 55 511 16 86
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#d4f8c4]"></div>
                    <div className="flex flex-col">
                      <p className="font-bold text-[#868686] text-base md:text-[18px] lg:text-[19px] leading-[22px] md:leading-[25px] lg:leading-[26px]">
                        {t("For more information")}
                      </p>
                      <p className="text-[#868686] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                        info.uz@tekgrup.net | +998 55 515 04 15
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={ref4}
              className={`w-full xl:w-[55%] h-[500px] bg-white flex justify-center items-center rounded-xl shadow-xl ${
                inView4
                  ? "animate__fadeInRight animate__animated opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="flex flex-col gap-7 w-[90%] md:w-[80%]">
                <p className="font-bold text-[34px] lg:text-[44px] leading-[38px] lg:leading-[49px] tracking-tighter">
                  {t("Leave us a message")}
                </p>
                <form
                  onSubmit={handleSubmit((d) => {
                    const token =
                      "8059436697:AAGS4ZlabmGtV_9V83iBzlRnIAN6kIzUD1U";

                    const chatId = "1936754751";
                    const url = `https://api.telegram.org/bot${token}/sendMessage`;
                    const message = `Ismi: ${d.name}\n Raqami: ${d.phone}\n Emaili: ${d.email}\n Xabari: ${d.message}`;
                    const data = {
                      chat_id: chatId,
                      text: message,
                    };
                    axios.post(url, data).then(() => {
                      reset();
                      alert("Message sent");
                    });
                  })}
                  className="grid grid-cols-2 gap-3"
                >
                  <label>
                    <p className="font-inter font-[500] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                      {t("Name")}
                    </p>
                    <input
                      {...register("name")}
                      required
                      type="text"
                      placeholder={t("Name")}
                      className="py-2 px-4 rounded-md outline outline-[1px] outline-[#e0e0e1] focus:outline-[#009f7f] duration-75 ease-linear w-full"
                    />
                  </label>
                  <label>
                    <p className="font-inter font-[500] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                      {t("Phone")}
                    </p>
                    <input
                      {...register("phone")}
                      required
                      type="text"
                      placeholder={t("Phone")}
                      className="py-2 px-4 rounded-md outline outline-[1px] outline-[#e0e0e1] focus:outline-[#009f7f] duration-75 ease-linear w-full"
                    />
                  </label>
                  <label className="col-span-2">
                    <p className="font-inter font-[500] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                      Email
                    </p>
                    <input
                      {...register("email")}
                      required
                      type="text"
                      placeholder="Email"
                      className="py-2 px-4 rounded-md outline outline-[1px] outline-[#e0e0e1] focus:outline-[#009f7f] duration-75 ease-linear w-full"
                    />
                  </label>
                  <label className="col-span-2">
                    <p className="font-inter font-[500] text-[14px] md:text-[15px] lg:text-base leading-[21px] md:leading-[23px]">
                      {t("Massage")}
                    </p>
                    <textarea
                      {...register("message")}
                      placeholder={t("Leave message")}
                      className="py-2 px-4 rounded-md outline outline-[1px] outline-[#e0e0e1] focus:outline-[#009f7f] duration-75 ease-linear w-full resize-none h-[100px]"
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="flex justify-center items-center col-span-2 gap-2 bg-[#0c4da2] text-white text-base rounded-md py-2 hover:text-[#656dff] duration-75 ease-linear"
                  >
                    <MdOutlineMail /> {t("Send message")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
