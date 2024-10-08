import { Icon } from "@iconify/react";
import { footerLinks } from "/constants";
import { Logo, ScrollToTop } from "../common";

const Footer = () => {
  return (
    <section className="bg-dark-gray">
      <div className=" z-50 relative max-w-screen-2xl mx-auto flex flex-col gap-9 xl:gap-16 p-6 xl:px-32 xl:py-9">
        <div className="flex flex-col xl:flex-row justify-between gap-9">
          <div className="flex justify-between">
            <Logo />
            <div className="xl:hidden">
              <ScrollToTop />
            </div>
          </div>

          <div className="flex max-xl:flex-wrap gap-y-7 xl:gap-x-10">
            {footerLinks.map(({ title, sub_links }) => (
              <div
                key={title}
                className=" flex flex-col max-xl:w-1/3">
                <h4 className="text-latte text-sm md:text-lg font-normal tracking-widest">
                  {title}
                </h4>

                {sub_links.map(({ text, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    className="text-lighter-gray text-sm md:text-lg leading-5 xl:leading-8 font-normal tracking-widest hover:text-light-gray transition-all duration-300">
                    {text}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="max-xl:hidden">
            <ScrollToTop />
          </div>
        </div>

        <div className="w-full flex items-center justify-between text-cappuccino">
          <a
            href="tel:+79999999999"
            className="font-medium text-base md:text-2xl hover:underline">
            +7-999-999-99-99
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram profile"
            className="w-8 md:w-12 flex items-center justify-center">
            <Icon
              icon="mdi:instagram"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
