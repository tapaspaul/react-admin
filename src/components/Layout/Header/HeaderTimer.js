import React from "react";
import { useState } from "react";
import Button from "../../UI/Buttons/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Timer = () => {
    const [timer, setTimer] = useState(false);
    const startTimer = e => {
        e.preventDefault();
        setTimer(true);
    }
    return(
        <Button button={{ className: 'btn btn-outline-green text-nowrap w-100 w-sm-auto btn-sm d-flex align-items-center justify-content-center gap-1 ms-sm-auto ms-md-0' }} onClick={startTimer}>
            <PlayCircleIcon className="fs-lg" />
            <span className="d-block">Start Working</span>
        </Button>
    );
}
export default Timer;