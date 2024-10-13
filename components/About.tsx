"use client";
import Image from "next/image";
import Grid from "./Grid";
import { GlobeDemo } from "./ui/GlobePreview";
import { StarsCard } from "./ui/StarsCard";
import termWindow from "@/assets/b4.svg";
import grid from "@/assets/grid.svg";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import MagicButton from "./ui/MagicButton";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "lottie-react";

const About = () => {
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText("abdalrahman.vim@gmail.com");
        setIsEmailCopied(true);
    };

    // const lottieDefaultOptions = {
    //     loop: false,
    //     autoplay: isEmailCopied,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    // };

    return (
        <section className="relative py-20" id="about">
            <Grid>
                <Grid.Item className="md:col-span-5 row-span-8">
                    <StarsCard>
                        <h2 className="text-2xl md:text-4xl font-bold">
                            I prioritize client collaboration, fostering open
                            communication
                        </h2>
                    </StarsCard>
                </Grid.Item>

                <Grid.Item className="h-80 overflow-hidden md:col-span-3 row-span-4">
                    <GlobeDemo />
                </Grid.Item>

                <Grid.Item className="relative md:col-span-3 row-span-4">
                    <h2 className="text-xl md:text-2xl p-8 font-bold">
                        Tech enthusiast with a passion for development.
                    </h2>

                    {/* Terminal Window */}
                    <div className="h-full w-full absolute -bottom-14 -right-60">
                        <Image
                            className="object-cover object-center"
                            src={termWindow}
                            alt="Terminal Window"
                        />
                    </div>

                    {/* Bg */}
                    <div className="h-full w-full absolute -top-10 left-0">
                        <Image
                            className="object-cover object-center"
                            src={grid}
                            alt="grid-bg"
                        />
                    </div>
                </Grid.Item>

                <Grid.Item className="relative md:col-span-8 p-4">
                    <div className="flex justify-around items-center gap-4">
                        <div className="description">
                            <p className="text-xs md:text-sm tracking-widest uppercase text-white-100">
                                I constantly try to improve
                            </p>
                            <h2 className="text-2xl md:text-4xl font-bold">
                                My tech stack
                            </h2>
                        </div>

                        <div
                            id="tech-stack"
                            className="flex gap-4 rotate-3 scale-110"
                        >
                            <div className="relative flex flex-col gap-4 -bottom-5">
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    Next.Js
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    ReactJs
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    Typescript
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    <div className="p-3" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative -top-5">
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    <div className="p-3" />
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    Tailwind
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    AuthJs
                                </div>
                                <div className="p-4 text-center bg-black-300/[0.06] rounded-lg">
                                    MongoDb
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bg */}
                    <div className="h-full w-full absolute top-0 left-0">
                        <Image
                            className="w-full object-fill object-center select-none "
                            src={grid}
                            alt="grid-bg"
                        />
                    </div>
                </Grid.Item>

                <Grid.Item className="relative md:col-span-8">
                    <div className="flex flex-col items-center gap-4 relative z-10 p-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-center ">
                            Do you want to start a project together?
                        </h2>
                        <MagicButton
                            onClick={copyEmail}
                            icon={{
                                element: <FaCopy className="mr-2" />,
                                position: "left",
                            }}
                            disabled={isEmailCopied}
                            className="disabled:opacity-75 transition-all"
                        >
                            {!isEmailCopied
                                ? "Copy my email address"
                                : "Email is copied!"}
                        </MagicButton>
                        {/* {isEmailCopied && ( */}
                        {/*     <Lottie */}
                        {/*         {...lottieDefaultOptions} */}
                        {/*         height={200} */}
                        {/*         width={400} */}
                        {/*         className="absolute -top-20 right-50" */}
                        {/*     /> */}
                        {/* )} */}
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 ">
                        <BackgroundGradientAnimation className="object-cover object-center" />
                    </div>
                </Grid.Item>
            </Grid>
        </section>
    );
};

export default About;
