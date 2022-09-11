import React from "react";

const Car = (props) => {

    const colorInfo = props.color ? ( <p>Couleur: {props.color} </p>) : (<p>Couleur : Néant</p>)
    return(
        <div style={{backgroundColor: 'teal', padding: '10px', margin: '5px auto', width:'400px'}}>
            <p>Marque: {props.children}</p>
           { colorInfo }
        </div>
    )
}

export default Car;