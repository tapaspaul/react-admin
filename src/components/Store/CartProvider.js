import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (s, a) => {
    if(a.type === 'ADD'){
        const updateItem = s.item.concat(a.item);
        const updatedTotalAmount = s.totalAmount + a.item.price * a.item.amount;
        return{
            item: updateItem,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, despatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = item => {
        despatchCartAction({
            type: 'ADD',
            item: item
        });
    }
    const removeItemHandler = id => {
        despatchCartAction({
            type: 'REMOVE',
            id: id
        });
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            { props.children }
        </CartContext.Provider>
    );
}
export default CartProvider;