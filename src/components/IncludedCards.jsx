import { motion } from "framer-motion";
import React from "react";
import {
    FaBullseye,
    FaChartLine,
    FaClipboardCheck,
    FaGlobe,
    FaHandsHelping,
    FaPalette,
} from "react-icons/fa";

const features = [
    {
        icon: <FaBullseye size={32} className="text-white" />,
        title: "Find Your Perfect Fit",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaGlobe size={32} className="text-white" />,
        title: "Hire Globally with Ease",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaChartLine size={32} className="text-white" />,
        title: "Make Data-Driven Decisions",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaClipboardCheck size={32} className="text-white" />,
        title: "Simplify Your Hiring Process",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaHandsHelping size={32} className="text-white" />,
        title: "Tailored to Your Needs",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
    {
        icon: <FaPalette size={32} className="text-white" />,
        title: "Focus on the Best Fits",
        description:
            "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IncludedCards() {
    return (
        <div className="bg-white py-6 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="text-center space-y-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="card-head">{feature.title}</h3>
                            <p className="card-para">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
