import React from "react";
import Img2 from "../../assets/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground beans, resulting in a rich, bold flavor.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "An Americano is made by diluting espresso with hot water, resulting in a lighter coffee flavor while maintaining the espresso's richness.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "A cappuccino consists of equal parts espresso, steamed milk, and milk foam, creating a creamy texture and rich coffee flavor.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Latte",
    description:
      "A latte is made with espresso and steamed milk, typically topped with a small amount of milk foam for creaminess.",
    aosDelay: "700",
  },
  {
    id: 5,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground beans, resulting in a rich, bold flavor.",
    aosDelay: "100",
  },
  {
    id: 6,
    img: Img2,
    name: "Americano",
    description:
      "An Americano is made by diluting espresso with hot water, resulting in a lighter coffee flavor while maintaining the espresso's richness.",
    aosDelay: "300",
  },
  {
    id: 7,
    img: Img2,
    name: "Cappuccino",
    description:
      "A cappuccino consists of equal parts espresso, steamed milk, and milk foam, creating a creamy texture and rich coffee flavor.",
    aosDelay: "500",
  },
  {
    id: 8,
    img: Img2,
    name: "Latte",
    description:
      "A latte is made with espresso and steamed milk, typically topped with a small amount of milk foam for creaminess.",
    aosDelay: "700",
  },
  {
    id: 9,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground beans, resulting in a rich, bold flavor.",
    aosDelay: "100",
  },
  {
    id: 10,
    img: Img2,
    name: "Americano",
    description:
      "An Americano is made by diluting espresso with hot water, resulting in a lighter coffee flavor while maintaining the espresso's richness.",
    aosDelay: "300",
  },
  {
    id: 11,
    img: Img2,
    name: "Cappuccino",
    description:
      "A cappuccino consists of equal parts espresso, steamed milk, and milk foam, creating a creamy texture and rich coffee flavor.",
    aosDelay: "500",
  },
  {
    id: 12,
    img: Img2,
    name: "Latte",
    description:
      "A latte is made with espresso and steamed milk, typically topped with a small amount of milk foam for creaminess.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-12 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
