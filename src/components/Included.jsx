import { motion } from "framer-motion";
import React from "react";

const Included = () => {
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
                        INCLUDED
                    </motion.span>
                </span>
                <motion.h2
                    className="section-head2 mb-4"
                    variants={textVariants}
                >
                    Powerful features tailored to your needs
                </motion.h2>
                <motion.p className="section-para py-4" variants={textVariants}>
                    Gain valuable data-driven insights into talent markets
                    worldwide.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Included;
