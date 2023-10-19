import React from "react";

const Input = React.forwardRef((props, ref) => {
    return(
        <div className={ props.containerClass ? `form-group ${ props.containerClass }` : `form-group` }>
            {props.label ? <label htmlFor={ props.input.id } className="d-flex align-items-center gap-1 fw-medium mb-2">{ props.label }</label> : ''}
            <input { ...props.input } ref={ref} />
        </div>
    );
});
export default Input;