import React, {Fragment} from "react";
import Button from "../../UI/Buttons/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Modal from "../../UI/Modal/Modal";
// import OffCanvas from "../../UI/OffCanvas/OffCanvas";
const HeaderCart = () => {
    return(
        <Fragment>
            <Button button={{ className: 'p-1 bg-transparent border-0', type: 'button', 'data-bs-toggle': 'modal', 'data-bs-target': '#cartModal' }}>
                <ShoppingCartOutlinedIcon />
            </Button>
            <Modal modal={{ id: 'cartModal', title: 'Modal title', className: 'modal fade', tabIndex: '-1', 'aria-hidden': 'true' }}>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </Modal>
            {/* <OffCanvas title="This is a OffCanvas" offCanvas={{ className: 'offcanvas offcanvas-end', tabIndex: '-1', id: 'cart', 'data-bs-backdrop': 'false' }}>
                <p>This is a Off Canvas</p>
            </OffCanvas> */}
        </Fragment>
    );
}
export default HeaderCart;