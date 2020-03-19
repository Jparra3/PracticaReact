import React from 'react'
import PageForm from '../components/PageForm'
import Card from '../components/card'

class PageNew extends React.Component{
    state = {
        form: {
            title: '',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        }
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
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <PageForm 
                        onChange={this.handleChange}
                        form={this.state.form}
                        onSubmit={this.handleSubmit}
                    />   
                </div>
                 
            </div>
            
        )
    }
}

export default PageNew