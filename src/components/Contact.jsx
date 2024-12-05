import { BiMailSend, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contacto" className="flex flex-col md:flex-row justify-between items-center bg-purple-900 text-white p-10">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-6">Contactame</h1>
        <ul className="space-y-4">
          <li className="flex items-center text-lg">
            <BiMailSend className="text-yellow-400 text-2xl mr-3" />
            <span>sebastian.marchant1@cloud.uautonoma.cl</span>
          </li>
          <li className="flex items-center text-lg">
            <BiLogoLinkedin className="text-yellow-400 text-2xl mr-3" />
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com
            </a>
          </li>
          <a href="https://github.com/marcho2" className="flex items-center text-lg">
            <BiLogoGithub className="text-yellow-400 text-2xl mr-3" />
            <a
              href="https://github.com/marcho2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/marcho2
            </a>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
