import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    productos:[ 
      {name : "Tomate", price: 1500, img: "/productos/tomate.jpg"},
      {name : "Arbeja", price: 2500, img: "/productos/arbeja.jpg"},
      {name : "Lechuga", price: 600, img: "/productos/lechuga.jpg"}
    ]
  }

  render (){
    return(
    <div>
      <p>Hola mundo</p>
    </div>
    )
  }
}

export default App;
