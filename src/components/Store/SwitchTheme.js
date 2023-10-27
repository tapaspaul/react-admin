import React, { useState } from "react";
import Button from '../UI/Buttons/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const SwitchTheme = () => {
    const [isLightMode, setIsLightMode] = useState(false);
    const switchThemeHandler = e => {
        e.preventDefault();
        !isLightMode ? setIsLightMode(true) : setIsLightMode(false);
    }
    return(
        <Button button={{ className: 'bg-transparent p-0 border-0' }} onClick={ switchThemeHandler }>
            { isLightMode ? <LightModeIcon /> : <DarkModeIcon /> }
        </Button>
    )
}
export default SwitchTheme;