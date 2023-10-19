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
        <form className="ms-auto" onSubmit={submitHandler}>
            <div className="d-flex align-items-center">
                <Button button={{ type: 'button', className: 'btn btn-primary p-2 border-1' }}>
                    <RemoveIcon />
                </Button>
                <Input ref={quantityRef} input={{ type: 'number', id: `quantity_${props.id}`, name: 'quantity', className: 'form-control p-2' }} />
                <Button button={{ type: 'button', className: 'btn btn-primary p-2 border-1' }}>
                    <AddIcon />
                </Button>
            </div>
            { !amountIsValid && <p>Please Enter a Valid Amount</p> }
            <Button button={{ type: 'submit', className: 'btn btn-primary' }}>Add To Card</Button>
        </form>
    );
}
export default MealQuantity;