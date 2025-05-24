"use client";
// This is a client component

import React, { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";
import Image from "next/image";
import { gsap } from "gsap";

function Hero() {
  // Create refs for elements to animate
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
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
        textRef.current,
        {
          y: 40,
          opacity: 0,
          skewY: 8,
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        {
          scale: 0.7,
          opacity: 0,
          rotate: 8,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        lineRef.current,
        {
          x: -200,
          opacity: 0,
          rotate: -10,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        arrowRef.current,
        {
          x: 200,
          opacity: 0,
          rotate: 25,
          duration: 0.8,
        },
        "-=0.7"
      )
      .from(
        circlesRef.current,
        {
          y: 120,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
        },
        "-=0.7"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[url('/images/home-hero-mobile.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center px-8 pt-[115px] pb-[34.56px] md:pt-[137px] md:pb-[34px] md:bg-[url('/images/home-hero-tablet.jpg')] lg:bg-[url('/images/home-hero-desktop.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:px-[169px] lg:pt-[153px] lg:pb-[152px] lg:items-start overflow-hidden"
    >
      <h2
        ref={headingRef}
        className="text-[40px] text-white font-bold tracking-[-1.786px] text-center leading-[40px] md:text-[56px] md:leading-[56px] md:tracking-[-2.5px] md:w-[573px] lg:leading-[56px] lg:tracking-[-2.5px] lg:w-[500px] lg:text-left"
      >
        Scooter sharing made simple
      </h2>
      <p
        ref={textRef}
        className="text-white text-center text-[15px] leading-[25px] mt-6 md:w-[573px] md:text-[18px] md:leading-[28px] lg:w-[405px] lg:text-[15px] lg:leading-[25px] lg:text-left lg:mt-10 lg:ml-[60px]"
      >
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>

      <RegularButton
        ref={buttonRef}
        className="bg-[#FCB72B] text-white py-[14px] px-[39px] text-[15px] font-bold leading-[25px] space-mono mt-[34px] lg:mt-10 lg:ml-[60px] border-2 border-transparent hover:bg-transparent hover:border-[#FCB72B] hover:text-[#FCB72B] transition-colors"
      >
        Get Scootin
      </RegularButton>

      <Image
        ref={lineRef}
        src="/patterns/line.svg"
        alt="Right Arrow Pattern"
        className="hidden lg:block absolute top-[350px] left-0 z-0"
        width={203}
        height={1}
      />
      <Image
        ref={arrowRef}
        src="/patterns/right-arrow.svg"
        alt="Right Arrow Pattern"
        className="mt-8 h-auto -ml-[120vw] md:-ml-[75vw] lg:ml-[37vw] lg:absolute lg:top-[350px] lg:mt-0"
        width={446.378}
        height={99.369}
      />
      <Image
        ref={circlesRef}
        src="/patterns/white-circles.svg"
        alt="white circles pattern"
        className="hidden md:block absolute md:bottom-[50px] md:-right-[30px] lg:-right-[70px] lg:bottom-40"
        width={234}
        height={63}
      />
    </section>
  );
}

export default Hero;
