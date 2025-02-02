"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import MagicButton from "./MagicButton";
import { cn } from "@/lib/utils";

export function CanvasRevealEffectDemo() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black-100 w-full gap-4 mx-auto px-8">
                <Card
                    title="Planning & Strategy"
                    description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
                    icon={
                        <MagicButton className="rounded-full font-bold text-2xl">
                            <span className="text-2xl font-bold text-purple">
                                Phase 1
                            </span>
                        </MagicButton>
                    }
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="rounded-3xl overflow-hidden bg-emerald-900"
                    />
                </Card>
                <Card
                    title="Development & Progress Update"
                    description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
                    icon={
                        <MagicButton className="rounded-full font-bold text-2xl">
                            <span className="text-2xl font-bold text-purple">
                                Phase 2
                            </span>
                        </MagicButton>
                    }
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="rounded-3xl overflow-hidden bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card
                    title="Development & Launch"
                    description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
                    icon={
                        <MagicButton className="rounded-full font-bold text-2xl">
                            <span className="text-2xl font-bold text-purple">
                                Phase 3
                            </span>
                        </MagicButton>
                    }
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="rounded-3xl overflow-hidden bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    description,
    icon,
    className,
    children,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border rounded-3xl border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[35rem]"
        >
            <Icon className="absolute h-6 w-6 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-2 -right-2 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0 rounded-full"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center translate-y-20 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2
                    className={cn(
                        "text-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
                        className
                    )}
                >
                    {title}
                </h2>
                <p
                    className={cn(
                        "text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200",
                        className
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export const Icon = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    );
};
