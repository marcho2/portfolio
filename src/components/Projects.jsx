const Projects = () => {
    return (
        <div id="projectos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            
            <div className="p-4 border border-teal-50 rounded-xl shadow-lg bg-[#392259] transition duration-300 hover:scale-105">
                <h3 className="mb-4 text-xl font-medium text-white">To Do List</h3>
                <img
                    src="/public/to-do-list.png"
                    alt="To Do List"
                    className="w-full rounded-2xl h-auto object-cover"
                />
                <div className="flex gap-5 mt-5 justify-center">
                    <a
                        href="https://github.com/marcho2/mitodolist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#333333] hover:bg-[#555555]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://marcho2.github.io/mitodolist/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#6c63ff] hover:bg-[#5a54cc]"
                    >
                        Demo
                    </a>
                </div>
            </div>
            <div className="p-4 border border-teal-50 rounded-xl shadow-lg bg-[#392259] transition duration-300 hover:scale-105">
                <h3 className="mb-4 text-xl font-medium text-white">Sistema CRUD para Productos</h3>
                <img
                    src="/public/crud-web.png"
                    alt="Sistema CRUD"
                    className="w-full rounded-2xl h-auto object-cover"
                />
                <div className="flex gap-5 mt-5 justify-center">
                    <a
                        href="https://github.com/marcho2/crud-web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#333333] hover:bg-[#555555]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://marcho2.github.io/crud-web/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#6c63ff] hover:bg-[#5a54cc]"
                    >
                        Demo
                    </a>
                </div>
            </div>
            <div className="p-4 border border-teal-50 rounded-xl shadow-lg bg-[#392259] transition duration-300 hover:scale-105">
                <h3 className="mb-4 text-xl font-medium text-white">Anterior Portfolio Personal</h3>
                <img
                    src="/public/ant-portfolio.png"
                    alt="Portfolio Personal"
                    className="w-full rounded-2xl h-auto object-cover"
                />
                <div className="flex gap-5 mt-5 justify-center">
                    <a
                        href="https://github.com/marcho2/presentacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#333333] hover:bg-[#555555]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://marcho2.github.io/presentacion/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition duration-150 rounded-lg bg-[#6c63ff] hover:bg-[#5a54cc]"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
