import clsx from "clsx";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Language } from "./utils/defination";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem("i18nextLng") || "uzb";
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="font-openSans">
      <div className="w-full h-[45px] bg-[#0c4da1] hidden md:flex justify-center items-center">
        <div className="container flex items-center justify-center">
          <div className="flex items-center justify-end gap-6 text-sm w-10/12">
            <span className="flex items-center gap-2">
              <MdEmail className="text-white text-xl" />
              <p className="text-white">info.uz@tekgrup.net</p>
            </span>
            <a className="text-white" href="tel:+998555150415">
              +998 55 515 04 15
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center py-4">
        <div className="container flex items-center justify-center">
          <div className="flex items-center justify-between w-11/12 md:w-10/12">
            <Link to="/" className="w-[200px]">
              <img
                src="https://tekgrup.uz/wp-content/uploads/2024/07/TEK-GRUP_logo-2.png"
                alt="Logo"
              />
            </Link>
            <ul className="hidden lg:flex gap-6 items-center font-[600] text-base">
              <li
                className={clsx(
                  "hover:text-[#3fb79f] ease-linear duration-300 transition-colors cursor-pointer",
                  {
                    "text-[#3fb79f]": location.pathname === "/",
                  },
                  { "text-black": !(location.pathname === "/") }
                )}
              >
                <Link to="/">{t("Home")}</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#3fb79f] ease-linear duration-300 transition-colors cursor-pointer",
                  {
                    "text-[#3fb79f]": location.pathname === "/news",
                  },
                  {
                    "text-black": !(location.pathname === "/news"),
                  }
                )}
              >
                <Link to="/news">{t("News")}</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#3fb79f] ease-linear duration-300 transition-colors cursor-pointer",
                  {
                    "text-[#3fb79f]": location.pathname === "/products",
                  },
                  {
                    "text-black": !(location.pathname === "/products"),
                  }
                )}
              >
                <Link to="/products">{t("Products")}</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#3fb79f] ease-linear duration-300 transition-colors cursor-pointer",
                  {
                    "text-[#3fb79f]": location.pathname === "/about",
                  },
                  {
                    "text-black": !(location.pathname === "/about"),
                  }
                )}
              >
                <Link to="/about"> {t("About")}</Link>
              </li>
              <li
                className={clsx(
                  "hover:text-[#3fb79f] ease-linear duration-300 transition-colors cursor-pointer",
                  {
                    "text-[#3fb79f]": location.pathname === "/contact",
                  },
                  {
                    "text-black": !(location.pathname === "/contact"),
                  }
                )}
              >
                <Link to="/contact">{t("Contact")}</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentLanguage(
                      currentLanguage === Language.UZB
                        ? Language.RUS
                        : Language.UZB
                    );
                  }}
                  className="flex items-center"
                >
                  {currentLanguage === Language.UZB ? (
                    <img className="h-[20px]" src="../rus.png" alt="rus logo" />
                  ) : (
                    <img className="h-[20px]" src="../uzb.png" alt="uzb" />
                  )}
                </button>
              </li>
            </ul>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("salom");
              }}
              className="block lg:hidden"
            >
              <GiHamburgerMenu className="text-3xl text-[#009f7f]" />
            </button>
            <div
              className={clsx(
                "w-full absolute top-32 left-0 ease-linear duration-300 rounded-md bg-white overflow-hidden block lg:hidden z-[9999]",
                { "h-[235px]": isOpen },
                { "h-0": !isOpen }
              )}
            >
              <ul>
                <li
                  className={clsx(
                    "p-2 hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer",
                    {
                      "bg-[#009f7f] text-white": location.pathname === "/",
                    }
                  )}
                >
                  <Link className="w-full block" to="/">
                    {t("Home")}
                  </Link>
                </li>
                <li
                  className={clsx(
                    "p-2 hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer",
                    {
                      "bg-[#009f7f] text-white": location.pathname === "/news",
                    }
                  )}
                >
                  <Link className="w-full block" to="/news">
                    {" "}
                    {t("News")}
                  </Link>
                </li>
                <li
                  className={clsx(
                    "p-2 hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer",
                    {
                      "bg-[#009f7f] text-white":
                        location.pathname === "/products",
                    }
                  )}
                >
                  <Link className="w-full block" to="/products">
                    {t("Products")}
                  </Link>
                </li>
                <li
                  className={clsx(
                    "p-2 hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer",
                    {
                      "bg-[#009f7f] text-white": location.pathname === "/about",
                    }
                  )}
                >
                  <Link className="w-full block" to="/about">
                    {t("About")}
                  </Link>
                </li>
                <li
                  className={clsx(
                    "p-2 hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer",
                    {
                      "bg-[#009f7f] text-white":
                        location.pathname === "/contact",
                    }
                  )}
                >
                  <Link className="w-full block" to="/contact">
                    {t("Contact")}
                  </Link>
                </li>
                <li className="hover:bg-[#009f7f] hover:text-white duration-75 ease-linear cursor-pointer">
                  <label className="w-full pl-2 block">
                    <button
                      onClick={() => {
                        setCurrentLanguage(
                          currentLanguage === Language.UZB
                            ? Language.RUS
                            : Language.UZB
                        );
                        setIsOpen(false);
                      }}
                      className="flex items-center"
                    >
                      {currentLanguage === Language.UZB ? (
                        <img
                          className="h-[20px]"
                          src="../rus.png"
                          alt="rus logo"
                        />
                      ) : (
                        <img className="h-[20px]" src="../uzb.png" alt="uzb" />
                      )}
                    </button>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
