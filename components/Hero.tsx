import { FaLocationArrow } from "react-icons/fa";
import GridBackground from "./ui/GridBackground";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <section id="hero">
            <div className="pb-20 pt-36">
                <Spotlight className="-top-40 -left-10 md:-top-32 md:-left-20" />
                <Spotlight
                    className="-top-14 -left-10 h-[80vh] w-[60vw]"
                    fill="blue"
                />
                <Spotlight
                    className="top-0 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />

                <GridBackground />

                <div className="container relative flex justify-center my-20 text-blue-100">
                    <div className="flex flex-col justify-center items-center text-center gap-4">
                        <h2 className="tracking-wide uppercase text-sm text-blue-100 max-w-80">
                            Dynamic web magic with next.js
                        </h2>
                        <TextGenerateEffect
                            className="text-[30px] md:text-5l lg:text-6xl"
                            words="Transforming Concepts Into Seamless User Experiences"
                        />
                        <p className="md:tracking-wider text-sm md:text-lg lg:text-2xl ">
                            Hi! I&apos;m Abdalrahman, a Next.js Developer based
                            in Egypt.
                        </p>
                        <MagicButton
                            icon={{
                                element: <FaLocationArrow className="ml-2" />,
                                position: "right",
                            }}
                            text="Show my work"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
