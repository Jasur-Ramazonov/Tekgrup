import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";

const Products = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Header />
      <section className="w-full h-fit pt-40 pb-40 relative flex justify-center items-center">
        <div
          className="w-full h-[300px] bg-center absolute top-0 -z-[999]"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(250, 250, 250, 1), rgba(250, 250, 250, 0)), url('../Backround image 4.jpg')",
          }}
        ></div>
        <div className="container flex justify-center items-center">
          <div className="w-11/12 md:w-10/12">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <img src="../drug.jpg" alt="drug" className="" />
                <p className="font-semibold text-base tracking-tight">
                  {t("Pharmaceutical products")} (14)
                </p>
              </div>
              <div>
                <img src="../cosmetic.jpg" alt="cosmetik" className="" />
                <p className="font-semibold text-base tracking-tight">
                  {t("Cosmetic products")} (8)
                </p>
              </div>
              <div>
                <img src="../stuffs.jpg" alt="stuffs" className="" />
                <p className="font-semibold text-base tracking-tight">
                  {t("Medical devices")} (6)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Products;
