import React from 'react'
import './styles/Card.css'

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            img:'https://cdn0.iconfinder.com/data/icons/6-data-devices-flat-long-shadow/614/129_-_Firefox_Logo-512.png'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                img: 'https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Git-512.png'
            })
        }, 1500)
    }

    render(){
        const {title,description,img,leftColor,rightColor} = this.props
        return (
        <div className="card mx-auto Fitness-Card"
            style={{marginBottom:'5%', backgroundImage: `url(${img}), linear-gradient(to right, ${leftColor}, ${rightColor})`}}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img className="float-right" width="200" src={this.state.img} alt="" />
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
        
        )
    }
}

export default Card