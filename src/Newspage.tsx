import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";

const Newspage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const language = localStorage.getItem("i18nextLng");

  const { t } = useTranslation();
  return (
    <main>
      <Header />
      <section
        className="w-full justify-center items-center h-[150px] md:h-[200px] lg:h-[300px] bg-cover bg-center font-openSans"
        style={{ backgroundImage: "url('../medicine.jpg')" }}
      >
        <div className="w-full h-full bg-black/30 flex justify-center items-center">
          <p
            ref={ref}
            className={`font-bold text-white text-[32px] md:text-[43px] lg:text-[59px] leading-[32px] md:leading-[43px] lg:leading-[59px] ${
              inView
                ? "animate__fadeInDown animate__animated opacity-100"
                : "opacity-0"
            }`}
          >
            {t("News")}
          </p>
        </div>
      </section>
      <section className="w-full h-fit mt-20 mb-20 flex justify-center items-center font-openSans bg-[#fafafa]">
        <div className="container flex justify-center items-center">
          <div className="w-11/12 md:w-10/12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2 w-full">
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://tekgrup.uz/wp-content/uploads/2025/04/2-300x300.jpg')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f]"
                  >
                    {t("International Scientific and Practical Summit")}
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    {t("Aprel 30, 2025")}
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  {t("News page text 1")}
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  {t("More")}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../certificat.png')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f]"
                  >
                    {t(
                      "“Tek Grup Sağlık Hizmetleri” has received the ISO 9001:2015 certificate!"
                    )}
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    {t("Mart 13, 2025")}
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  {t("News page text 2")}
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  {t("More")}
                </a>
              </div>
              <div
                className={`flex-col gap-2 ${
                  language === "rus" ? "hidden" : "flex"
                }`}
              >
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../trening.jpg')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f]"
                  >
                    «Tek Grup Saglik Hizmetleri» MCHJ XK
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    Avgust 5, 2024
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  Tek Grup jamoasi 2023-yil iyul-avgust oylarida o’z jamoasiga
                  treninglar o’tkazdi. Unda hamkor kompaniyalar o’zlarining dori
                  vositalarini tanishtirib o’tdilar.
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  Ko'proq o'qish
                </a>
              </div>
              <div
                className={`flex-col gap-2 ${
                  language === "rus" ? "hidden" : "flex"
                }`}
              >
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../conferensiya.jpg')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f] tracking-tight"
                  >
                    2024-yil 8-oktabrdagi Konferensiyadan lavhalar
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    Avgust 5, 2024
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  Uchrashuv davomida tibbiyotdagi yangiliklar, yurtimizdagi
                  ushbu sohadagi o’zgarishlar yuzasidan suhbatlar o’tkazildi
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  Ko'proq o'qish
                </a>
              </div>
              <div
                className={`flex-col gap-2 ${
                  language === "rus" ? "hidden" : "flex"
                }`}
              >
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../female-pharmacist.jpg')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f] tracking-tight"
                  >
                    Tekgrup nima bilan shugullanadi
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    Avgust 4, 2024
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  «Tek Grup Saglik Hizmetleri» Mas’uliyati Cheklangan Jamiyat
                  Xorijiy Korxonasi 2018 yilda tashkil etilgan bo‘lib, TEKGRUP
                  xalqaro tanilgan holdingi tarkibiga kiradi va 10 yildan ortiq
                  tajribaga
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  Ko'proq o'qish
                </a>
              </div>
              <div
                className={`flex-col gap-2 ${
                  language === "rus" ? "flex" : "hidden"
                }`}
              >
                <div
                  className="w-full h-[300px] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('../Logo 2.png')",
                  }}
                ></div>
                <div>
                  <a
                    href="#"
                    className="text-[#868686] font-bold text-[18px] leading-[22px] duration-75 ease-linear hover:text-[#009f7f] tracking-tight"
                  >
                    Кто мы Tekgrup?
                  </a>
                  <p className="text-[#868686] text-[12px] leading-[16px]">
                    4 августа, 2024
                  </p>
                </div>
                <p className="text-[#868686] text-[14px] leading-[21px]">
                  ИП Общество с Ограниченной Ответственностью «Tek Grup Saglik
                  Hizmetleri» создано в 2018 году и входит в состав всемирно
                  известного холдинга TEKGRUP и имеет опыт работы
                </p>
                <a
                  className="font-bold text-[#868686] text-[12px] leading-[24px] hover:text-[#009f7f] duration-75 ease-linear"
                  href="#"
                >
                  Читать далее»
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Newspage;
