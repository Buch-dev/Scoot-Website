"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AboutInfo from "../components/AboutInfo";
import Values from "../components/Values";
import FAQ from "../components/FAQ";

function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const circlesRef = useRef<HTMLImageElement>(null);

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Hero image area */}
      <div className="relative w-full h-[160px] md:h-[200px] lg:h-[200px]">
        <Image
          src={"/images/about-hero-mobile.jpg"}
          alt="about-hero-mobile"
          width={375}
          height={160}
          priority
          className="w-full h-full object-cover md:hidden lg:hidden"
        />
        <Image
          src={"/images/about-hero-tablet.jpg"}
          alt="about-hero-tablet"
          width={768}
          height={200}
          priority
          className="hidden w-full h-full object-cover md:block lg:hidden"
        />
        <Image
          src={"/images/about-hero-desktop.jpg"}
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
          About
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

      {/* AboutInfo below hero area */}
      <AboutInfo />
      {/* Our values */}
      <Values />
      {/* FAQ */}
      <FAQ />
    </section>
  );
}

export default Page;
