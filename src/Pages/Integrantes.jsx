import React from 'react'
import { Link } from 'react-router-dom'

const Integrantes = () => {
  return (
        <div className=" flex flex-col p-5 h-">
            <div className='text-center'>
                <h1 className=" text-black font-black text-3xl"><span className="text-indigo-500">Integrantes</span> del equipo</h1> 
            </div>
            <div className='p-3 flex flex-col gap-5 px-5 py-5 shadow-lg mt-5 bg-white rounded-xl font-medium'>
                <h2 className='text-indigo-500 font-black text-3xl'>Diaz de Argandoña <span className='text-black'>Juan Cruz</span></h2>
                <Link to='/Punto1'>Punto número <span className="text-indigo-500"> 1</span></Link>
                <h2 className='text-indigo-500 font-black text-3xl'>Rios <span className='text-black'>Thomás</span></h2>
                <Link to='/Punto2'>Punto número <span className="text-indigo-500"> 2</span></Link>
                <h2 className='text-indigo-500 font-black text-3xl'>Gaye <span className='text-black'>Micaela</span></h2>
                <Link to='/Punto3'>Punto número <span className="text-indigo-500"> 3</span></Link>
                <h2 className='text-indigo-500 font-black text-3xl'>Tarcay <span className='text-black'>Matias</span></h2>
                <Link to='/Punto3'>Punto número <span className="text-indigo-500"> 3</span></Link>
                <h2 className='text-indigo-500 font-black text-3xl'>Palavecino <span className='text-black'>Julián</span></h2>
                <Link to='/Punto4'>Punto número <span className="text-indigo-500"> 4</span></Link>
                <h2 className='text-indigo-500 font-black text-3xl'>Pascua <span className='text-black'>Santiago</span></h2>
                <p>Punto número <span className="text-indigo-500"> ???</span></p>
            </div>
        </div>
  )
}

export default Integrantes