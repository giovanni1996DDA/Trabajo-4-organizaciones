import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHub } from '@fortawesome/fontawesome-free-solid'

const NavLayout = () => {

  return (
    <>
        <div className="flex flex-col justify-between min-h-screen">
            <nav className="bg-indigo-600 flex  flex-col md:flex-row shadow-md justify-between">
                <div className="font-bold flex  justify-center text-2xl px-2 py-5 text-white whitespace-nowrap">
                    <h1>Trabajo Práctico Nº5 <span className=" text-slate-100">Cobranzas</span></h1>
                </div>
                <div className=" flex flex-row flex-wrap md:flex-nowrap justify-evenly">
                    <div className=" flex flex-row flex-grow justify-evenly">
                        <div className="text-white font-bold   hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                            <Link className="p-5 px-10" to="Punto1/">1</Link>
                        </div>
                        <div className="text-white font-bold  hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                            <Link className="p-5 px-10" to="Punto2/">2</Link>
                        </div>
                        <div className="text-white font-bold  hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                            <Link className="p-5 px-10" to="/Punto3/">3</Link>
                        </div>
                        <div className="text-white font-bold  hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                            <Link className="p-5 px-10"  to="Punto4/">4</Link>
                        </div>
                        <div className="text-white font-bold  hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                            <Link className="p-5 px-10"  to="Punto5/">5</Link>
                        </div>
                    </div>
                    <div className="text-white font-bold basis-96 hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                        <Link className="p-5 px-10"  to="/">Integrantes</Link>
                    </div>
                </div>
            </nav>
            <main className="grow flex flex-col p-5 justify-evenly gap-5">
                <Outlet />
            </main>
            <footer className="bg-indigo-600 flex p-3 text-white justify-around font-semibold">
                <div className="grow flex justify-between ">
                    <p className="h-fit self-center">Sistemas y Organizaciones - Eugenio Costa</p>
                </div>
                <a href="https://github.com/giovanni1996DDA/Trabajo-4-organizaciones.git" target="_blank" className="w-fit text-2xl"  rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </div>
    </>
  )
}

export default NavLayout