import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [curIndex, setCurIndex] = useState(0);

    const moveRight = () => {
        const newIndex = (curIndex + 1) % images.length;
        setCurIndex(newIndex);
    };

    const moveLeft = () => {
        const newIndex = curIndex === 0 ? images.length - 1 : curIndex - 1;
        setCurIndex(newIndex);
    };

    return (
        <>
            <div className="container">
                <div className="leftarrow" onClick={moveLeft}>
                    <ArrowBackIosIcon className="arrow"/>
                </div>
                <h1 className="title">{images[curIndex].title}</h1>
                <img src={images[curIndex].img} alt={images[curIndex].title}/>
                <h3 className="subtitle">{images[curIndex].subtitle}</h3>
                <div className="rightarrow" onClick={moveRight}>
                    <ArrowForwardIosIcon className="arrow"/>
                </div>
            </div>
        </>
    );


}

export default Carousel;