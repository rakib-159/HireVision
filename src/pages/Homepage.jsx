import BlogSection from "../components/BlogSection";
import Brands from "../components/Brands";
import FAQSection from "../components/FAQSection";
import Feature_1 from "../components/Feature_1";
import Feature_2 from "../components/Feature_2";
import Feature_3 from "../components/Feature_3";
import Footer from "../components/Footer";
import HeroCards from "../components/HeroCards";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Included from "../components/Included";
import IncludedCards from "../components/IncludedCards";
import LastingImpression from "../components/LastingImpression";
import MetricsSection from "../components/MetricsSection";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/Testimonials";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HeroCards />
            <Brands />
            <HowItWorks />
            <Feature_1 />
            <Feature_2 />
            <Feature_3 />
            <Included />
            <IncludedCards />
            <LastingImpression />
            <MetricsSection />
            <TestimonialsSection />
            <FAQSection />
            <BlogSection />
            <LastingImpression />
            <Footer />
        </>
    );
};

export default Homepage;
