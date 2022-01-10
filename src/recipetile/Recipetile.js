import React from "react";
import "./styles.css";

function Recipetile({ recipe, index }) {
  return (
    
      <div className="recipeTile">
        <img
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          className="recipeTile__image"
          onClick={()=>{window.open(recipe['recipe']['url'])}}
        />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    
  );
}

export default Recipetile;
