import { Link, Outlet } from "react-router-dom"

const NavLayout = () => {
  return (
    <>
        <div className="flex flex-col justify-between min-h-screen">
            <nav className="bg-indigo-600 flex flex-nowrap flex-col md:flex-row shadow-md justify-between">
                <div className="font-bold flex  justify-center text-2xl px-2 py-5 text-white whitespace-nowrap">
                    <h1>Trabajo Práctico Nº5 <span className=" text-slate-100">Cobranzas</span></h1>
                </div>
                <div className=" flex flex-row">
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
                    <div className="text-white font-bold  hover:bg-indigo-400 transition-colors text-center flex flex-col justify-center">
                        <Link className="p-5 px-10"  to="/">Integrantes</Link>
                    </div>
                </div>
            </nav>
            <main className="grow flex flex-col p-5 justify-evenly gap-5">
                <Outlet />
            </main>
            <footer className="bg-indigo-600 grid grid-cols-2 shadow-md p-3 text-white font-semibold">
                <p>Sistemas y organizaciones</p>
                <p className="text-right">Eugenio Costa</p>
            </footer>
        </div>
    </>
  )
}

export default NavLayout