"use client";
// // This is a client component

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const services = [
    {
      id: 1,
      image: "/images/telemetry.jpg",
      title: "Easy to use riding telemetry",
      description:
        "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    },
    {
      id: 2,
      image: "/images/near-you.jpg",
      title: "Coming to a city near you",
      description:
        "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    },
    {
      id: 3,
      image: "/images/payments.jpg",
      title: "Zero hassle payments",
      description:
        "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
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
    <section className="relative px-8 lg:px-[165px] mt-[120px] flex flex-col items-center justify-center gap-[120px] overflow-hidden">
      {services.map((service, idx) => (
        <div
          key={service.id}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          className={`flex flex-col items-center justify-center gap-14 lg:flex-row
            ${idx === 0 || idx === services.length - 1 ? "lg:flex-row-reverse" : ""}
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
              Learn More
            </RegularButton>
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
        className="hidden md:block absolute top-[35%] -left-[350px]"
      />
      <Image
        src={"/patterns/circle.svg"}
        width={445}
        height={445}
        alt="circle"
        className="hidden md:block absolute bottom-[14%] -right-[350px] lg:bottom-0"
      />
      {/* Line patterns */}
      <Image
        src={"/patterns/left-downward-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute top-44 left-10 w-[734.378px] h-auto md:top-[300px] lg:left-[550px]"
      />
      <Image
        src={"/patterns/right-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute top-[800px] right-80 w-[734.378px] h-auto md:top-[900px] lg:right-[900px] lg:top-[500px]"
      />
      <Image
        src={"/patterns/left-downward-arrow.svg"}
        width={734.378}
        height={99.369}
        alt="arrow-left"
        className="absolute w-[734.378px] h-auto bottom-[550px] left-36 md:left-[410px] md:bottom-[550px] lg:left-[900px] lg:bottom-[200px]"
      />
    </section>
  );
}

export default Services;
