const Recipe = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <h2>{props.style}</h2>
        </div>
    );
};

// const Recipe = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.type),
//       React.createElement("h2", {}, props.style),
//     ]);
//   };

export default Recipe;