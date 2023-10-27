import React from "react";

const Breadcrumb = props => {
    return(
        <nav aria-label={ props.ariaLabel }>
            <ol className={ props.className ? `breadcrumb ${ props.className }` : 'breadcrumb' }>
                { props.children }
            </ol>
        </nav>
    );
}
export default Breadcrumb;