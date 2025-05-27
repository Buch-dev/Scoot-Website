"use client";

import React, { useRef, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoNavRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      footerRef.current,
      { opacity: 0, y: 80, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }
    )
      .from(
        logoNavRef.current,
        { x: -60, opacity: 0, rotate: -6, duration: 0.7 },
        "-=0.5"
      )
      .from(
        socialRef.current,
        { x: 60, opacity: 0, scale: 0.8, duration: 0.7 },
        "-=0.6"
      );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="px-8 lg:px-[165px] text-[#939CAA] pt-16 pb-[88px] bg-[#333A44] flex flex-col items-center gap-[85px] md:flex-row md:pt-9 md:pb-[35px] md:justify-between"
    >
      <div
        ref={logoNavRef}
        className="flex flex-col items-center gap-[41.44px] md:flex-row md:gap-[58.58px]"
      >
        <Link href={"/"}>
          <Logo color="#fff" width={107.817} height={28.56} />
        </Link>

        <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <Link
            className="space-mono text-[15px] font-bold leading-[25px] hover:text-[#FCB72B] transition-colors"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="space-mono text-[15px] font-bold leading-[25px] hover:text-[#FCB72B] transition-colors"
            href={"/location"}
          >
            Location
          </Link>
          <Link
            className="space-mono text-[15px] font-bold leading-[25px] hover:text-[#FCB72B] transition-colors"
            href={"/careers"}
          >
            Careers
          </Link>
        </nav>
      </div>
      <nav
        ref={socialRef}
        className="flex flex-row items-center justify-between w-[120px]"
      >
        <Link href={""}>
          <Image
            src={"/icons/facebook.svg"}
            alt="facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/icons/twitter.svg"}
            alt="twitter"
            width={24}
            height={24}
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/icons/instagram.svg"}
            alt="instagram"
            width={24}
            height={24}
          />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
