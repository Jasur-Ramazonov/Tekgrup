import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full h-fit flex justify-center">
      <div className="container flex flex-col items-center justify-center py-10 font-openSans">
        <div className="flex flex-col xl:flex-row items-center gap-y-10 xl:gap-y-0 xl:items-start xl:justify-between w-11/12 md:w-10/12 ">
          <div className="flex flex-col xs:flex-row gap-10 md:gap-20 items-center justify-center lg:justify-between w-full">
            <div className="w-[220px]">
             <div className="h-[100px] overflow-hidden flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmKzC8b0Q6GFEb5BB7rK3QXpxywvd2x9Wwg&s"
                  alt="Healix"
                />
              </div>
              <p className="font-bold text-[#868686] text-base">
                Healix Health Services
              </p>
            </div>
            <div>
              <p className="font-bold text-[#1f2937] text-[19px] leading-[26px]">
                {t("Contact us")}
              </p>
              <ul>
                <li className="text-[#868686] text-base hover:text-[#009f7f] duration-75 ease-linear cursor-pointer">
                  <a href="#">{t("Adress 1")}</a>
                </li>
                <li className="text-[#868686] text-base hover:text-[#009f7f] duration-75 ease-linear cursor-pointer">
                  <a href="#">{t("Adress 2")}</a>
                </li>
                <li className="text-[#868686] text-base">
                  info.uz@healix.net
                </li>
                <li className="text-[#868686] text-base">
                  <a href="tel:+998555150415">+998 55 515 04 15</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full flex justify-center xl:justify-end"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.uz/maps/org/18459554780/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              ATM sanita pharma
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/category/management_company/184105510/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Boshqaruvchi kompaniya Toshkentda
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.324318%2C41.211905&mode=search&oid=18459554780&ol=biz&z=14.8"
              className="w-full md:w-[460px] h-[250px]"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
        <div className="w-11/12 md:w-10/12 mt-16">
          <div className="h-[1px] w-full bg-[#dedee0]"></div>
          <p className="text-[#868686] text-[13px] leading-[24px] mt-6">
            © 2025 Healix Health Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
