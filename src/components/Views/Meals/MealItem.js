import React, { useContext } from "react";
import Card from '../../UI/Card/Card';
import MealQuantity from "./MealQuantity";
import CartContext from "../../Store/cart-context";

const MealItem = props => {
    const cartContext = useContext(CartContext);
    const price = `₹ ${props.price.toFixed(2)}`;
    const addToCartHandler = qty => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: props.amount,
            price: props.price
        })
    }
    return(
        <li id={props.id} className="mb-4">
            <Card className="d-flex align-items-center gap-4">
                <div className="meat-info">
                    <h4>{ props.name }</h4>
                    <p>{ props.description }</p>
                    <p className="fs-lg fw-medium text-green">{price}</p>
                </div>
                <MealQuantity id={props.id} onAddToCart={addToCartHandler} />
            </Card>
        </li>
    )
}
export default MealItem;