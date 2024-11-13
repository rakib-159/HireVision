import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { value: 75, suffix: "%", description: "Candidate match rate" },
    { value: 4000, suffix: "+", description: "Successful placements" },
    { value: 50, suffix: "+", description: "Operating countries" },
];

export default function MetricsSection() {
    const countersRef = useRef([]);

    useEffect(() => {
        countersRef.current.forEach((counter, index) => {
            gsap.fromTo(
                counter,
                { innerText: 0 },
                {
                    innerText: metrics[index].value,
                    duration: 3,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        counter.innerText =
                            Math.floor(counter.innerText) +
                            metrics[index].suffix;
                    },
                    onComplete: function () {
                        // Ensures the final value with suffix is set precisely after animation
                        counter.innerText =
                            metrics[index].value + metrics[index].suffix;
                    },
                }
            );
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
            <div className="text-center">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        METRICS
                    </span>
                </span>
                <h2 className="mt-2 section-head !text-4xl">
                    Numbers speaking for themselves
                </h2>
            </div>
            <dl className="mt-10 flex flex-col md:flex-row justify-center gap-8">
                {metrics.map((metric, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <div
                                className="hidden sm:block h-32 w-px bg-gray-300"
                                aria-hidden="true"
                            />
                        )}
                        <div className="flex flex-col text-center">
                            <dt
                                ref={(el) => (countersRef.current[index] = el)}
                                className="text-4xl md:text-8xl font-normal text-indigo-600 font-beVietnam"
                            >
                                0{metric.suffix}
                            </dt>
                            <dd className="mt-2 section-para">
                                {metric.description}
                            </dd>
                        </div>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
}
