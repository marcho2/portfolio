import { BiLogoCss3, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoPython, BiLogoReact } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";

const Tech = () => {
    return (
        <div id="tech" className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
            <h1 className="text-4xl font-light text-white md:text-6xl">Tecnologías Aprendidas</h1>
            <div className="flex flex-wrap items-center justify-center gap-10">
                <div>
                    <BiLogoPython className="cursor-pointer text-[80px] text-[#3776AB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <BiLogoJava className="cursor-pointer text-[80px] text-[#f89820] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <BiLogoHtml5 className="cursor-pointer text-[80px] text-[#e34c26] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <BiLogoJavascript className="cursor-pointer text-[80px] text-[#f7df1e] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <BiLogoCss3 className="cursor-pointer text-[80px] text-[#264de4] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <BiLogoReact className="cursor-pointer text-[80px] text-[#61dafb] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
                <div>
                    <FaLaravel className="cursor-pointer text-[80px] text-[#EB4432] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
                </div>
            </div>
        </div>
    );
};

export default Tech;
