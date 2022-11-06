import React from 'react'

const Punto1 = () => {
  return (
    <div className=" flex flex-col p-5 ">
        <div className='text-center'>
            <h1 className=" text-black font-black text-2xl"><span className="text-indigo-500">Estructura Organizacional</span> de toda la organización y haciendo foco a los
            sectores involucrados en la operación. <span className="text-indigo-500">Descripción de las actividades </span> y las <span className="text-indigo-500">relaciones
            interdepartamentales.</span></h1> 
        </div>
        <div className='p-3 flex flex-col gap-5 px-5 py-5 shadow-lg mt-5 bg-white rounded-xl font-medium'>
            <h2 className='  text-indigo-500 font-black text-3xl'>Diagrama <span className='text-black'>Organizacional</span></h2>                
            <p> A continuación se adjuntan los diferentes sectores de la organización.</p>
            <a className="text-white font-bold bg-indigo-400 p-3 px-5 text-center hover:bg-indigo-300 rounded-xl transition-colors" target='_blank' rel="noopener noreferrer" href="https://miro.com/app/board/uXjVPG8sB7Q=/">Abrir diagrama</a>

            <p>El sector de cobranzas se encarga de convertir en activo liquido las cuentas por cobrar de la forma más rápida posible.</p>
            <p>Sus actividades para cumplir con lo anterior son las siguientes:</p>
            <p><span className='font-bold'>a)</span>	Análisis del caso: ¿Quién es el cliente? ¿Cuál es su situación? ¿Cuáles fueron las condiciones para el otorgamiento del crédito? ¿Por qué cayó en mora? Aquí podemos considerar fuentes internas y externas de información como centrales de riesgo, relación de deudores, etc.</p>
            <p><span className='font-bold'>b)</span>	Contacto con el cliente: ¿Qué información registra el cliente? ¿Dónde está ubicado el cliente? ¿Cuáles acciones ya fueron ejecutadas? </p>
            <p><span className='font-bold'>c)</span>	Diagnóstico: ¿Cuál es el problema a raíz de la morosidad actual? ¿Qué tipo de cliente tenemos? </p>
            <p><span className='font-bold'>d)</span>	Generación de alternativa: ¿Cuáles son las posibles soluciones? El objetivo de esta acción es la venta del beneficio para crear una cultura de pago en el cliente.</p> 
            <p><span className='font-bold'>e)</span>	Obtención de compromisos de pago: ¿Realizamos una buena negociación? El sector de cobranzas debe identificar claramente, cuándo, dónde, cómo y cuánto pagará el cliente, y recordar, por ejemplo, que el cliente que está en una situación de sobreendeudamiento o disminución de ingresos establecerá una jerarquía en el pago de las deudas. ¿Logramos que el cliente le dé prioridad al pago de este crédito? </p>
            <p><span className='font-bold'>f)</span>	Cumplimiento de compromisos de pago: ¿El cliente cumplió con el compromiso de pago en la fecha indicada? ¿Demuestra que quiere pagar? El objetivo es mostrar consistencia a lo largo de toda la gestión de cobranza. No basta el compromiso y la actitud positiva del cliente hacia el pago; los gestores de cobranza deben realizar seguimiento a los compromisos de pago. </p>
            <p><span className='font-bold'>g)</span>	Registro de Acciones: ¿Las acciones están siendo coordinadas? Es importante considerar o ponerse en el lugar de la persona que continuará la gestión de cobranza.</p>
            <p><span className='font-bold'>h)</span>	Seguimiento del caso: ¿Conocemos la actual situación del cliente y las acciones realizadas? </p>
            <p><span className='font-bold'>i)</span>	Intensificación de las acciones: ¿Cuál es la acción a tomar que nos permita recobrar el activo de manera más inmediata? ¿Cuáles son los activos que el cliente posee? ¿Qué podemos recuperar con una acción legal? En esta fase el interés es recuperar el activo aún a costa de perder al cliente. </p>
            <p><span className='font-bold'>j)</span>	Definiendo los créditos “pérdida”: Es importante también que el sector defina claramente las condiciones para reconocer la pérdida de un crédito, es decir - cuando la gestión de cobranza ha finalizado. Puede ser cuando se ha agotado todas las estrategias posibles para la recuperación de la deuda y/o cuando la probabilidad de pago es muy baja. En general, se debe analizar el costo-beneficio de las medidas judiciales, reportando el cliente moroso, y otras acciones permitidas por ley.</p>
            
            <h2 className=' text-indigo-500 font-black text-3xl'>Gestiones generales  <span className='text-black'>del departamento</span></h2>
            <p>El departamento de cobranzas se encarga de lo siguiente:</p>
            <p>•	Otorgar créditos</p>
            <p>•	Estudiar los estados financieros</p>
            <p>•	Realizar una gestión efectiva de la cobranza</p>
            <p>•	Informes a la gerencia</p>
            <p>•	Control de personal a su cargo</p>
            <p>•	Determinación de malas deudas</p>
            <p>•	Verificación de los documentos</p>

            <h2 className='text-indigo-500 font-black text-3xl'>Relaciones <span className='text-black'>interdepartamentales</span></h2>
            <p><span className='font-bold'>•	Abastecimiento:</span> La relación entre abastecimiento y cobranzas es que cobranza sabe que artículos se venden mas y entonces abastecimiento sabe de que debe abastecerse con prioridad.</p>
            <p><span className='font-bold'>•	Ventas:</span> La relación entre ventas y cobranza es que ventas se encarga de traer nuevos clientes y cobranzas se encarga de que estos clientes perduren. </p>
            <p><span className='font-bold'>•	RR.HH.:</span> La gerencia de cobranzas debe supervisar al personal del departamento y RR.HH. Debe contratar gente capacitada para el puesto</p>
            <p><span className='font-bold'>•	Contaduría:</span> Cobranzas le brinda la información financiera al sector de contabilidad para justamente, llevar la contabilidad de la empresa.</p>
            <p><span className='font-bold'>•	Tesorería:</span> Cuando cobranza realiza un cobro, tesoreria se encarga de que este cobro sea efectivo, o verificar que el mismo se hizo efectivo. Luego el mismo se informa a Contaduría.</p>
            <p><span className='font-bold'>•	Auditoría:</span> En este caso el objetivo de una auditoria de cobranzas seria examinar y evaluar las áreas básicas de interés para el auditor, tales como: la eficiencia y puntualidad de las operaciones registradas, las operaciones, los medios de decisión y control de créditos para determinar el correcto funcionamiento de este departamento.</p>

            <h2 className='text-indigo-500 font-black text-3xl'>Bibliografia:</h2>
            <p><span className='font-bold'>Relaciones interdepartamentales</span> – Ángel Martinez.</p>
            <p><span className='font-bold'>Auditoría de crédito y cobranza </span> – Karen Garcia.</p>
            <p><span className='font-bold'>Mejores Prácticas en Estrategias de Cobranza </span>- ACCION International.</p>
        </div>
    </div>
  )
}

export default Punto1