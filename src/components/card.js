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
                img: 'https://cdn3.iconfinder.com/data/icons/one-piece-flat/48/Cartoons__Anime_One_Piece_Artboard_37-512.png'
            })
        }, 1000)

        setTimeout(() => {
            this.setState({
                img: 'https://cdn2.iconfinder.com/data/icons/dragonball-z-colored/48/Cartoons__Anime_Dragonball_Artboard_4-512.png'
            })
        }, 2000)

        setTimeout(() => {
            this.setState({
                img: 'https://cdn2.iconfinder.com/data/icons/dragonball-z-colored/48/Cartoons__Anime_Dragonball_Artboard_2-512.png'
            })
        }, 3000)

        setTimeout(() => {
            this.setState({
                img: 'https://cdn2.iconfinder.com/data/icons/dragonball-z-colored/48/Cartoons__Anime_Dragonball_Artboard_3-512.png'
            })
        }, 4000)

        setTimeout(() => {
            this.setState({
                img: 'https://cdn2.iconfinder.com/data/icons/dragonball-z-colored/48/Cartoons__Anime_Dragonball_Artboard_13-512.png'
            })
        }, 5000)

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