import ProductCard from "components/ProductCard/ProductCard";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";
function Slider(props) {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  let list = props.details;

  useEffect(() => {
    if (props.heading === "Similar Products")
      shuffle(list);
    else
      list.splice(-1, 1);
  }, [list,props.heading]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="slider-parent">
      <div className="slider-heading">{props.heading}</div>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        className="slider"
      >
        {list &&
          list.map((row, index) => <ProductCard details={row} key={index} />)}
      </Carousel>
    </div>
  );
}

export default Slider;
