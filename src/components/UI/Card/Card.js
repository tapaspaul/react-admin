import React from "react";

const Card = props => {
    return(
        <div className={props.className ? `bg-light rounded-8 ${ props.className }` : `bg-light rounded-8`}>
            {props.children}
        </div>
    );
}
export default Card;