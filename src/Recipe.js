import { Link } from 'react-router-dom';

const Recipe = ({ name, type, style, images, location, id }) => {

    let img = "https://www.pngkey.com/png/full/17-170975_starbucks-gingerbread-loaf-recipe-boissons-starbucks-pink-starbucks.png";
    if (images.length){
        img = images[0];
    }

    return (
        // <Link to={`/details/${id}`} className = 'recipe'>
        <Link to={`/details/${id}`} className = "relative block">
            <div className = "image-container">
                <img src={img} alt={name} />
            </div>
            <div className = "absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
            {/* <div className = "info"> */}
                <h1>{name}</h1>
                <h2>
                    {`${type} - ${style} - ${location}`}
                </h2>
            </div>
        </Link>
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