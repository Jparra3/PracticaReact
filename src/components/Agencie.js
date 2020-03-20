import React from 'react'

class Agencie extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const{agencia,codigo} = this.props
        return (
            <div>
                <h1>{agencia}</h1>
                <h2>{codigo}</h2>
            </div>
        )
    }
}

export default Agencie