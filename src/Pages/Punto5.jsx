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
                <img className='mx-auto h-40' alt="Sheets" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/800px-Google_Sheets_logo_%282014-2020%29.svg.png?20201024100414" />
            </a>
        </div>
    </>
  )
}

export default Punto5