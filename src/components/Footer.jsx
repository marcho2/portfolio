import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="rounded-none shadow m-4 bg-[#372862] backdrop-blur-lg w-full xl:w-[1200px] mx-auto mb-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-[#e54afa] sm:text-center">
          © 2024{" "}
          <a
            href="/portafolio/#inicio"
            className="hover:text-emerald-300 transition-all"
          >
            Sebastian Marchant
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#e54afa] sm:mt-0 gap-4">
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
          <a href="https://github.com/marcho2/" className="cursor-pointer opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
            <BsGithub />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
