import React, { Fragment } from "react";
import { createPortal } from 'react-dom';
import Button from '../Buttons/Button'

const OffCanvasContent = props => {
    return(
        <div {...props.offCanvas} aria-labelledby={  `${props.offCanvas.id}OffcanvasLabel` }>
            <div className="offcanvas-header p-3 p-sm-4 pb-0">
                <h3 className="mb-0" id={ `${props.offCanvas.id}OffcanvasLabel` }>{ props.title }</h3>
                <Button button={{ type: 'button', className: 'btn-close p-0 bg-gray-300 m-0' , 'data-bs-dismiss': 'offcanvas', 'aria-label': 'Close' }}></Button>
            </div>
            <div className="offcanvas-body p-3 p-sm-4">
                { props.children }
            </div>
        </div>
    );
}

const OffCanvas = props => {
    return(
        <Fragment>
            { createPortal( <OffCanvasContent title={props.title} offCanvas={props.offCanvas}>{ props.children }</OffCanvasContent>, document.body ) }
        </Fragment>
    )
}
export default OffCanvas;