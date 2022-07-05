import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';

// //Function component
// const Details = () => {
//     const { id } = useParams();
//     return <h2>Hola! Amigos! {id} </h2>
// };

//Class component
//Can't use hooks with class components, class must have a render function
class Details extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { loading: true };
    // }
    state = { loading: true }; //a class property

    //Lifecycle method, equivalent to useEffect(() => {}, []);
    async componentDidMount(){
        // const res = await fetch(
        //     `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        // const json = await res.json(); 
        const json = require('../recipes.json'); 

        // this.setState(Object.assign({ loading: false }, json.recipes[this.props.params.id]))
        this.setState({ loading: false, ...json.recipes[this.props.params.id] })
    }

    render(){
        if(this.state.loading){
            return <h2>loading ...</h2>
        }

        const { recipe, type, city, country, description, name, images} = this.state;

        return (
            <div className = "details">
                <Carousel images = {images} />
                <div>
                    <h1>{name}</h1>
                    <h2>
                        {recipe} - {type} - {city}, {country}
                    </h2>
                    <button>Try to cook {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

const WrappedDetails = () =>{
    const params = useParams();
    return <Details params={params} />;
}

export default WrappedDetails;