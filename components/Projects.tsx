import Image from "next/image";
import bgImg from "@/assets/bg.png";
import { PinContainer } from "./ui/PinContainer";

import { FaLocationArrow } from "react-icons/fa";
import { PROJECTS } from "@/data";

const Projects = () => {
    return (
        <section className="py-20" id="projects">
            <h2 className="text-3xl text-center font-bold md:text-5xl">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h2>
            <div className="my-48 grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project) => (
                    <PinContainer
                        title="CaseCobra"
                        href="https://casecobra-lake-iota.vercel.app/"
                        className="w-full"
                        key={project.title}
                    >
                        <span className="space-y-8">
                            <span className="relative flex items-center justify-center w-[50vh] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <span className="bg-gray-900 rounded-lg w-full h-full">
                                    <Image src={bgImg} alt="bg" />
                                </span>
                                <Image
                                    className="absolute -bottom-8 rotate-6 rounded-lg w-11/12"
                                    src={project.img}
                                    alt="casecobra"
                                />
                            </span>
                            <span className="space-y-2">
                                <h3 className="font-bold text-2xl">
                                    {project.title}
                                </h3>
                                <p>{project.des}</p>
                            </span>
                            <span className="flex justify-between items-center">
                                <span className="flex -space-x-3">
                                    {project.iconLists.map((icon) => (
                                        <span
                                            key={icon}
                                            className="bg-zinc-950 border border-black-300 p-2 rounded-full"
                                        >
                                            <Image
                                                className="size-4"
                                                src={icon}
                                                alt="tech-icon"
                                            />
                                        </span>
                                    ))}
                                </span>

                                <p className="text-purple font-semibold">
                                    Check Live Site
                                    <FaLocationArrow className="inline-block ml-2" />
                                </p>
                            </span>
                        </span>
                    </PinContainer>
                ))}
            </div>
        </section>
    );
};

export default Projects;
