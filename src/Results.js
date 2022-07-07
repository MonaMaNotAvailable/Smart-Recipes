import Recipe from "./Recipe";

//can't do statement in curly braces
const Results = ({recipes}) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {!recipes.length ? (
                <h1>No Recipe Found</h1>
            ) : (
                recipes.map((recipe) => (
                    <Recipe 
                        name = {recipe.name} 
                        type = {recipe.type} 
                        style = {recipe.style} 
                        key = {recipe.id} 
                        images ={recipe.images}
                        location = {`${recipe.city}, ${recipe.country}`}
                        id = {recipe.id}
                    />
                ))
            )}
        </div>
    );
};

export default Results;