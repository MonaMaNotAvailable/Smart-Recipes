import { Link } from 'react-router-dom';

const Recipe = ({ name, type, style, images, location, id }) => {

    let img = "https://www.pngkey.com/png/full/17-170975_starbucks-gingerbread-loaf-recipe-boissons-starbucks-pink-starbucks.png";
    if (images.length){
        img = images[0];
    }

    return (
        // <a href={`/details/${id}`} className = 'recipe'>
        <Link to={`/details/${id}`} className = 'recipe'>
            <div className = "image-container">
                <img src={img} width={100} height={100} alt={name} />
            </div>
            <div className = "info">
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