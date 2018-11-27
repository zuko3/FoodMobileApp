import React, { Component } from "react";
import Slider from "react-slick";
import "./Crousal.css";

class Crousal extends Component {
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };
        return (
            <Slider {...settings}>
                <div className="gallery">
                    <img src={"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/noodles.jpg"} />
                </div>
                <div className="gallery">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qD2Y5sZohWwL_0LfVVqCCHOhcSP1xgDTRG32IeNxSfemliRD"} />
                </div>
                <div className="gallery">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qD2Y5sZohWwL_0LfVVqCCHOhcSP1xgDTRG32IeNxSfemliRD"} />
                </div>
                <div className="gallery">
                    <img src={"https://www.w3schools.com/w3images/salmon.jpg"} />
                </div>
            </Slider>
        );
    }
}

export default Crousal;