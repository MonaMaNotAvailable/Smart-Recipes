import { render } from 'react-dom';
import Recipe from "./Recipe"
import SearchParams from './SearchParams';

const App = () => {
    return(
        <div id="my-app">
            <h1>Smart Recipe</h1>
            <SearchParams/>
            {/* <Recipe name = "Okonomiyaki" type = "Carbohydrate" style = "Japanese"/>
            <Recipe name = "Madeleine" type = "Dessert" style = "Franch"/>
            <Recipe name = "Egg Fried Rice" type = "Carbohydrate" style = "Chinese"/> */}
        </div>
    )
}

// const App = () => {
//   return React.createElement("div", {}, [
//     //put id or class name to {}
//     React.createElement("h1", {}, "Smart Recipe!"),
//     React.createElement(Recipe, {
//       name: "Okonomiyaki",
//       type: "Carbohydrate",
//       style: "Japanese",
//     }),
//     React.createElement(Recipe, {
//       name: "Madeleine",
//       type: "Dessert",
//       style: "French",
//     }),
//     React.createElement(Recipe, {
//       name: "Egg Fried Rice",
//       type: "Carbohydrate",
//       style: "Chinese",
//     }),
//   ]);
// };

//<h1>Smart Recipe</h1>
//<a href="./recipes/okonomiyaki.html">Okonomiyaki Recipe</a>

render(<App/>, document.getElementById("root"));
