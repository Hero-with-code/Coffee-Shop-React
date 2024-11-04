import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import payment from "../../assets/credit-cards.webp"
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-brandDark min-h-auto">
        <div className="container grid md:grid-cols-3 pb-5 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Coffee Shop
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
            <a
              href="https://github.com/Hero-with-code"
              target="_blank"
              className="inline-block bg-black py-2 px-4 mt-5 text-sm rounded-full">
              Visit Our My WebSite Here! 
            </a>
            {/* social links */}
            <div className="flex items-center gap-3 mt-6">
                  <a href="https://github.com/Hero-with-code">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://github.com/Hero-with-code">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://github.com/Hero-with-code">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://github.com/Hero-with-code">
                    <FaWhatsappSquare className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
          </div>

          {/* Footer links */}
          <div className="col-span-2 sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Pages Links Here
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
              Pages Links Here
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address Here
              </h1>
              <div>
                <p className="mb-3">Abul Fazal, Delhi</p>
                <p>+91 911 704 8402</p>
                <h3 className="mt-3">Payment Here!</h3>
                <img src={payment} alt="Payment Method" className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
