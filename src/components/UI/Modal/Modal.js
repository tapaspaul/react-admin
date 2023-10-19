import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import Button from '../Buttons/Button';

const ModalContent = props => {
    return(
        <div {...props.modal} aria-labelledby={`${props.modal.id}Label`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id={`${props.modal.id}Label`}>{ props.modal.title }</h3>
                        <Button button={{type: 'button', className: 'btn-close', 'data-bs-dismiss': 'modal', 'aria-label': 'close'}}></Button>
                    </div>
                    { props.children }
                </div>
            </div>
        </div>  
    );
}

const Modal = props => {
    return(
        <Fragment>
            { createPortal( <ModalContent modal={ props.modal }>{ props.children }</ModalContent>, document.body ) }
        </Fragment>
    )
}
export default Modal;