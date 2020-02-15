import React from 'react';

const Recipe = (props) => {



    return(
        <div>
            <h1 className="text-warning font-weight-bold text-center">{props.info.mealName}</h1>                                

            {/* De esta manera puedo agregar los videos de youtube unicamente agregando el id del video */}
            {/* http://www.youtube.com/embed/ al final solo se agrega el id del video */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/C3pAgB7pync" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}

            <h4 className="text-white badge-danger text-center font-weight-bold">{props.info.mealCategory}</h4>                  
             <div class="row">
                <div class="col">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={props.info.mealNameThumb} class="d-block w-100" alt="..."/>
                            </div>        
                        </div>
                    </div>                
                </div>
                <div class="col">                    
                    <h4 className="text-warning font-weight-bold ml-2">Ingredientes</h4>
                    <p className="text-warning font-weight-bold">{props.info.ingredient1}  <span className="text-danger font-weight-normal">{props.info.measure1}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient2}  <span className="text-danger font-weight-normal">{props.info.measure2}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient3}  <span className="text-danger font-weight-normal">{props.info.measure3}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient4}  <span className="text-danger font-weight-normal">{props.info.measure4}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient5}  <span className="text-danger font-weight-normal">{props.info.measure5}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient6}  <span className="text-danger font-weight-normal">{props.info.measure6}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient7}  <span className="text-danger font-weight-normal">{props.info.measure7}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient8}  <span className="text-danger font-weight-normal">{props.info.measure8}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient9}  <span className="text-danger font-weight-normal">{props.info.measure9}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient10} <span className="text-danger font-weight-normal">{props.info.measure10}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient11} <span className="text-danger font-weight-normal">{props.info.measure11}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient12} <span className="text-danger font-weight-normal">{props.info.measure12}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient13} <span className="text-danger font-weight-normal">{props.info.measure13}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient14} <span className="text-danger font-weight-normal">{props.info.measure14}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient15} <span className="text-danger font-weight-normal">{props.info.measure15}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient16} <span className="text-danger font-weight-normal">{props.info.measure16}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient17} <span className="text-danger font-weight-normal">{props.info.measure17}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient18} <span className="text-danger font-weight-normal">{props.info.measure18}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient19} <span className="text-danger font-weight-normal">{props.info.measure19}</span></p>
                    <p className="text-warning font-weight-bold">{props.info.ingredient20} <span className="text-danger font-weight-normal">{props.info.measure20}</span></p>
                </div>
            </div>

            <div class="card text-center mt-4">
                <div class="card-header bg-danger text-white">
                    <h4 className="font-weight-bold">Instrucciones</h4>
                </div>
                <div class="card-body">                    
                    <p class="card-text text-justify">{props.info.instructions}</p>                    
                </div>
            </div>

        </div>
    );    
}

export default Recipe;