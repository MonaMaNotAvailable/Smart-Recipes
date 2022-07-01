/* global React ReactDOM */ const Recipe = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.type),
        React.createElement("h2", {}, props.style), 
    ]);
};
//<h1>Smart Recipe</h1>
//<a href="./recipes/okonomiyaki.html">Okonomiyaki Recipe</a>
const App = ()=>{
    return React.createElement("div", {}, [
        //put id or class name to {}
        React.createElement("h1", {}, "Smart Recipe!"),
        React.createElement(Recipe, {
            name: "Okonomiyaki",
            type: "Carbohydrate",
            style: "Japanese"
        }),
        React.createElement(Recipe, {
            name: "Madeleine",
            type: "Dessert",
            style: "French"
        }),
        React.createElement(Recipe, {
            name: "Egg Fried Rice",
            type: "Carbohydrate",
            style: "Chinese"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
