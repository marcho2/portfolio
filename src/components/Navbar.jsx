const Navbar = () => {

    return(
        <nav className="fixed top-0 z-10 flex w-full  justify-between border-b border-b-gray-700 bg-black/50 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <ul className="flex gap-10 justify-center flex-1">
                <a href="#inicio" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Inicio</li>
                </a>
                <a href="#projectos" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projectos</li>
                </a>
                <a href="#contacto" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contacto</li>
                </a>
            </ul>
        </nav>
        
    )
}

export default Navbar