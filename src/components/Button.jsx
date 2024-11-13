const Button = ({ isHovered, setIsHovered, text }) => {
    return (
        <button
            className={`flex items-center justify-center px-5 py-3 text-md font-medium font-beVietnam rounded-lg transition-all duration-300 ease-in-out ${
                isHovered
                    ? "bg-indigo-600 text-white pr-6"
                    : "bg-indigo-600 text-white pr-6"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="mr-2">{text}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                    isHovered ? "transform translate-x-2 -rotate-45" : ""
                }`}
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
    );
};

export default Button;
