import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import ThemeContext from './ThemeContext';
import SearchParams from './SearchParams';
import Details from './Details';

//Prop Drilling problem: passing props(e.g. theme) into every component in app
//Context > Redux
const App = () => {
    const theme = useState("#ba68c8");
    return(
      <StrictMode>
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
            {/* Linkes should always be inside a router! */}
                <header>
                    <Link to="/">Try this Recipe!</Link>
                </header> 
                <Routes>
                    <Route path = "/details/:id" element = {<Details />} />
                    <Route path = "/" element = {<SearchParams />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
      </StrictMode>
        // <div id="my-app">
        //     <h1>Smart Recipe</h1>
        //     <SearchParams/>
        //     {/* <Recipe name = "Okonomiyaki" type = "Carbohydrate" style = "Japanese"/>
        //     <Recipe name = "Madeleine" type = "Dessert" style = "Franch"/>
        //     <Recipe name = "Egg Fried Rice" type = "Carbohydrate" style = "Chinese"/> */}
        // </div>
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
