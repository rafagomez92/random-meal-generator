  
import React, { Component } from 'react';
import recipesData from '../recipesData';
import Recipe from './Recipe';
import GetRecipeButton from './GetRecipeButton';
import PreviousRecipeButton from './PreviousRecipeButton';
import ExtraInformation from './ExtraInformation';

class RecipesGenerator extends Component {    
constructor() {
    super();
    this.state = {
        // Meal nos sirve para almanecenar nuestro array de recipesData
        meal: [],  
        // randomNumber es donde se almacena nuestro numero aleatorio
        randomNumber: 0,
        //showRecipe es donde almacenamos un boleano para luego activarlo y hacer una condicion en el render
        showRecipe: false,                                 
    };
    //bindear el contexto para acceder a this
    this.randomMeal = this.randomMeal.bind(this);    
}

// Esta función es para actualizar nuestro state al dar clic al boton de obtener receta
randomMeal = () => {
    this.setState({                        
        // Cargamos a meal nuestro array de recipesData
        meal: recipesData,
        //Cambiamos nuestro estado de showRecipe y en el render se maneja la condición
        showRecipe: true
    }            
    );
    // función para generar el número aleatorio 
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
    
    // Actualizamos randomNumber con la funcion para generar el número aleatorio
    this.state.randomNumber = getRandomNumber(0, 11);  
    console.log(this.randomNumber);

}


render() {
    // en recipe si la condicion es verdadera creamos nuestro <Recipe /> si es falso agregamos un div vacio
    let recipe;  
    if(this.state.showRecipe === true) {
        recipe = <Recipe info={this.state.meal[this.state.randomNumber]}/>
    } else {
        recipe = <ExtraInformation />
    }    

    return(
        <>
            <div className="container">
                {/* JS para el botón */}
                <GetRecipeButton getRecipe={this.randomMeal}/>
                {/* mostramos la variable recipe que muestra lo que obtuvo de la condición */}
                {recipe}     
            </div>
        </>
    );
}
}

export default RecipesGenerator;