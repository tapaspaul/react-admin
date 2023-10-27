import React from "react";

const PageArrow = props => {
    return(
        <li className="page-item">
            <a href={ props.href } className={ props.className ? `page-link ${ props.className }` : 'page-link' } onClick={ props.onClick }>
                { props.children }
            </a>
        </li>
    );
}
export default PageArrow;