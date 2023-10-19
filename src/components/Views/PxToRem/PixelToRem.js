import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const PixelToRem = () => {
    const [px, setPx] = useState(16);
    const [rem, setRem] = useState(1);
    const calculatePxHandler = e => {
        setRem(e.target.value / 16);
        setPx(e.target.value);
    }
    const calculateRemHandler = e => {
        setPx(e.target.value * 16);
        setRem(e.target.value);
    }
    return(
        <div className="container-fluid px-3 px-md-4 py-3">
            <Card>
                <div className="form-group">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <input type="number" id="pixels" onChange={calculatePxHandler} className="form-control" placeholder="Enter The Amount" value={px}  />
                        </div>
                        <div className="col-md-2">
                            <SyncAltIcon className="d-block mx-auto" />
                        </div>
                        <div className="col-md-5">
                            <input type="number" id="rem" onChange={calculateRemHandler} className="form-control" placeholder="Enter The Amount" value={rem} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default PixelToRem;