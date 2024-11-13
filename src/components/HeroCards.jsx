import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCards() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const cards = cardsRef.current;

        gsap.to(cards, {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });
    }, []);

    const cardData = [
        { size: "w-64 h-80", isLarge: false, img: "/herocard_1.png" },
        { size: "w-64 h-80", isLarge: false, img: "/herocard_2.png" },
        { size: "w-64 h-80", isLarge: false, img: "/herocard_3.png" },
        { size: "w-80 h-96", isLarge: true, img: "/herocard_4.png" },
        { size: "w-64 h-80", isLarge: false, img: "/herocard_5.png" },
        { size: "w-64 h-80", isLarge: false, img: "/herocard_6.png" },
        { size: "w-64 h-80", isLarge: false, img: "/herocard_7.png" },
        { size: "w-80 h-96", isLarge: true, img: "/herocard_8.png" },
    ];

    return (
        <div ref={containerRef} className="overflow-hidden">
            <div className="flex items-center space-x-4 my-8 md:my-20">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`flex-shrink-0 ${
                            card.size
                        } rounded-lg shadow-lg overflow-hidden ${
                            card.isLarge ? "-mt-8" : ""
                        }`}
                    >
                        <img
                            src={card.img}
                            alt={`Card ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
