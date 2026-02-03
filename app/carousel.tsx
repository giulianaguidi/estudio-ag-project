import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <Image
              src={"/carousel1.png"}
              alt="image1"
              width={1000}
              height={300}
            />
          </div>
          <div>
            <Image
              src={"/carousel2.jpg"}
              alt="image2"
              width={1000}
              height={300}
            />
          </div>
          <div>
            <Image
              src={"/carousel3.jpg"}
              alt="image3"
              width={1000}
              height={300}
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
