import React from 'react'
import PageForm from '../components/PageForm'
import Card from '../components/card'

class PageNew extends React.Component{
    state = {
        form: {}
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    //enlazar eventos

    handleChange = e => {
        // let partialState = {}
        // partialState[e.target.name] = e.target.value
        // this.setState(partialState)
        this.setState({
            form: {
                //mantenga actualizado
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card />
                </div>
                <div className="col-sm">
                    <PageForm 
                        onChange={this.handleChange}
                        form={this.state.form}
                    />   
                </div>
                 
            </div>
            
        )
    }
}

export default PageNew