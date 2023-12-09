import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div> 
                <Carousel autoPlay> 
                    <div> 
                        <img src={"/carousel-1.jpg"} alt="image1"/> 

                    </div> 
                    <div> 
                        <img src={"/carousel-2.jpg"} alt="image2" /> 

                    </div> 
                    <div> 
                        <img src={"/carousel-3.jpg"} alt="image3"/> 

                    </div> 
                </Carousel> 
			</div> 
		); 
	} 
};
