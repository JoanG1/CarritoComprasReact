import { Component } from "react";
import BubbleAlert from "./BubbleAlert"
import DetallesCarro from "./DetallesCarro"

const style = {

    carro: {

        background: "#359A2C",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        padding: "15px",
        cursor: "pointer",
        boxShadow: " 0 2px 3px 0 rgb(0,0,0,0.5)"
    },
    bubble: {

        position: "relative",
        left: 12,
        top: 20

    }
}


class Carro extends Component{

    render(){

        const {carro, esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc+el.cantidad, 0)

        return(

            <div>
                <span style={style.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value =  {cantidad}></BubbleAlert> : null }
                </span>
                <button onClick = {mostrarCarro} style={style.carro}>
                    Carro
                </button>

                {esCarroVisible ? <DetallesCarro carro= {carro}/> : null}
                
                
            </div>
        )
    }
}

export default Carro