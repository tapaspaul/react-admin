import React from "react";

const BreadcrumbItem = props => {
    return(
        <li className={ props.className ? `breadcrumb-item ${ props.className }` : 'breadcrumb-item' } aria-current={ props.ariaCurrent }>
            { props.href ? <a href={ props.href }>{ props.children }</a> : props.children }
        </li>
    );
}
export default BreadcrumbItem;