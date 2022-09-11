import React from "react";

const Toto = (props) => {

    const reponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>Réponse</button>) : 
                                                        (<button disabled>Réponse</button>);
    return (
        <div>
            <h3>{props.name}</h3>
        {
            reponseToto
        }
        <h4>{props.leState.messageToto}</h4>
        </div>
    )
}

export default Toto;