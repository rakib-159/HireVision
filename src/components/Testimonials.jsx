import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

const testimonials = [
    {
        quote: "We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements.",
        name: "John Smith, HR Manager at ABC Tech Solutions.",
        image: "testimonial_1.png",
        bg: "bg-[#ece5ff]",
    },
    {
        quote: "As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations.",
        name: "Sarah Johnson, CEO of XYZ Innovations.",
        image: "testimonial_2.png",
        bg: "bg-[#fbf7b8]",
    },
    {
        quote: "The platform emphasis on diversity and inclusion impressed me, helping us create a more inclusive workforce.",
        name: "Michael Chen, HR Director at Acme Enterprises.",
        image: "testimonial_1.png", 
        bg: "bg-[#d9ffd8]",
    },
];

function TestimonialCard({ quote, name, image, bg }) {
    return (
        <div
            className={`w-full md:!w-[700px] h-full md:h-[500px] flex flex-col justify-between p-8 rounded-3xl ${bg} shadow-lg mb-8 overflow-hidden`}
        >
            <p className="section-head !text-xl md:!text-4xl mb-6 py-4">“{quote}”</p>
            <div className="flex items-center mt-auto">
                <img
                    src={image}
                    alt={name}
                    className="min-w-8 h-8 md:w-14 md:h-14 rounded-full object-center"
                />
                <div className="ml-4">
                    <p className="section-head !text-sm">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
      const section = sectionRef.current;
      if (!section) return;
      gsap.to(section.children, {
        xPercent: -100 * (testimonials.length - 1),
        ease: "none",
        duration: 1.7,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: `+=${section.offsetWidth}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, []);
  
    return (
      <section className="overflow-hidden bg-gray-100 py-8 md:py-16 relative">
        {/* Title and Subtitle */}
        <div className="flex justify-center mb-4">
          <span className="bg-indigo-100 text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold text-[#02015a] mb-8 text-center">
          Don’t take our word for it
        </h2>
  
        {/* Horizontal Scroll Testimonial Cards */}
        <div
          ref={sectionRef}
          className="hidden md:flex space-x-8 gap-[2rem] translate-x-40 w-[calc(100%*testimonials.length)]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=""
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
                bg={testimonial.bg}
              />
            </div>
          ))}
        </div>
  
        {/* Vertical Stack for Mobile */}
        <div className="flex md:hidden flex-col space-y-4 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              image={testimonial.image}
              bg={testimonial.bg}
            />
          ))}
        </div>
  
        {/* Button */}
        <div className="flex justify-center mt-8">
          <Button text="More Stories" isHovered={isHovered} setIsHovered={setIsHovered} />
        </div>
      </section>
    );
  }