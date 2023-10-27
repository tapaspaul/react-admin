import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import Button from '../../UI/Buttons/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MealQuantity = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const quantityRef = useRef();
    const submitHandler = e => {
        e.preventDefault();
        const enterredQuantity = quantityRef.current.value;
        const enterredQuantityNumber = +enterredQuantity;
        if(enterredQuantity.trim().length === 0 || enterredQuantityNumber < 1 || enterredQuantityNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enterredQuantityNumber);
    }
    return(
        <form className="d-flex align-items-center justify-content-between gap-3 flex-wrap ms-auto mt-3" onSubmit={submitHandler}>
            <div className="quantity d-flex align-items-center">
                <Button button={{ type: 'button', className: 'btn btn-primary minus' }}>
                    <RemoveIcon />
                </Button>
                <Input ref={quantityRef} input={{ type: 'number', id: `quantity_${props.id}`, name: 'quantity', className: 'form-control border-start-0 border-end-0 rounded-0 p-2' }} />
                <Button button={{ type: 'button', className: 'btn btn-primary plus' }}>
                    <AddIcon />
                </Button>
            </div>
            { !amountIsValid && <p>Please Enter a Valid Amount</p> }
            <Button button={{ type: 'submit', className: 'btn btn-primary btn-sm' }}>Add To Card</Button>
        </form>
    );
}
export default MealQuantity;