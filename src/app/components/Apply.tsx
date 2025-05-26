"use client";

import React, { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Apply() {
  const postions = [
    {
      id: 1,
      position: "General Manager",
      location: "Jakarta, Indonesia",
    },
    {
      id: 2,
      position: "UI/UX Designer",
      location: "Yokohama, Japan",
    },
    {
      id: 3,
      position: "Blog Content Copywriter",
      location: "New York, United States",
    },
    {
      id: 4,
      position: "Graphic Designer",
      location: "New York, United States",
    },
    {
      id: 5,
      position: "Fleet Supervisor",
      location: "Jakarta, Indonesia",
    },
    {
      id: 6,
      position: "UX Analyst",
      location: "London, United Kingdom",
    },
  ];

  // Refs for each job card
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.97,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.08,
            clearProps: "filter",
          }
        );
      }
    });
  }, []);

  return (
    <section className="px-8 lg:px-[165px] mt-[145px]">
      <ul className="space-y-4 ">
        {postions.map((job, i) => (
          <li
            key={job.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="px-8 pt-9 pb-8 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#F2F5F9] flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-12"
          >
            <div className="flex flex-col items-center gap-1 md:items-start">
              <h2 className="text-lg text-[#495567] font-bold leading-6 tracking-[-0.804px] md:text-2xl">
                {job.position}
              </h2>
              <p className="text-[#495567] text-[15px] leading-[25px]">
                {job.location}
              </p>
            </div>

            <RegularButton className="bg-[#FCB72B] text-white py-[14px] px-[39px] text-[15px] font-bold leading-[25px] space-mono border-2 border-transparent hover:bg-transparent hover:border-[#FCB72B] hover:text-[#FCB72B] transition-colors w-full md:w-fit">
              Apply
            </RegularButton>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Apply;
