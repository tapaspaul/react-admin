import React, {Fragment} from "react";
import Button from "../../UI/Buttons/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OffCanvas from "../../UI/OffCanvas/OffCanvas";
const HeaderCart = () => {
    return(
        <Fragment>
            <Button button={{ className: 'p-0 bg-transparent border-0', type: 'button', 'data-bs-toggle': 'offcanvas', 'data-bs-target': '#offcanvasCart', 'aria-controls': 'offcanvasCart' }}>
                <ShoppingCartOutlinedIcon />
            </Button>
            <OffCanvas title="This is a OffCanvas" offCanvas={{ className: 'offcanvas offcanvas-end', tabIndex: '-1', id: 'offcanvasCart' }}>
                <p>This is a Off Canvas</p>
            </OffCanvas>
        </Fragment>
    );
}
export default HeaderCart;