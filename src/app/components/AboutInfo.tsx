import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutInfo() {
  const services = [
    {
      id: 1,
      title: "Mobility for the digital era",
      description:
        "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
      image: "/images/digital-era.jpg",
    },
    {
      id: 2,
      title: "Better urban living",
      description:
        "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
      image: "/images/better-living.jpg",
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
            y: 100,
            scale: 0.95,
            rotate: i % 2 === 0 ? -6 : 6,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
            clearProps: "filter",
          }
        );
      }
    });
  }, []);

  return (
    <section className="relative px-8 lg:px-[165px] mt-[120px] flex flex-col items-center justify-center gap-[120px]">
      {services.map((service, idx) => (
        <div
          key={service.id}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          className={`flex flex-col items-center justify-center gap-14 lg:flex-row
            ${idx === 0 ? "lg:flex-row-reverse" : ""}
          `}
        >
          <Image
            width={311}
            height={311}
            src={service.image}
            alt={service.title}
            className="rounded-full md:w-[445px] md:h-auto"
          />
          <div className="flex flex-col text-center justify-center items-center gap-8 md:gap-10 lg:w-[445px] lg:text-left lg:items-start">
            <h3 className="text-[32px] font-bold text-center text-[#495567] leading-8 tracking-[-1.429px] md:w-[457px] md:text-5xl md:leading-[48px] md:tracking-[-2.143px] lg:text-left">
              {service.title}
            </h3>
            <p className="text-center text-[#939CAA] text-[15px] leading-[25px] md:w-[573px] lg:text-left lg:w-[405px] lg:text-[15px] lg:leading-[25px]">
              {service.description}
            </p>
          </div>
        </div>
      ))}
      {/* Circle patterns */}
      <Image
        src={"/patterns/circle.svg"}
        width={445}
        height={445}
        alt="circle"
        className="hidden md:block absolute top-0 -right-[350px]"
      />
      <Image
        src={"/patterns/circle.svg"}
        width={445}
        height={445}
        alt="circle"
        className="hidden md:block absolute md:bottom-64 lg:bottom-0 -left-[350px]"
      />
      {/* Line patterns */}
      <Image
        src={"/patterns/left-upward-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute top-44 left-32 scale-150 md:scale-100 md:left-12 md:top-[250px] lg:left-[550px]"
      />
      <Image
        src={"/patterns/right-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute bottom-[450px] -left-[47px] scale-100 md:scale-75 md:-left-[300px] md:bottom-[500px] lg:-left-[250px] lg:bottom-[220px]"
      />
    </section>
  );
}

export default AboutInfo;
