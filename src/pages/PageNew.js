import React from 'react'
import PageForm from '../components/PageForm'
import Card from '../components/card'
import Toast from '../components/Toast'
import { wait } from '@testing-library/react'

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

    handleSubmit = async e => {
        e.preventDefault();
        Toast(this.state.form.title)
        // console.log(this.state)
        
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({idAplication:1,typeId:'T'})
            }

            let res = await fetch('https://oficina.comfamiliarhuilavirtual.com/index.php/api/transversal-security/list-all-user',config)
            let json = await res.json();

            console.log(json);
        } catch (error) {
            
        }
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