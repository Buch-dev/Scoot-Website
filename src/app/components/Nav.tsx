"use client";
// This is a client component

import React, { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Link from "next/link";
import RegularButton from "./RegularButton";
import { gsap } from "gsap";

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (sidebarOpen && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [sidebarOpen]);

  return (
    <>
      <div
        ref={navRef}
        className="px-8 py-6 md:px-[39px] md:py-[34px] lg:px-[169px] flex items-center gap-[30vw] md:gap-[58.18px] md:justify-between relative z-50"
      >
        {/* Hamburger is only visible on mobile */}
        <div className="md:hidden" ref={hamburgerRef}>
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="block md:hidden"
          >
            <Hamburger />
          </button>
        </div>

        <div
          className="flex items-center justify-between gap-[58.18px]"
          ref={logoRef}
        >
          <Link href={"/"}>
            <Logo className="md:w-[107.817px] md:h-[28.56px]" />
          </Link>

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

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#333A44] z-50 flex flex-col items-start pt-10 px-8 gap-8 md:hidden shadow-lg"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-8 text-white text-3xl"
            >
              &times;
            </button>
            <nav className="flex flex-col items-start gap-8 w-full mt-8">
              <Link
                href="/about"
                className="text-white text-[18px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                href="/location"
                className="text-white text-[18px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Location
              </Link>
              <Link
                href="/careers"
                className="text-white text-[18px] font-bold leading-[25px] space-mono hover:text-[#FCB72B] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Careers
              </Link>
            </nav>
            <RegularButton
              className="bg-[#FCB72B] text-white py-[14px] px-[39px] text-[15px] font-bold leading-[25px] space-mono border-2 border-transparent hover:bg-transparent hover:border-[#FCB72B] hover:text-[#FCB72B] transition-colors w-full mt-8"
              onClick={() => setSidebarOpen(false)}
            >
              Get Scootin
            </RegularButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
