import React from "react";

const Pagination = props => {
    return(
        <nav aria-label={ props.ariaLabel }>
            <ul className={ props.className ? `pagination ${ props.className }` : 'pagination' }>
                { props.children }
            </ul>
        </nav>
    );
}
export default Pagination;