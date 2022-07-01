//don't put hooks in if/else statements or loop!!!
import { useState, useEffect } from "react";
import Recipe from "./Recipe"

const RECIPE = ["Carbonhydrate", "Dessert", "Meat", "Vegie", "Appetizer"];

// const sum = (x,y) =>{
//     return x+y;
// }
//Implicit return:(One-liner)
// const sum2 = (x,y) => 
//x+y
//;

const SearchParams = () => {
    // const location = "Boston, MA";
    const [location, setLocation] = useState("");
    const [recipe, setRecipe] = useState("");
    const [style, setStyle] = useState("");
    const styles = ["Japanese", "French", "Chinese"];
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        //make request to API & call setRecipes
        requestRecipes();
        //array of dependable properties
    }, [style])

    return (
        <div className="search-params">
            {/* uncontrolled form */}
            {/* <form onSubmit={}>
                <label htmlFor="location">
                    location
                    <input id = 'location' placeholder="Location" />
                </label>
                <button>Submit</button>
            </form> */}
            
            {/* controlled form */}
            <form>
                <label htmlFor="location">
                    location
                    <input id = 'location' 
                    value={location} 
                    placeholder="Location" 
                    onChange = {(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor = "recipe">
                    Recipe
                    <select
                    id="recipe"
                    value={recipe}
                    onChange={(e)=>{
                        setRecipe(e.target.value);
                        setStyle("");
                    }}
                    onBlur={(e)=>{
                        setRecipe(e.target.value);
                        setStyle("");
                    }}
                    >
                        <option/>
                        {RECIPE.map((recipe) => (
                            <option key={recipe} value={recipe}>
                                {recipe}
                            </option>
                        ))}
                        {/* equivalent to:
                        {RECIPE.map((recipe) => {
                            return(
                                <option key={recipe} value={recipe}>
                                    {recipe}
                                </option>
                            );
                        })} */}
                    </select>
                </label>
                <label htmlFor = "style">
                    Style
                    <select
                    id="style"
                    value={style}
                    onChange={(e)=>{
                        setStyle(e.target.value);
                    }}
                    onBlur={(e)=>{
                        setStyle(e.target.value);
                    }}
                    >
                        <option/>
                        {styles.map((style) => (
                            <option key={style} value={style}>
                                {style}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;