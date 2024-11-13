import { motion } from "framer-motion";
import React from "react";

const HowItWorks = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div
                className="max-w-3xl mx-auto text-center"
                variants={textVariants}
            >
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <motion.span
                        className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                        variants={textVariants}
                    >
                        HOW IT WORKS
                    </motion.span>
                </span>
                <motion.h1
                    className="text-3xl sm:text-6xl font-medium text-[#02015a] font-poppins mb-4 leading-tight"
                    variants={textVariants}
                >
                    Easy implementation in
                    <br />
                    three easy steps
                </motion.h1>
                <motion.p
                    className="text-lg font-beVietnam text-[#68708c] max-w-2xl mx-auto my-8"
                    variants={textVariants}
                >
                    Cutting-edge, user-friendly AI tool and growth analytics
                    designed to boost user conversion, engagement, and
                    retention.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default HowItWorks;
