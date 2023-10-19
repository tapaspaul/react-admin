import React from "react";

const Card = props => {
    return(
        <div className={props.className ? props.className + ` bg-light p-4 rounded-8` : `bg-light p-4 rounded-8`}>
            {props.children}
        </div>
    );
}
export default Card;