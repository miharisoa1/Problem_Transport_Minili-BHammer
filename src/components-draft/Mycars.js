import React, { Component } from "react";
import Car from "./Cars";


class Mycars extends Component {

    onCopy = () => {
        alert("merci de ne pas copier!")
    }

    addClass = (e) => {
        e.target.classList.add('styled')
    }
    removeClass = (e) => {
        e.target.classList.remove('styled')
    }
    render(){
        return (
           <div >
            <h1 onMouseOver={this.addClass} onMouseLeave={this.removeClass}>{this.props.title} </h1>

            <p onCopy={this.onCopy}>ceci est un paragraphe</p>
            <Car color="red">Ford</Car>
            <Car color="grey">Mercedes</Car>
            <Car >Mercedes</Car>
            <Car color="black">Peugeot</Car>
           </div>
        )
    }
}

export default Mycars;