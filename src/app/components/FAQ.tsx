"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    title: "How it works",
    question_1: "How do I download the app?",
    answer_1:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
    question_2: "Can I find a nearby Scoots?",
    answer_2:
      "Yes, you can find nearby Scoots by using the map feature in the Scoot app. It will show you all available Scoots in your vicinity.",
    question_3: "Do I need a license to ride?",
    answer_3:
      "Yes, you need a valid driver's license to ride a Scoot. Make sure to check the local regulations regarding scooter licenses.",
  },
  {
    id: 2,
    title: "Safe driving",
    question_1: "Should I wear a helmet?",
    answer_1:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
    question_2: "How about the rules & regulations?",
    answer_2:
      "Each city has its own rules and regulations regarding scooter riding. Please refer to the Scoot app for specific guidelines in your area.",
    question_3: "What if I damage my Scoot?",
    answer_3:
      "If you damage your Scoot, please report it immediately through the Scoot app. Depending on the extent of the damage, you may be responsible for repair costs.",
  },
];

function FAQ() {
  // State: [sectionId-questionIndex]
  const [open, setOpen] = useState<[number, number] | null>(null);

  // Refs for animation
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Helper to get question/answer by index
  const getQA = (faq: any, idx: number) => ({
    question: faq[`question_${idx + 1}`],
    answer: faq[`answer_${idx + 1}`],
  });

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
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
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    cardRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(
          ref,
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
              trigger: ref,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            delay: (i % 3) * 0.1,
            clearProps: "filter",
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-[145px] px-8 lg:px-[165px] flex flex-col items-center"
    >
      <h2
        ref={headingRef}
        className="text-[#495567] font-bold text-[32px] leading-8 tracking-[-1.429px] md:text-5xl"
      >
        FAQs
      </h2>
      <div className="w-full">
        {faqs.map((faq, sectionIdx) => (
          <div
            key={faq.id}
            className="mt-12 flex flex-col items-center gap-8 md:mt-16 lg:flex-row lg:items-start"
          >
            <h3 className="text-[#495567] font-semibold text-[24px] leading-6 tracking-[-1.071px] md:text-[40px] lg:w-[50%]">
              {faq.title}
            </h3>
            <div className="space-y-4 w-full">
              {[0, 1, 2].map((qIdx) => {
                const { question, answer } = getQA(faq, qIdx);
                const isOpen = open?.[0] === faq.id && open?.[1] === qIdx;
                const cardIdx = sectionIdx * 3 + qIdx;
                return (
                  <div
                    key={qIdx}
                    ref={(el) => { cardRefs.current[cardIdx] = el; }}
                    className="w-full bg-[#F2F5F9] overflow-hidden transition-all duration-300 hover:bg-[#FFF4DF]"
                  >
                    <button
                      className="w-full flex items-center justify-between p-8 focus:outline-none"
                      onClick={() =>
                        setOpen(isOpen ? null : [faq.id, qIdx])
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}-${qIdx}`}
                    >
                      <h4 className="text-[#495567] font-bold text-[18px] leading-6 tracking-[-0.804px] text-left">
                        {question}
                      </h4>
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <Image
                          src="/icons/chevron.svg"
                          width={16}
                          height={8}
                          alt="FAQ Icon"
                        />
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${faq.id}-${qIdx}`}
                      className={`px-8 pb-6 text-[#667085] font-normal text-[15px] leading-[25px] tracking-[-0.714px] transition-all duration-300 ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                      style={{
                        transitionProperty: "max-height, opacity",
                      }}
                    >
                      {isOpen && <p>{answer}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
