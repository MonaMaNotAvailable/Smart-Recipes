// import { Component, lazy } from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
// import ThemeContext from './ThemeContext';
import Modal from './Modal';
import { connect } from "react-redux";

// const Modal = lazy(( ) => import('./Modal'));

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
    state = { loading: true, showModal: false }; //a class property

    //Lifecycle method, equivalent to useEffect(() => {}, []);
    async componentDidMount(){
        // const res = await fetch(
        //     `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        // const json = await res.json(); 
        const json = require('../recipes.json'); 

        // this.setState(Object.assign({ loading: false }, json.recipes[this.props.params.id]))
        this.setState({ loading: false, ...json.recipes[this.props.params.id] })
    }

    toggleModal = () => this.setState({showModal: !this.state.showModal })
    cook = () => (window.location = "https://www.xiachufang.com/");

    render(){
        if(this.state.loading){
            return <h2>loading ...</h2>
        }

        const { recipe, type, city, country, description, name, images, showModal} = this.state;

        return (
            <div className = "details">
                <Carousel images = {images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{recipe} - {type} - {city}, {country}</h2>
                    {/* <ThemeContext.Consumer>
                        {([theme]) => ( */}
                    <button 
                        onClick={this.toggleModal}
                        style={{backgroundColor: this.props.theme}}>
                        Try to cook {name}!
                    </button>
                        {/* )}
                    </ThemeContext.Consumer> */}
                    <p>{description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to cook {name}?</h1>
                                <div className="buttons">
                                    <button href="https://www.xiachufang.com/"
                                    style={{backgroundColor: this.props.theme}}>
                                        Yes</button>
                                    <button onClick={this.toggleModal}
                                    style={{backgroundColor: this.props.theme}}>
                                        No</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ theme }) => ({ theme });
// //Equivalent to:
// function(props){
//     return {theme: props.theme}
// }
const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WrappedDetails = () =>{
    const params = useParams();
    // const [theme] = useContext(ThemeContext);
    return (
        <ErrorBoundary>
            {/* Details theme = {theme} params={params} />; */}
            {/* <Details params={params} />; */}
            <ReduxWrappedDetails params={params} />;
        </ErrorBoundary>
    );
};

export default WrappedDetails;