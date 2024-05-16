import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
const FrameComponent2 = () => {
  return (
    <div className="frame-parent7">
      <div className="input-processor-parent">
      <ScrollAnimation animateIn="slideInLeft" >
        <div className="input-processor">
          <div className="output-display">
            <img
              className="image-36-icon"
              loading="lazy"
              alt=""
              src="/image-36@2x.png"
            />
            <img
              className="image-38-icon"
              loading="lazy"
              alt=""
              src="/image-38@2x.png"
            />
          </div>
          <div className="heading-6-data-security-wrapper">
            <div className="heading-68">
              Simulator Dimensions (in operation)
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInRight" >
        <div className="frame-parent8">
          <div className="image-37-parent">
            <img
              className="image-37-icon"
              loading="lazy"
              alt=""
              src="/image-37@2x.png"
            />
            <div className="image-35-wrapper">
              <img
                className="image-35-icon"
                loading="lazy"
                alt=""
                src="/image-35@2x.png"
              />
            </div>
          </div>
          <div className="heading-6-data-security-frame">
            <div className="heading-69">
              Simulator Transportation Box (packed)
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
      <div className="vector-parent">
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src="/vector-38.svg"
        />
        <img
          className="frame-child5"
          loading="lazy"
          alt=""
          src="/vector-39.svg"
        />
      </div>
      <div className="frame-parent9">
        <FrameComponent4 />
        <FrameComponent4 propLeft="414px" />
      </div>
      <div className="frame-parent10">
        <FrameComponent3 />
        <FrameComponent3 propLeft="411px" />
      </div>
    </div>
  );
};

export default FrameComponent2;
