import React, { Component } from "react";
import Slider from "react-slick";
/* SILK-CAROUSAL */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* VANILA CSS */
import "./HeroSection.css"
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="h-[80vh] hero-Images">
                <Slider {...settings} className="h-[80vh] w-full ">
                    <div>
                        <img src="https://media.istockphoto.com/id/807713628/photo/wedding-couple-on-the-nature-is-hugging-each-other.jpg?s=2048x2048&w=is&k=20&c=OabTv3eqE2OMy95mXCGuKIw67dgBaZrlmcozIOchLgw=" className="h-[80vh] w-full"/>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1592683286596-c97aaba9f411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" className="h-[80vh] w-full"/>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/79339412/photo/bride-and-bridegroom-hugging.jpg?s=2048x2048&w=is&k=20&c=v17-KVLJDLzku9THTsAR3c1HmWSP9nMlInpsv6n4E_4=" className="h-[80vh] w-full"/>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/589571960/photo/bride-and-groom-posing-together.jpg?s=2048x2048&w=is&k=20&c=EpL_vYPfAoo2fKMUXr43N0ZwFCukdDxQvzO1XvI-z-0=" className="h-[80vh] w-full"/>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/812776318/photo/beauty-bride-in-dressing-gown-with-a-cute-dog-indoors.jpg?s=2048x2048&w=is&k=20&c=nM1G0rPsTHB0iSZ4flqhMmg8iX97-dL8fAKMYStL5LY=" className="h-[80vh] w-full"/>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/814110776/photo/wedding-couple-park.jpg?s=2048x2048&w=is&k=20&c=8aICWem2UviEN0kEPkQsF5kikX1a85oU0L4vOjfAJCk=" className="h-[80vh] w-full"/>
                    </div>
                </Slider>
            </div>
        );
    }
}