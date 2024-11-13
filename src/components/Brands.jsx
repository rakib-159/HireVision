import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const timelineRef = useRef(null);

    const logos = [
        "/brand-logo/1.png",
        "/brand-logo/2.png",
        "/brand-logo/3.png",
        "/brand-logo/4.png",
        "/brand-logo/5.png",
        "/brand-logo/6.png",
        "/brand-logo/7.png",
        "/brand-logo/8.png",
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        const logos = slider.querySelectorAll(".logo");
        const totalWidth = logos.length * (logos[0].offsetWidth + 40); // 40px for margin

        // Duplicate logos to create a seamless loop
        slider.appendChild(slider.cloneNode(true));

        gsap.set(logos, { opacity: 0.1 });

        timelineRef.current = gsap
            .timeline({
                repeat: -1,
                defaults: { duration: 30, ease: "none" },
            })
            .to(slider, {
                x: `-=${totalWidth}`,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });

        // ScrollTrigger for fade-in effect
        logos.forEach((logo) => {
            gsap.to(logo, {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: logo,
                    start: "left right",
                    end: "right left",
                    scroller: containerRef.current,
                    scrub: true,
                },
            });
        });

        return () => {
            if (timelineRef.current) timelineRef.current.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleMouseEnter = () => {
        if (timelineRef.current) timelineRef.current.timeScale(0.5);
    };

    const handleMouseLeave = () => {
        if (timelineRef.current) timelineRef.current.timeScale(1);
    };

    return (
        <div className=" py-8 md:py-24">
            <h2 className="text-2xl font-medium text-center mb-10 md:mb-20 text-[#68708c] font-beVietnam ">
                Already chosen by the world leaders
            </h2>
            <div
                ref={containerRef}
                className="max-w-6xl mx-auto overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={sliderRef} className="flex space-x-10">
                    {logos.map((logo, index) => (
                        <div key={index} className="logo flex-shrink-0">
                            <img
                                src={logo}
                                alt={`Brand logo ${index + 1}`}
                                className="w-40 h-20 object-contain filter grayscale" // Apply grayscale filter for black-and-white effect
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
