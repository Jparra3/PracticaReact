// import React from 'react'; 
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Jhonatan',
    lastName: 'Parra Almario',
    avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png',
    width: 100
};
const name = ' '

function getName(user){
    return user.name+' '+user.lastName;
}

function getGreeting(){
    let val = '';
    if(user && name.trim() !== ''){
        val = <h1>Hola {user.name} {user.lastName}</h1>
    }else{
        val = <h1>Bienvenido</h1>
    }
    return val;
}

const element = 
    <div>
        <img src={user.avatar} width={user.width} />
        <h1>Hola Reac {getName(user)}</h1>
        <br />
        {getGreeting()}
    </div>

const container = document.getElementById('root')

// ReactDOM.render(QUE,DONDE)
ReactDOM.render(element,container)