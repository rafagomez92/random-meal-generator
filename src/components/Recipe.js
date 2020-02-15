import React from 'react';

const Recipe = (props) => {
    return(
        <div>
            <h1 className="text-warning font-weight-bold text-center">{props.info.mealName}</h1>                                
            {/* con el tag iframe puedo agregar los videos de youtube unicamente agregando el id del video */}
            {/* http://www.youtube.com/embed/ al final solo se agrega el id del video */}
            {/* Uno de los elementos del array no cuenta con video el que lleva el nombre Honey Balsamic Chicken with Crispy Broccoli & Potatoes le agregue un video de los otros elementos*/}
            <div className="text-center">
            <iframe width="560" height="315" src={props.info.mealVideo} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
            </div>

            <h4 className="text-white badge-danger text-center font-weight-bold mt-3">{props.info.mealCategory}</h4>                  
             <div className="row">
                <div className="col">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={props.info.mealNameThumb} className="d-block w-100" alt="..."/>
                            </div>        
                        </div>
                    </div>                
                </div>
                <div className="col">                    
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

            <div className="card text-center mt-4">
                <div className="card-header bg-danger text-white">
                    <h4 className="font-weight-bold">Instrucciones</h4>
                </div>
                <div className="card-body">                    
                    <p className="card-text text-justify">{props.info.instructions}</p>                    
                </div>
            </div>

        </div>
    );    
}

export default Recipe;