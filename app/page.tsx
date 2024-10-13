"use client";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Homepage = () => {
    return (
        <>
            <header className="fixed z-30 w-full">
                <Navbar />
            </header>
            <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
                <div className="max-w-7xl w-full">
                    <Hero />
                    <About />
                    <Projects />
                    <Approach />
                </div>
            </main>
            <footer className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
                <Footer />
            </footer>
        </>
    );
};

export default Homepage;
