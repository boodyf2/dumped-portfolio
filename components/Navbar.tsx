const Navbar = () => {
    return (
        <div className="my-5 mx-auto w-80 px-8 py-4 black-gradient border border-white/[0.1] rounded-2xl">
            <nav>
                <ul className="flex justify-center gap-8">
                    <li>
                        <a
                            href="#about"
                            className="cursor-pointer hover:text-white-100 transition"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="cursor-pointer hover:text-white-100 transition"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="cursor-pointer hover:text-white-100 transition"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
