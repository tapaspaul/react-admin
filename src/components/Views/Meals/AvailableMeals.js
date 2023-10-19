import React from "react";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Bread',
        description: 'Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures\' diet.',
        price: 65
    },
    {
        id: 'm2',
        name: 'Egg',
        description: 'An egg is an organic vessel grown by an animal to carry a possibly fertilized egg cell and to incubate from it an embryo within the egg until the embryo has become an animal fetus that can survive on its own, at which point the animal hatches.',
        price: 15
    },
    {
        id: 'm3',
        name: 'Chicken',
        description: 'The chicken is a domesticated species that arose from the red junglefowl, originally from India. They have also partially hybridized with other wild species of junglefowl. Rooster and cock are terms for adult male birds, and a younger male may be called a cockerel.',
        price: 250
    },
    {
        id: 'm4',
        name: 'Butter',
        description: 'Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat. It is used at room temperature as a spread, melted as a condiment, and used as a fat in baking, sauce-making, pan frying, and other cooking procedures.',
        price: 45
    },
    {
        id: 'm5',
        name: 'Banana',
        description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
        price: 8
    },
    {
        id: 'm6',
        name: 'Mushrooms',
        description: 'Mushrooms are incredibly healthy and contain many of the nutrients our bodies need to function well. So, like most things, mushrooms can be eaten often as part of a balanced diet. However, unlike most things, eating mushrooms every day will come with more good than bad!',
        price: 150
    }
]
const AvailableMeals = () => {
    const MealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    return(
        <ul className="meals">
            { MealsList }
        </ul>
    );
}
export default AvailableMeals;