import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Recipetile from "./recipetile/Recipetile";


function App() {
  const YOUR_APP_ID = "8e14581b";
  const YOUR_APP_KEY = "872eddb78f347a7420238ac2bafa84a4";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthLable, setHealthLable] = useState("vegetarian");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLable}`;

  const getRecipeInfo = async () => {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <h1>
        <u>Food Recipe Hub</u>
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type of Ingrediant.."
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value='vegetarian' onClick={(e) => {setHealthLable('vegetarian')}}>
            Vegetarian
          </option>
          <option
            value='low-suger'
            onClick={(e) => {setHealthLable('low-suger')}}
          >
            Low-Suger
          </option>

          <option
            value='dairy-free'
            onClick={(e) => {setHealthLable('dairy-free')}}
          >
            Dairy-Free
          </option>
          <option
            value='immuno-supportive'
            onClick={(e) => {setHealthLable('immuno-supportive')}}
          >
            Immuno-Supportive
          </option>
          <option
            value='wheat-free'
            onClick={(e) => {setHealthLable('wheat-free')}}
          >
            Wheat-Free
          </option>
          <option value='non-veg' onClick={(e) => {setHealthLable('non-veg')}}>
            Non-Veg
          </option>
        </select>
        <input
          type="submit"
           value="Get-recipe"
          className="app__submit"
          onClick={getRecipeInfo}
        />
      </form>
      <div className="app__recipes ">
        {recipes.map((recipe,index)=>{
          return <Recipetile key={index} recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
