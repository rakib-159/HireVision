import { useState } from "react";
import BlogCards from "./BlogCards";
import Button from "./Button";

export default function BlogSection() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className="text-center my-6 md:my-12">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        BLOG
                    </span>
                </span>
                <h2 className="mt-1 section-head">From our Blog</h2>
            </div>
            <BlogCards />
            <div className="flex">
                <div className="mt-8 mx-auto">
                    <Button
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        text="Request Demo"
                    />
                </div>
            </div>
        </>
    );
}
