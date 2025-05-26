"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RegularButton from "../components/RegularButton";
import WhyJoinUs from "../components/WhyJoinUs";
import Apply from "../components/Apply";

function page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const circlesRef = useRef<HTMLImageElement>(null);

  const services = [
    {
      id: 1,
      image: "/images/join-us.jpg",
      title: "Care to join our mission?",
      description:
        "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.98, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7 }
    )
      .from(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          rotate: -3,
          duration: 0.8,
          ease: "bounce.out",
        },
        "-=0.3"
      )
      .from(
        circlesRef.current,
        {
          x: 100,
          opacity: 0,
          rotate: 12,
          duration: 0.8,
        },
        "-=0.5"
      );
  }, []);

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
    <section className="relative overflow-hidden">
      {/* Hero image area */}
      <div className="relative w-full h-[160px] md:h-[200px] lg:h-[200px]">
        <Image
          src={"/images/careers-location-hero-mobile.jpg"}
          alt="about-hero-mobile"
          width={375}
          height={160}
          priority
          className="w-full h-full object-cover md:hidden lg:hidden"
        />
        <Image
          src={"/images/careers-locations-hero-tablet.jpg"}
          alt="about-hero-tablet"
          width={768}
          height={200}
          priority
          className="hidden w-full h-full object-cover md:block lg:hidden"
        />
        <Image
          src={"/images/careers-locations-hero-desktop.jpg"}
          alt="about-hero-desktop"
          width={768}
          height={200}
          priority
          className="hidden w-full h-full object-cover lg:block"
        />

        {/* Absolutely positioned heading and circles inside hero area */}
        <h2
          ref={headingRef}
          className="
              text-white font-bold text-[40px] leading-10 tracking-[-1.786px]
              absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2
              md:left-[97px] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:text-[56px] md:leading-[56px] md:tracking-[-2.5px]
              lg:left-[165px] lg:text-[64px] lg:leading-[64px] lg:tracking-[-2.857px]
            "
        >
          Careers
        </h2>
        <Image
          ref={circlesRef}
          src={"/patterns/white-circles.svg"}
          alt="semi-circles"
          width={234}
          height={63}
          className="absolute hidden md:block md:right-[-31px] top-[60px]"
        />
      </div>
      {services.map((service, idx) => (
        <div
          key={service.id}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          className={`flex flex-col items-center justify-center mt-[72px] gap-14 px-8 lg:flex-row lg:px-[165px]
            ${
              idx === 0 || idx === services.length - 1
                ? "lg:flex-row-reverse"
                : ""
            }
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
            <RegularButton className="bg-[#FCB72B] text-white py-[14px] px-[39px] text-[15px] font-bold leading-[25px] space-mono border-2 border-transparent hover:bg-transparent hover:border-[#FCB72B] hover:text-[#FCB72B] transition-colors w-fit">
              Say Hello
            </RegularButton>
          </div>
        </div>
      ))}
      {/* Line patterns */}
      <Image
        src={"/patterns/left-downward-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute top-[11%] left-32 w-[734.378px] h-auto scale-150 md:scale-100 md:top-[15%] md:left-20 lg:left-[550px] lg:top-[25%]"
      />
      {/* Why Join Us */}
      <WhyJoinUs />
      {/* Apply */}
      <Apply />
    </section>
  );
}

export default page;
