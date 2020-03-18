import React from 'react'
import './styles/Card.css'

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            img:'https://cdn3.iconfinder.com/data/icons/one-piece-flat/48/Cartoons__Anime_One_Piece_Artboard_38-512.png'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                img: 'https://cdn0.iconfinder.com/data/icons/accounting-31/64/accounting-income-coin-token-512.png'
            })
        }, 1500)
    }

    render(){
        return (
        <div className="card mx-auto Fitness-Card"
            style={{marginBottom:'5%', backgroundImage: `url(${this.props.image}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`}}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img className="float-right" width="200" src={this.state.img} alt="" />
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
        
        )
    }
}

export default Card