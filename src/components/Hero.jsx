import foto from "/public/foto.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="inicio"
      className="flex flex-col md:flex-row items-center justify-center min-h-full w-full gap-16 pt-24 md:pt-36 text-white">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <img
          src={foto}
          alt="Foto de Sebastián Marchant"
          className="w-[500px] md:w-[500px] rounded-full shadow-lg shadow-purple-900 transition-all duration-300 
                     hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-white text-4xl font-extrabold tracking-wide md:text-5xl">
          Sebastián Marchant
        </h1>
        <h3 className="text-purple-300 text-2xl font-medium md:text-3xl mt-2">
          Estudiante de Ingeniería Civil Informática
        </h3>
        <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
          Partí aprendiendo sobre el manejo y armado de computadores, luego aprendí Python y Java enfocado en Programación Orientada a Objetos, manejo de bases de datos SQL, Cisco Packet Tracer, manejo básico de Estadística en Excel, y actualmente estoy aprendiendo sobre desarrollo web: HTML, CSS y JS.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
