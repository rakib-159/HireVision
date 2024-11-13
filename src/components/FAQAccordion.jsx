import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question: "Does this app offer a free trial period?",
        answer: "All individual Framer subscriptions have been grandfathered into a Pro plan at your existing rate. If you were on a Small Team plan, then all 5 seats have been converted over to Pro seats at your existing rate. Regardless of your subscription plan, all new paid editors that you add to your subscription will be billed at the new plan rates.",
    },
    {
        question: "What payment methods do you offer?",
        answer: "All individual Framer subscriptions have been grandfathered into a Pro plan at your existing rate. If you were on a Small Team plan, then all 5 seats have been converted over to Pro seats at your existing rate. Regardless of your subscription plan, all new paid editors that you add to your subscription will be billed at the new plan rates.",
    },
    {
        question: "How much does a subscription cost?",
        answer: "All individual Framer subscriptions have been grandfathered into a Pro plan at your existing rate. If you were on a Small Team plan, then all 5 seats have been converted over to Pro seats at your existing rate. Regardless of your subscription plan, all new paid editors that you add to your subscription will be billed at the new plan rates.",
    },
    {
        question: "What is your refund policy?",
        answer: "All individual Framer subscriptions have been grandfathered into a Pro plan at your existing rate. If you were on a Small Team plan, then all 5 seats have been converted over to Pro seats at your existing rate. Regardless of your subscription plan, all new paid editors that you add to your subscription will be billed at the new plan rates.",
    },
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-6 md:py-12 text-center">
            <div className="flex justify-center mb-4">
                <span className="bg-indigo-100 text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full">
                    FAQ
                </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                We’ve got you covered
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="text-left">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`w-full flex justify-between items-center text-lg font-semibold py-4 transition-colors duration-200 ${
                                openIndex === index
                                    ? "text-indigo-700"
                                    : "text-indigo-900"
                            } hover:text-indigo-600`}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <FiChevronUp className="text-gray-500" />
                            ) : (
                                <FiChevronDown className="text-gray-400" />
                            )}
                        </button>
                        {openIndex === index && faq.answer && (
                            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
