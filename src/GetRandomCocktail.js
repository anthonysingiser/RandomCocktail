import { useEffect, useState } from "react";

export default function GetRandomCocktail(props) {
    const [cocktail, setCocktail] = useState('')

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then((response) => response.json())
            .then((data) => setCocktail(data.drinks[0]))
            .catch((console.log('rut roh raggy')));
    }, [props.currentHour] );
    
    const addNumberToStringIngredient = (number) => {
        const string = "strIngredient"
        number = number.toString()
        return cocktail[string + number]
    }
    
    const addNumbertoStringMeasurement = (number) => {
        const string = "strMeasure"
        number = number.toString()
        return cocktail[string + number]
    }

    const getIngredientsList = () => {
        const ingredientsList = [];
        for (let i = 1; addNumberToStringIngredient(i) != null; i++){
            ingredientsList.push(<div>{addNumbertoStringMeasurement(i)} {addNumberToStringIngredient(i)}</div>)
        }

        return ingredientsList
    }

    return (
        <div>
            <br></br>
            <img src={cocktail.strDrinkThumb} height="200" width="200" alt= ""></img>
            <br></br>
            {cocktail.strDrink}
            <br></br>
            <br></br>
            {getIngredientsList()}
            <br></br>
            <br></br>
            {cocktail.strInstructions}
        </div>
    )
}