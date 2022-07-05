import { Component } from 'react';

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ["https://www.pngkey.com/png/full/17-170975_starbucks-gingerbread-loaf-recipe-boissons-starbucks-pink-starbucks.png"],
    };

    handleIndexClick = (event) => {
        this.setState({
            //+ converts string to number
            active: +event.target.dataset.index,
        });
    };

    render () {
        const {active} = this.state;
        const {images} = this.props;

        return(
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo,index) => (
                        //eslint-disable-next-line
                        <img
                        onClick={this.handleIndexClick}
                        key={photo}
                        src={photo}
                        data-index={index}
                        className={index === active? "active":""}
                        alt="recipe thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;