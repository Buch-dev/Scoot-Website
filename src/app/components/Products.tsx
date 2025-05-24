"use client";
// // This is a client component

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Products() {
  const services = [
    {
      name: "Locate with app",
      description:
        "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
      image: "/icons/locate.svg",
    },
    {
      name: "Pick your scooter",
      description:
        "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
      image: "/icons/scooter.svg",
    },
    {
      name: "Enjoy the ride",
      description:
        "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
      image: "/icons/ride.svg",
    },
  ];

  // Refs for each service card
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
            rotate: i % 2 === 0 ? -4 : 4,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
            clearProps: "filter",
          }
        );
      }
    });
  }, []);

  return (
    <section className="px-8 lg:px-[165px] relative mt-[120px] flex items-center justify-center md:mt-[122px] lg:mt-[160px]">
      <Horizontal className="hidden md:block absolute -top-[122px] left-[140px] lg:hidden" />
      <Vertical className="hidden lg:block absolute top-[100px] -left-[50px]" />
      <div className="flex flex-col items-center gap-12 md:w-[573px] lg:flex-row lg:w-full lg:mt-[60px] lg:gap-[30px] z-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start w-full lg:flex-col"
          >
            <Image
              width={56}
              height={56}
              className="md:w-24 md:h-24"
              src={service.image}
              alt={service.name}
            />
            <div className="flex flex-col items-center justify-center gap-6 md:w-[398px] md:items-start lg:max-w-[300px] xl:w-[350px]">
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.893px] text-[#495567] md:text-2xl md:tracking-[-1.071px]">
                {service.name}
              </h3>
              <p className="text-center text-[15px] leading-[25px] text-[#939CAA] md:text-left">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
