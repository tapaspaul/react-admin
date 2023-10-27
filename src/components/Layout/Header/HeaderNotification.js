import React from "react";
import Button from "../../UI/Buttons/Button";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const HeaderNotification = () => {
    return(
        <Button button={{ className: 'p-0 bg-transparent border-0 position-relative', type: 'button' }}>
            <NotificationsNoneIcon />
            <div className="spinner-grow spinner-grow-sm bg-secondary border border-2 border-white position-absolute top-0 end-0" role="status" style={{ '--bs-spinner-width': '0.75rem', '--bs-spinner-height': '0.75rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </Button>
    );
}
export default HeaderNotification;