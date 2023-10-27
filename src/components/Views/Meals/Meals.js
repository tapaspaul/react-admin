import React from "react";
import AvailableMeals from './AvailableMeals';
import './Meals.css';

const Meals = () => {
    return(
        <div className="container-fluid px-3 px-md-4 py-3">
            <AvailableMeals />
        </div>
    );
}
export default Meals;