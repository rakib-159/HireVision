import React, { useState } from "react";

// Sample FAQ data
const faqs = [
    {
        question: "Does this app offer a free trial period?",
        answer: "All individual Framer subscriptions have been grandfathered into a Pro plan at your existing rate. If you were on a Small Team plan, then all 5 seats have been converted over to Pro seats at your existing rate. Regardless of your subscription plan, all new paid editors that you add to your subscription will be billed at the new plan rates.",
    },
    {
        question: "What payment methods do you offer?",
        answer: "We accept various payment methods including credit cards, PayPal, and wire transfer for eligible accounts.",
    },
    {
        question: "How much does a subscription cost?",
        answer: "Subscription pricing varies based on the plan chosen. Please refer to our pricing page for more details.",
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 14-day refund policy for any subscription-related issues. Please contact support for assistance.",
    },
];

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div
            className={`px-4 rounded-xl my-2 ${
                isOpen ? "bg-[#ecf1f7]" : "bg-white"
            }`}
        >
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 text-lg font-semibold text-[#1E1E62]"
            >
                <span className="font-medium font-beVietnam text-xl">
                    {question}
                </span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "max-h-screen opacity-100 py-4"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="text-[#4A4A68] rounded-lg mb-2 text-md font-beVietnam">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="text-center my-6 md:my-12">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-4">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        FAQs
                    </span>
                </span>
                <h2 className="mt-1 section-head">We’ve got you covered</h2>
            </div>
            <section className="max-w-4xl mx-auto p-4 md:p-8 rounded-lg">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </section>
        </>
    );
}
