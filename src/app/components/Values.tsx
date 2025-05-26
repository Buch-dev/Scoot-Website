import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Values() {
  const values = [
    {
      id: 1,
      title: "Our tech",
      description:
        "Our techWe’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
      image: "/images/our-tech.jpg",
    },
    {
      id: 2,
      title: "Our integrity",
      description:
        "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve..",
      image: "/images/our-integrity.jpg",
    },
    {
      id: 3,
      title: "Our community",
      description:
        "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
      image: "/images/our-community.jpg",
    },
  ];

  // Refs for each value card
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate each card
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.92,
            rotate: i % 2 === 0 ? -5 : 5,
            filter: "blur(10px)",
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
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.12,
            clearProps: "filter",
          }
        );
      }
    });
  }, []);

  return (
    <section className="mt-[120px] px-8 lg:px-[165px] flex flex-col gap-16 items-center">
      <h2
        ref={headingRef}
        className="text-[#495567] text-[32px] font-bold leading-8 tracking-[-1.429px]"
      >
        Our values
      </h2>
      <div className="flex flex-col gap-14 items-center justify-center lg:flex-row lg:gap-0 lg:justify-between">
        {values.map((value, idx) => (
          <div
            key={value.id}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative">
              <Image
                src={value.image}
                alt={value.title}
                width={240}
                height={240}
                priority
                className="rounded-full"
              />
              <div className="absolute top-48 left-[32%] h-24 w-24 bg-[#FCB72B] rounded-full text-[#495567] space-mono flex items-center justify-center text-2xl font-bold leading-7 tracking-[-1.071px]">
                0{value.id}
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-[#495567] text-2xl font-bold leading-7 tracking-[-1.071px]">
                {value.title}
              </h3>
              <p className="text-[#939CAA] text-[15px] leading-[25px] mt-[27px] md:w-[457px] lg:w-[350px]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
