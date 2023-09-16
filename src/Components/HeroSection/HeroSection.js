import React, { Component } from "react";
import Slider from "react-slick";
/* SILK-CAROUSAL */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
/* VANILA CSS */
import "./HeroSection.css"
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselData: [], // Initialize an empty array to store carousel data
        };
    }

    componentDidMount() {
        // Make a GET request to the API endpoint
        axios.get("http://127.168.1.13:8000/api/carousels/")
            .then((response) => {
                // Update the state with the data received from the API
                console.log(response.data)
                this.setState({ carouselData: response.data });
            })
            .catch((error) => {
                console.error("Error fetching carousel data:", error);
            });
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const carouselImages = this.state.carouselData.map((item, index) => (
            <div key={index}>
                <img src={item.image} className="h-[80vh] w-full" alt={item.alt} />
            </div>
        ));
        
        return (
            <div className="h-[80vh] hero-Images">
                <Slider {...settings} className="h-[80vh] w-full ">
                   {carouselImages}
                </Slider>
            </div>
        );
    }
}