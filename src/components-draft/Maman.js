import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {
    state = {
        messageMaman : null,
        messageToto : null
    }

    envoyerOrdre = () => {
        this.setState({
            messageMaman : "va ranger le chambre"
        })
    }

    reponseToto = () => {
        this.setState({
            messageToto : "D'accord Maman"
        })
    }

 render(){
     return(
         <div>
            <h1>Maman</h1>
            <button onClick={this.envoyerOrdre}>ordre de Maman</button>
            <h1>{ this.state.messageMaman}</h1>
            <hr/>

            <Toto name={"Toto"} reponseToto={this.reponseToto} leState={this.state}></Toto>
         </div>
     )
 }
}

export default Maman;