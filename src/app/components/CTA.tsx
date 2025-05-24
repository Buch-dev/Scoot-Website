"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      patternRef.current,
      { opacity: 0, scale: 0.7, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 }
    )
      .from(
        headingRef.current,
        { y: 60, opacity: 0, skewY: 8, duration: 0.7 },
        "-=0.6"
      )
      .from(
        buttonsRef.current,
        { y: 40, opacity: 0, scale: 0.8, duration: 0.6 },
        "-=0.4"
      );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative px-8 py-[88px] mt-[120px] lg:px-[165px] bg-[#495567] flex flex-col gap-10 items-center justify-center overflow-hidden md:py-[62px] lg:flex-row lg:justify-between lg:py-[102px]"
    >
      <Image
        ref={patternRef}
        src={"/patterns/semi-circles.svg"}
        alt="semi-circles"
        width={1153}
        height={347}
        className="absolute bottom-16 right-[20%] -translate-x-1/2 scale-[350%] md:scale-[180%] md:bottom-10 md:right-[10%] md:translate-x-0 lg:scale-[100%] lg:bottom-0 lg:-right-40"
        loading="eager"
        priority
      />
      <h3
        ref={headingRef}
        className="text-white text-[32px] font-bold leading-8 tracking-[-1.429px] text-center md:text-5xl md:leading-[48px] md:tracking-[-2.143px] md:w-[457px] lg:text-left lg:w-[500px]"
      >
        Sign up and <br className="hidden lg:block" /> Scoot off today
      </h3>
      <div className="flex gap-[12.86px]" ref={buttonsRef}>
        <Link href={"/"}>
          <Image
            src={"/icons/app-store.svg"}
            width={113.571}
            height={40}
            alt="app-store"
            className="lg:w-[159px] lg:h-[56px]"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/icons/google-play.svg"}
            width={130}
            height={40}
            alt="google-play"
            className="lg:w-[182px] lg:h-[56px]"
          />
        </Link>
      </div>
    </section>
  );
}

export default CTA;
