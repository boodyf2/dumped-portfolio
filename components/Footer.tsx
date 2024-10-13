import FooterBg from "@/assets/footer-grid.svg";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

const Footer = () => {
    const curYear = new Date().getFullYear();

    return (
        <>
            <div className="w-full absolute bottom-0">
                <Image
                    src={FooterBg}
                    alt="footer-bg"
                    className="mx-auto object-cover object-center"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 px-5 md:px-36 mx-auto">
                <h2 className="text-2xl md:text-6xl font-bold text-center ">
                    Ready to take <span className="text-purple">your </span>
                    digital presence to the next level?
                </h2>
                <p>
                    Reach out to me today and let&apos;s discuss how I can help
                    you achieve your goals
                </p>
                <MagicButton
                    icon={{
                        element: <FaLocationArrow className="ml-2" />,
                        position: "right",
                    }}
                >
                    <a href="mailto:abdalrahman.vim@gmail.com">
                        Let&apos;s get in touch
                    </a>
                </MagicButton>
            </div>

            <div className="my-28 w-full flex justify-around">
                <p>Copyright ©{curYear} Abdalrahman Mahmoud </p>
                <div className="flex gap-4">
                    <a
                        className="p-2 rounded-xl bg-gray-900 border border-gray-800"
                        href="https://github.com/boodyf2"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="p-2 rounded-xl bg-gray-900 border border-gray-800"
                        href="https://linkedin.com/in/abdalrahmanf2"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
