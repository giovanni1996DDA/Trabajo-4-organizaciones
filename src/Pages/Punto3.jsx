import React from 'react'

const Punto3 = () => {
  return (
            <div className=" flex flex-col p-5 ">
            <div className='text-center'>
                <h1 className=" text-black font-black text-3xl"><span className="text-indigo-500">Descripción de los sistemas</span> que son utilizados en estos procesos.</h1> 
            </div>
            <div className='p-3 flex flex-col gap-5 px-5 py-5 shadow-lg mt-5 bg-white rounded-xl font-medium'>
                <h2 className='text-indigo-500 font-black text-3xl'>Sistemas utilizados <span className='text-black'>en el sector de Cobranzas</span></h2> 
                <p>Los sistemas que son utilizados en este sector son: </p>
                <h3 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Sistema de </span>contabilidad:</h3>
                <p>Se recopila toda la información contable y financiera para que se pueda entender el estado económico actual de la empresa. Se divide en contabilidad de costos en donde se estudian todos los gastos que ocurren en la organización y en contabilidad externa donde se evalúan todos los datos que serán compartidos con la organización y con agentes externos. </p>
                <h3 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Sistema de</span> gestión de cobranza:</h3>
                <p>Su principal objetivo está en la recuperación de activos líquidos para la organización. Este proceso pretende, mediante un análisis de casos previos, convertir las listas de morosos en un ingreso efectivo para la liquidez de la organización.</p>
                <h3 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Sistema </span>contable para la facturación:</h3>
                <p> Se encarga de la emisión de facturas, cheques, así como la documentación de la actividad financiera para luego proceder a la validación y autorización.</p> 
                <h3 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Sistema de</span> gestión de clientes <span className='text-black'>(o Costumer Relationship Management</span> (CRM)<span className='text-black'>):</span></h3>
                <p>Gestiona todas las relaciones potenciales y existentes. Ayuda a mantenerse en contacto con los clientes. </p>
                <h3 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Sistema de</span> tesorería:</h3>
                <p> Programa y administra los flujos financieros. </p>
                <h2 className='text-indigo-500 font-black text-3xl'>Bibliografía</h2>
                <div>
                    <label className='font-bold'>Cobranzas:</label>
                    <a target='_blank' className='underline' href="https://higo.io/glosario-contable/s/sistema-de-cobranza-que-es-y-como-aplicarlo/"> Sistema de cobranza: ¿Qué es y cómo aplicarlo?</a>
                </div>
                <div>
                    <label className='font-bold'>Facturación:</label>
                    <a target='_blank' className='underline' href="https://quickbooks.intuit.com/global/resources/es/contabilidad/que-es-un-sistema-contable/"> ¿Qué es un Sistema Contable?</a>
                </div>
                <div>
                    <label className='font-bold'>Contabilidad:</label>
                    <a target='_blank' className='underline' href="https://www.euroinnova.com.ar/blog/que-es-un-sistema-de-contabilidad"> Aprende qué es un sistema de contabilidad junto a Euroinnova</a>
                </div>
                <div>
                    <label className='font-bold'>CRM:</label>
                    <a target='_blank' className='underline' href="https://www.salesforce.com/es/learning-centre/crm/what-is-crm/"> ¿Qué es la CRM?</a>
                </div>
                <div>
                    <label className='font-bold'>Tesorería:</label>
                    <a target='_blank' className='underline' href="https://www.argentina.gob.ar/economia/administracionfinancieragubernamental/sistematesoreria#:~:text=El%20Sistema%20de%20Tesorer%C3%ADa%20tiene,financiero%2C%20proveedores%20y%20otros%20usuarios"> Sistema de Tesorería</a>
                </div>
            </div>
        </div>
  )
}

export default Punto3