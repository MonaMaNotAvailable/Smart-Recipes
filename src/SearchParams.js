//don't put hooks in if/else statements or loop!!!
import { useState, useEffect } from "react";
import useStyleList from "./useStyleList";
import Results from "./Results";

const TYPES = ["Carbohydrate", "Dessert", "Meat", "Vegie", "Appetizer", "Beverage"];

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
    const [type, setType] = useState("");
    const [style, setStyle] = useState("");
    const [recipes, setRecipes] = useState([]);
    // //Equivalent to:
    // const recipeHook = useState([]);
    // const recipes = recipeHook[0];
    // const setRecipes = recipeHook[1];
    // //or
    // const {recipe:state.setRecipe:setState} = useState("")

    //const styles = ["Japanese", "French", "Chinese"];
    const [styles] = useStyleList(type);

    useEffect(() => {
        //make request to API & call setRecipes
        requestRecipes();
        //array of dependable properties
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestRecipes(){
        // const res = await fetch(
        //     `http://pets-v2.dev-apis.com/pets?type=${type}&location=${location}
        //     &style=${style}` //http://pets-v2.dev-apis.com/pets
        // );
        // const json = await res.json(); 
        //load local json instead of using Pet API
        const json = require('../recipes.json'); 
        const output = json.recipes
        //setRecipes(json.recipes);
        
        // let filtered = output;
        // if(type != []){
        //     filtered = output.filter(a => a.type == type);
        // }
        // elseif(style != []){
        //     filtered = filtered.filter(a => a.style == style);
        // }
        // //Equivalent to:
        let filtered = (!type.length) ? output
        : (!style.length) ? output.filter(a => a.type == type) 
        : output.filter(a => a.type == type && a.style == style);
        setRecipes(filtered);
    }

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
            <form
            onSubmit={e => {
                e.preventDefault();
                requestRecipes();
            }}
            
            >
                <label htmlFor="location">
                    Location
                    <input id = 'location' 
                    value={location} 
                    placeholder="Location" 
                    onChange = {(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor = "type">
                    Type
                    <select
                    id="type"
                    value={type}
                    onChange={(e)=>{
                        setType(e.target.value);
                        setStyle("");
                    }}
                    onBlur={(e)=>{
                        setType(e.target.value);
                        setStyle("");
                    }}
                    >
                        <option/>
                        {TYPES.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                        {/* equivalent to:
                        {type.map((type) => {
                            return(
                                <option key={type} value={type}>
                                    {type}
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
            <Results recipes = {recipes} />
        </div>
    );
};

export default SearchParams;