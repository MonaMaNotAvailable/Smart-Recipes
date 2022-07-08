//don't put hooks in if/else statements or loop!!!
// import { useState, useEffect, useContext } from "react";
import { useState, useEffect } from "react";
import useStyleList from "./useStyleList";
import Results from "./Results";
// import ThemeContext from "./ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
import changeType from "./actionCreators/changeType";
import changeStyle from "./actionCreators/changeStyle";
import changeTheme from "./actionCreators/changeTheme";

const TYPES = ["Carbohydrate", "Dessert", "Meat", "Veggie", "Appetizer", "Beverage"];

// const sum = (x,y) =>{
//     return x+y;
// }
//Implicit return:(One-liner)
// const sum2 = (x,y) => 
//x+y
//;

const SearchParams = () => {
    const location = useSelector((state) => state.location);
    const type = useSelector((state) => state.type);
    const style = useSelector((state) => state.style);
    const theme = useSelector((state) => state.theme);
    // // Equivalent to:
    // const theme = useSelector(({theme}) => theme);
    const dispatch = useDispatch();
    
    // const location = "Boston, MA";
    // const [location, setLocation] = useState("");
    // const [type, setType] = useState("");
    // const [style, setStyle] = useState("");
    const [recipes, setRecipes] = useState([]);
    // const [theme, setTheme] = useContext(ThemeContext);

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
        <div className="my-0 mx-auto w-11/12">
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
            className="p-10 mb-10 rounded-lg bg-fuchsia-200 shadow-lg flex flex-col justify-center items-center"
            onSubmit={(e) => {
                e.preventDefault();
                requestRecipes();
            }}
            
            >
                <label htmlFor="location">
                    Location
                    <input 
                    id = 'location' 
                    className="w-60 mb-5 block"
                    type="text"
                    value={location} 
                    placeholder="Location" 
                    // onChange = {(e) => setLocation(e.target.value)}
                    onChange={(e) => dispatch(changeLocation(e.target.value))}
                    />
                </label>
                <label htmlFor = "type">
                    Type
                    <select
                    id="type"
                    className="w-60 mb-5 block"
                    value={type}
                    onChange={(e)=>
                        // setType(e.target.value);
                        // setStyle("");
                        dispatch(changeType(e.target.value))
                    }
                    onBlur={(e)=>
                        // setType(e.target.value);
                        // setStyle("");
                        dispatch(changeType(e.target.value))
                    }
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
                    className="w-60 mb-5 block disabled:opacity-50"
                    value={style}
                    onChange={(e)=>
                        // setStyle(e.target.value);
                        dispatch(changeStyle(e.target.value))
                    }
                    onBlur={(e)=>
                        // setStyle(e.target.value);
                        dispatch(changeStyle(e.target.value))
                    }
                    >
                        <option/>
                        {styles.map((style) => (
                            <option key={style} value={style}>
                                {style}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        className="w-60 mb-5 block"
                        onChange = {e => 
                            // setTheme(e.target.value)}
                            dispatch(changeTheme(e.target.value))}
                        onBlur = {e => 
                            // setTheme(e.target.value)}
                            dispatch(changeTheme(e.target.value))}
                        >
                            <option value="#ba68c8">Purple</option>
                            <option value="#f8bbd0">Pink</option>
                            <option value="#e57373">Coral</option>
                            <option value="#4dd0e1">Mint</option>
                            <option value="#ffb74d">Orange</option>
                    </select>
                </label>
                {/* {{Object} Let JSX knows it's an expression}  */}
                <button 
                className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
                style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results recipes = {recipes} />
        </div>
    );
};

export default SearchParams;