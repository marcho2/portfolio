import foto from "/public/foto.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="inicio"
      className="flex min-h-full w-full items-center justify-center pt-16 md:pt-24 text-white"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img
            src={foto}
            alt="Foto de Sebastián Marchant"
            className="w-[280px] md:w-[350px] cursor-pointer rounded-full shadow-lg shadow-purple-900 transition-all duration-300 
                       hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600"
          />
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <h1 className="text-white text-4xl font-extrabold tracking-wide md:text-5xl mt-4">
            Sebastián Marchant
          </h1>
          <h3 className="text-purple-300 text-2xl font-medium md:text-3xl mt-2">
            Estudiante de Ingeniería Civil Informática
          </h3>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-[600px] leading-relaxed">
            Partí aprendiendo sobre el manejo y armado de computadores, luego aprendí Python y Java enfocado en Programación Orientada a Objetos, manejo de bases de datos SQL, Cisco Packet Tracer, manejo básico de Estadística en Excel, y actualmente estoy aprendiendo sobre desarrollo web: HTML, CSS y JS.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;