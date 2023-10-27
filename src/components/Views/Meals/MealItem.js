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
        <div id={props.id} className="meal col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="meal-content overflow-hidden">
                <div className="img-container">
                    <img src={props.image} className="img-fluid" alt={props.name} />
                </div>
                <div className="meal-info p-3">
                    <h4>{ props.name }</h4>
                    <p className="text-gray-600">{ props.description }</p>
                    <p className="fs-lg fw-medium text-green">{price}</p>
                    <MealQuantity id={props.id} onAddToCart={addToCartHandler} />
                </div>
            </Card>
        </div>
    )
}
export default MealItem;