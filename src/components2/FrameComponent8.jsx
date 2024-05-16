import "./FrameComponent8.css";
import React, { useEffect } from "react";

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
const FrameComponent8 = ({ synthverse }) => {
 
   
  
  return (
    <ScrollAnimation animateIn="slideInDown" >
    <div className="range-slider-parent ">
      <div className="range-slider">
        <img
          className="range-slider-child"
          loading="lazy"
          alt=""
          src="/group-1000002507@2x.png"
        />
      </div>
      <h3 className="synthverse">{synthverse}</h3>
    </div>
    </ScrollAnimation>
  );
};

export default FrameComponent8;
