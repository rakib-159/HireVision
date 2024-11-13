

import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Button from "./Button";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0 mb-0 md:mb-36">
            {/* Custom gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #FFE17D 0%, #9EFF9E 30%, #9EE7FF 50%, #B49EFF 75%, #D1BBFF 90%, #FFFFFF 100%)",
                }}
            ></div>

            {/* Content container */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                {/* New feature badge */}
                <div className="inline-flex items-center rounded-full bg-[#e3e2fb] bg-opacity-30 px-4 py-2 text-xs md:text-sm font-medium font-beVietnam text-[#5e44ff] backdrop-blur-xl mb-8">
                    <span className="mr-2 rounded-full bg-white px-3 py-1">
                        New
                    </span>
                    Create teams in Organisation
                    <IoMdArrowForward className="ml-1" size={15} />
                </div>

                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#02015a] font-poppins mb-6 !leading-tight">
                    Boost your hiring process
                    <br />
                    with AI solution
                </h1>

                {/* Subheadline */}
                <p className="max-w-xl mx-auto text-lg sm:text-xl text-[#4e5774] font-beVietnam mb-8">
                    Hirevision is used by numerous businesses, institutions, and
                    recruiters to significantly enhance their screening and
                    recruitment procedures.
                </p>

                {/* Trust badges */}
                <div className="flex justify-center items-center mb-8">
                    <div className="flex -space-x-2 mr-4">
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${
                                    i + 1
                                }.jpg`}
                                alt=""
                            />
                        ))}
                    </div>
                    <span className="text-sm text-[#4e5774] font-beVietnam font-medium">
                        Trusted already by 1.2k+
                    </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 rounded-lg bg-transparent text-[#573cff] font-medium font-beVietnam text-md hover:bg-opacity-90 transition duration-300 border border-white hover:bg-[#573cff] hover:text-white hover:border-none">
                        Learn more
                    </button>
                    <Button
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        text="Request Demo"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
