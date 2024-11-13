import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Logo and Tagline */}
                    <div className="col-span-1 lg:col-span-2">
                        <img src="/logo_icon.svg" alt="" className="w-12" />
                        <p className="mt-4 section-para w-full md:max-w-64">
                            Significantly enhance your screening and recruitment
                            procedures.
                        </p>
                    </div>

                    {/* Main Navigation */}
                    <nav className="col-span-1">
                        <ul className="space-y-4">
                            {[
                                "Product",
                                "Features",
                                "Pricing",
                                "Use case",
                                "Community",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="section-head !text-2xl md:!text-4xl"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Resources */}
                    <nav className="col-span-1 pl-0 md:pl-20">
                        <h3 className="text-xl font-semibold text-indigo-900 mb-4 font-beVietnam">
                            Resources
                        </h3>
                        <ul className="space-y-2 font-beVietnam text-lg">
                            {[
                                "Blog",
                                "Apps",
                                "Learn",
                                "Integrations",
                                "Careers",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-500 hover:text-indigo-600"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company */}
                    <nav className="col-span-1">
                        <h3 className="text-xl font-semibold text-indigo-900 mb-4 font-beVietnam">
                            Company
                        </h3>
                        <ul className="space-y-2 font-beVietnam text-lg">
                            {[
                                "Our Story",
                                "Our Team",
                                "Press",
                                "Contact Us",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-500 hover:text-indigo-600"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        Hirevision • Copyright © 2024
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-indigo-600 mr-4"
                        >
                            Terms of service
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-indigo-600"
                        >
                            Privacy policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
