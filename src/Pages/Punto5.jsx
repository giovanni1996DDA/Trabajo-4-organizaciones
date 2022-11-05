import React from 'react'

const Punto5 = () => {
  return (
    <>
            <div className='text-center'>
            <h1 className=" text-black font-black text-2xl">Revisión de las <span className="text-indigo-500">Operaciones Contables</span>.</h1> 
        </div>
        <div className='p-3 flex flex-col gap-5 px-5 py-5 shadow-lg mt-5 bg-white rounded-xl font-medium justify-center'>
            <h2 className='text-indigo-500 font-black text-3xl'>Asientos contables posibles <span className='text-black'>en el sector de Cobranzas</span></h2>
            <p>A contonuacion se adjunta un vinculo con un acceso a Google Sheets donde se podran visualizar algunos ejemplos sobre posibles asientos que se realizan en el sector de cobranzas.</p>
            <a href="https://docs.google.com/spreadsheets/d/1NJQheZFz799wvmXfmGOVpQvr5KMy0Qqb21FepkAGhDE/edit#gid=0" target='_blank' className='w-fit mx-auto' >
                <img className='mx-auto' alt="Sheets" src="../src/assets/SheetLogo.svg" />
            </a>
        </div>
    </>
  )
}

export default Punto5