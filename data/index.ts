import caseCobra from "@/assets/projects-thumbnails/casecobra-thumb.png";
import nextjs from "@/assets/tech-stack-icons/next.svg";
import ts from "@/assets/tech-stack-icons/ts.svg";
import authjs from "@/assets/tech-stack-icons/authjs.webp";
import uploadthing from "@/assets/tech-stack-icons/uploadthing.svg";
import prisma from "@/assets/tech-stack-icons/prisma.svg";
import postgresql from "@/assets/tech-stack-icons/postgresql.png";

export const PROJECTS = [
    {
        id: 1,
        title: "CaseCobra - E-Commerce Website",
        des: "A modern e-commerce platform for custom phone cases, built with cutting-edge web technologies. Create, customize, and sell phone cases with an elegant user interface and robust backend functionality.",
        img: caseCobra,
        iconLists: [nextjs, ts, authjs, prisma, uploadthing, postgresql],
        link: "https://github.com/boodyf2/casecobra",
    },
];
