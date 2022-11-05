import React from 'react'

const Punto2 = () => {
  return (
    <div className=" flex flex-col p-5 ">
        <div className='text-center'>
            <h1 className=" text-black font-black text-2xl"><span className="text-indigo-500">Control Interno, principios aplicados</span> especialmente a estas operaciones mencionadas.</h1> 
        </div>
        <div className='p-3 flex flex-col gap-5 px-5 py-5 shadow-lg mt-5 bg-white rounded-xl font-medium'>
            <h2 className='text-indigo-500 font-black text-3xl'>Control interno <span className='text-black'>de departamento de cobranzas</span></h2> 
            <p>El sistema de control va a estar divido en cuatro bloques que serán:</p>    
            <p>• Cobranza mediante mediadores</p>    
            <p>• Cobranza por correspondencia</p>    
            <p>• Control y depósito de la recaudación</p>    
            <p>• Control y registración de la operación al final del día</p>    
            <h2 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Cobranzas</span> mediante mediadores</h2>    
            <p>El sector de cobranzas emite el formulario <span className='font-bold'>Listado de cobranzas</span> para cada cobrador, indicando las facturas y clientes que cada uno tiene por objetivo cobrar. Para ello le entrega al mismo dos copias del listado y una copia de cada factura.</p> 
            <h3 className='text-black font-black text-1xl'>Planilla de Cobranzas:</h3>   
            <p>Área llenada por el sector de Cobranzas:</p>    
            <p>• Código y denominación del cliente</p>    
            <p>• Facturas adeudadas</p>    
            <p>• Numero</p>
            <p>• Fecha de emisión</p>
            <p>• Importe</p>
            <p>• Fecha de vencimiento</p>
            <h3 className='text-black font-black text-1xl'>Área a llenar por el cobrador:</h3>
            <p>• Detalle de la gestión de cobranzas realizadas</p>
            <h3 className='text-black font-black text-1xl'>En caso de no haber podido cobrar:</h3>
            <p>• Causas de la gestión de cobranzas realizada</p>
            <h3 className='text-black font-black text-1xl'>En caso de haber cobrado:</h3>
            <p>• Numero de recibo extendido</p>
            <p>• Importe de la cobranza, discriminando la recaudación en efectivo de la
                realizada bajo otras formas (cheques, documentos, etc)</p>
            <p>• Importe de eventuales otorgados</p>

            <h2 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Cobranzas por</span> correspondencia</h2>
            <p>La correspondencia es abierta por la secretaria de Gerencia General quien, tras separar las cartas comunes de los cheques recibidos, emite la planilla de valores recibidos por
            correspondencia.</p>
            <h3 className='text-black font-black text-1xl'>Listado de Valores Recibidos por Correspondencia:</h3>
            <p>Los cheques de clientes recibidos por correspondencia deberían ser adecuadamente alistados (con todos sus datos significativos) por el personal responsable de su apertura. Esta información es necesaria para conocimiento y control de cruzados de los sectores de Cobranzas y Tesorería </p>
            <h3 className='text-black font-black text-1xl'>Control y depósito de la recaudación</h3>
            <p>Tesorería se encarga de depositar tanto las cobranzas ingresadas a través de los cobradores (rendidas a través de Listado de Cobranzas) como por correspondencia (a través de la planilla
            de Valores Recibidos por Correspondencia)</p>
            <p>Una copia de esta planilla, debidamente firmada por Tesorería (como constancia de haber recibido los cheques), habilitara al sector de Cobranzas para emitir los Recibos Oficiales. De
            esta forma, no se han de producir demoras en el deposito de los valores atribuidas a la tarea de emisión de recibos</p>
            <h3 className='text-black font-black text-1xl'>Boletas de depósito:</h3>
            <p>es muy importante que en la empresa quede una copia de los valores depositados, porque en caso de no ser así dificultaría enormemente la posibilidad de realizar eficientes controles y revisiones posteriores de las operaciones de caja.</p>
            <h3 className='text-black font-black text-1xl'>El parte de ingresos:</h3>
            <p>el parte de ingresos es un formulario en que podemos ver dos partes:</p>
            <p><span className='font-bold'>La primera</span>, en la que se consignan los totales de cobranzas (importe bruto, descuentos e importe neto) que surge de los listados de cobranzas (uno por cada cobrador) y de la planilla de valores recibidos por correspondencia, importes estos que se encuentran amparados -en cada caso- por un conjunto de recibos oficiales.</p>
            <p><span className='font-bold'>La segunda</span>, conteniendo el detalle de los depósitos realizados (por la totalidad de la cobranza).</p>
            <p>El parte de ingresos debe estar firmado por el sector encargado de su confección (Tesorería) e intervenido por Contaduría como señal de haber controlado el deposito completo de la cobranza recibida.</p>
            <h3 className='text-black font-black text-1xl'>Custodia de talonarios de Recibos sin utilizar:</h3>
            <p>la custodia de dichos recibos debería recaer sobre un funcionario ajeno al manejo de fondos.</p>     
            <p>Con esta norma se persiguen los siguientes objetivos:</p>
            <p>• Implantación plena de control de correlatividad numérico-cronológico.</p>
            <p>• Evitar que puedan ocurrir situaciones anómalas utilizando Recibos extraídos de formularios que no están en uso.</p>
            <h3 className='text-black font-black text-1xl'>Prenumeración de formularios que intervienen:</h3>
            <p>es fundamental que todos los formularios que intervienen (aun los de circulación interna dentro de la empresa) se encuentren prenumerados de imprenta.</p>
            <h3 className='text-black font-black text-1xl'>Control numérico de los Recibos, Listados de Cobranzas, planillas de Valores Recibidos por Correspondencia y Parte de Ingresos por parte del sector Contaduría:</h3>
            <p>la prenumeracionde los formularios internos que intervienen en el circuito permitiría el control de recepción por parte del sector contaduría, con el objeto de asegurar que no se ha extraviado ni perdido ningún ejemplar en el camino.</p>

            <h2 className='text-indigo-500 font-black text-2xl'><span className='text-black'>Control y registración de la operación</span> a fin del día</h2>
            <p>A medida que se van emitiendo, los recibos oficiales pasan por Cuentas Corrientes (sub sector dependiente de Contaduria), quien va a efectuar las registraciones en las Fichas de Cuentas Corrientes de los clientes</p>     
            <h3 className='text-black font-black text-1xl'>Control final del circuito:</h3>
            <p><span className='font-bold'>• Contaduría:</span> Parte de Ingresos (original)</p>
            <p><span className='font-bold'>• Tesorería:</span> Boletas de Deposito selladas por el banco</p>
            <p><span className='font-bold'>• Cobranzas:</span> Recibos Oficial, listado de Cobranzas, valores Recibidos por correspondencia</p>  
            <p>Estos controles toman como pilar el formulario de Parte de Ingresos, y consisten en verificar:</p>
            <p><span className='font-bold'>1-</span> Que el monto total de las facturas canceladas concuerde con las cifras consignadas por los Listados de Cobranza y en la planilla de Valores Recibidos por correspondencia.</p>
            <p><span className='font-bold'>2-</span> Que los totales de los Listados de Cobranzas y del listado de Valores Recibidos por correspondencia concuerden con la sumatoria de los respectivos recibos que lo componen.</p>
            <p><span className='font-bold'>3-</span> Que los descuentos hayan sido bien otorgados y adecuadamente documentados en los recibos emitidos</p>              
            <p><span className='font-bold'>4-</span> Que el dinero neto a cobrar, que surge por un lado de la sumatoria de los Recibos y por otra de la sumatoria de las Planillas de Cobranzas y del listado de Valores Recibidos por correspondencia, concuerde exactamente con el total depositado según surge de la sumatoria de las distintas Boletas de Depósitos del día.</p>
            <p>contaduría procederá a efectuar las registraciones del caso en el Subdiario de Caja y Banco (ingreso y egreso), una vez superados todos estos controles.</p>
        </div>
    </div>
  )
}

export default Punto2