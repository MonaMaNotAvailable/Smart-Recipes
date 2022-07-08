import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { StrictMode, useState, lazy, Suspense } from 'react';
import { StrictMode, useState} from 'react';
import Details from './Details';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

//Dynamic import
// const Details = lazy(( ) => import('./Details'));
// const SearchParams = lazy(( ) => import('./SearchParams'));

//Prop Drilling problem: passing props(e.g. theme) into every component in app
//Context > Redux
const App = () => {
    const theme = useState("#ba68c8");
    return(
      <StrictMode>
        {/* <Suspense fallback={<h1>loading route …</h1>}> */}
        <ThemeContext.Provider value={theme}>
            <div className="p-0 m-0" style = {{
                background: "url(https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=2000)" }}>
            <BrowserRouter>
            {/* Linkes should always be inside a router! */}
                <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-300 via-pink-300 to-rose-300">
                    <Link to="/" className="text-6xl text-white hover:text-violet-400">Try this Recipe!</Link>
                </header> 
                <Routes>
                    <Route path = "/details/:id" element = {<Details />} />
                    <Route path = "/" element = {<SearchParams />} />
                </Routes>
            </BrowserRouter>
            </div>
        </ThemeContext.Provider>
        {/* </Suspense>; */}
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
// export default App;