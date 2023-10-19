import React, { useState } from "react";
import Button from "../../UI/Buttons/Button";
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

var elem = document.documentElement;
const HeaderFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const openFullscreen = () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
    const closeFullscreen = () => {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
    }
    const zoomToggler = () => !isFullScreen ? setIsFullScreen(true) & openFullscreen() : setIsFullScreen(false) & closeFullscreen();
    return(
        <Button button={{ id: 'fullscreenTogller', className: 'bg-transparent p-1 border-0' }} onClick={zoomToggler}>
            {isFullScreen ? <ZoomInMapIcon /> : <ZoomOutMapIcon />}
        </Button>
    );
}
export default HeaderFullScreen;