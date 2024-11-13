// import { useEffect, useState } from "react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out
//                 ${
//                     isScrolled || isHovered
//                         ? "bg-white/70 backdrop-blur-md shadow-md"
//                         : "bg-transparent"
//                 }
//             `}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     <div className="flex items-center">
//                         <img src="/logo.svg" alt="Logo" />
//                     </div>
//                     <div className="hidden sm:ml-6 sm:flex sm:items-center font-beVietnam">
//                         <a
//                             href="#features"
//                             className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
//                         >
//                             Features
//                         </a>
//                         <a
//                             href="#pricing"
//                             className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
//                         >
//                             Pricing
//                         </a>
//                         <a
//                             href="#contact"
//                             className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
//                         >
//                             Contact
//                         </a>
//                         <a
//                             href="#blog"
//                             className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
//                         >
//                             Blog
//                         </a>
//                     </div>
//                     <div className="-mr-2 flex items-center sm:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {!isOpen ? (
//                                 <svg
//                                     className="block h-6 w-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     className="block h-6 w-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {isOpen && (
//                 <div className="sm:hidden bg-white">
//                     <div className="pt-2 pb-3 space-y-1">
//                         <a
//                             href="#features"
//                             className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
//                         >
//                             Features
//                         </a>
//                         <a
//                             href="#pricing"
//                             className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
//                         >
//                             Pricing
//                         </a>
//                         <a
//                             href="#contact"
//                             className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
//                         >
//                             Contact
//                         </a>
//                         <a
//                             href="#blog"
//                             className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
//                         >
//                             Blog
//                         </a>
//                     </div>
//                     <div className="pt-4 pb-3 border-t border-gray-200">
//                         <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
//                             Duplicate in Framer
//                             <svg
//                                 className="ml-2 -mr-1 h-4 w-4"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out
                ${
                    isScrolled || isHovered
                        ? "bg-white/70 backdrop-blur-md shadow-md"
                        : "bg-transparent"
                } 
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="Logo" />
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center font-beVietnam">
                        <a
                            href="#features"
                            className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
                        >
                            Contact
                        </a>
                        <a
                            href="#blog"
                            className="px-3 py-2 rounded-md text-md font-medium text-[#03025a] hover:text-indigo-600"
                        >
                            Blog
                        </a>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden bg-white">
                    <div className="pt-2 pb-3 space-y-1">
                        <a
                            href="#features"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
                        >
                            Contact
                        </a>
                        <a
                            href="#blog"
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#03025a] hover:text-indigo-600 hover:bg-gray-50"
                        >
                            Blog
                        </a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
                            Duplicate in Framer
                            <svg
                                className="ml-2 -mr-1 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
