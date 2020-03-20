import React from 'react'
import Agencie from './Agencie'

const Agencies = ({agencias}) => (

    <div>
        {
            agencias.map((agencias) =>{
                return <Agencie 
                    key = {agencias.idagencia}
                    agencia={agencias.agencia}
                    codigo={agencias.codigo}
                    />
            })
        }
    </div>

)

export default Agencies