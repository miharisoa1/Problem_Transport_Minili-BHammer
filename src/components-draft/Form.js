import React, { Component } from "react";
import Images from "./Images";
import '../styles/style.css'

const teal = {
    color: 'red',
    fontWeight: "100 px"
}


class Form extends Component {

    state = {
        userName : '',
        color: "",
        colors: ["", "red", "green", "yellow"],
        comment: ''
    }

    
    handlePseudo = e => {
        this.setState({
           userName: e.target.value
        })
    }

    handleColor = e => {
        this.setState({
           color: e.target.value
        })
    }

    handleComment = e => {
        this.setState({
            comment : e.target.value
        })
    }
    
     

    render () {
        return(
            <div>
                <Images></Images>
            
                <h1 className={` ${teal} italic`}>Commentaire</h1>

                <form>
                    <div>
                    <label>Pseudo : </label>
                    <input type={"text"} value={this.state.userName} onChange={this.handlePseudo} />
                    </div>
                    <div>
                    <label>Couleur : </label>
                    <select value={this.state.color} onChange={this.handleColor}>
                        {
                            this.state.colors.map((color , index)=> {
                                return <option key={index} value={color}>{color}</option>
                            })
                        }
                    </select>
                    </div>
                    <hr/>
                    <div>
                        <label>Commentaire : </label>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;