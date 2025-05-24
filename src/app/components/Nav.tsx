"use client";
// This is a client component

import React, { useEffect, useRef } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Link from "next/link";
import RegularButton from "./RegularButton";
import { gsap } from "gsap";

function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .from(
        logoRef.current,
        { x: -60, opacity: 0, rotate: -10, duration: 0.6 },
        "-=0.4"
      )
      .from(
        linksRef.current,
        { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        { scale: 0.7, opacity: 0, rotate: 8, duration: 0.5 },
        "-=0.4"
      )
      .from(
        hamburgerRef.current,
        { x: -30, opacity: 0, duration: 0.5 },
        "-=0.7"
      );
  }, []);

  return (
    <div
      ref={navRef}
      className="px-8 py-6 md:px-[39px] md:py-[34px] lg:px-[169px] flex items-center gap-[30vw] md:gap-[58.18px] md:justify-between"
    >
      {/* Hamburger is only visible on mobile */}
      <div className="md:hidden" ref={hamburgerRef}>
        <Hamburger className="block md:hidden" />
      </div>

      <div
        className="flex items-center justify-between gap-[58.18px]"
        ref={logoRef}
      >
        <Logo className="md:w-[107.817px] md:h-[28.56px]" />
        <nav
          className="hidden md:flex items-center justify-center gap-8"
          ref={linksRef}
        >
          <Link
            className="text-[#939CAA] text-[15px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="text-[#939CAA] text-[15px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
            href={"/location"}
          >
            Location
          </Link>
          <Link
            className="text-[#939CAA] text-[15px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
            href={"/careers"}
          >
            Careers
          </Link>
        </nav>
      </div>
      <RegularButton
        ref={buttonRef}
        className="hidden md:block bg-[#FCB72B] text-white py-[14px] px-[39px] text-[15px] font-bold leading-[25px] space-mono border-2 border-transparent hover:bg-transparent hover:border-[#FCB72B] hover:text-[#FCB72B] transition-colors"
      >
        Get Scootin
      </RegularButton>
    </div>
  );
}

export default Nav;
