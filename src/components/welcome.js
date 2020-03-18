import React from 'react'
import './styles/welcome.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info ">
            <h1>Hello {username}.</h1>
            <p>Odit occaecati vitae porro eaque ut ut voluptatem. Perferendis voluptatem tempore reprehenderit quo ipsam suscipit voluptatum. Velit quia harum. Pariatur quis rem doloremque similique exercitationem expedita.</p>
        </div>
    </div>
)

//function = es un componente funcional
//sirve si no necesitas trabajar con el estado o el ciclo de vida de un componente
// function Welcome(props){
//     return (
        
//     )
// }

export default Welcome