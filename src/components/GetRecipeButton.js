import React from 'react';

const GetRecipeButton = (props) => {
    return (
        <div class="jumbotron text-center bg-danger text-white">
            <h1 class="display-4">¿Qúe cenamos?</h1>                       
            <p class="lead">¿Cansado de hacer esa misma pregunta?,
                        haga clic para obtener una receta al azar.</p>                                               
            <button className="btn btn-warning text-white font-weight-bold btn-lg" onClick={props.getRecipe}>Obtener receta</button>
        </div>
    );
}

export default GetRecipeButton;