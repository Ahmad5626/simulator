



import FrameComponent9 from "../components2/FrameComponent9";
import FrameComponent8 from "../components2/FrameComponent8";
import FrameComponent7 from "../components2/FrameComponent7";
import FrameComponent6 from "../components2/FrameComponent6";
import FrameComponent5 from "../components2/FrameComponent5";
import Button from "../components2/Button";
import FrameComponent2 from "../components2/FrameComponent2";
import FrameComponent1 from "../components2/FrameComponent1";
import FrameComponent from "../components2/FrameComponent";
import "./Template.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"


import  Earth from "../components/canvas/Earth";
import { motion } from "framer-motion";
import { slideIn } from '../components/canvas/motion';

const Template = () => {
  return (
    <div className="template-4">

<div class="name">
    <div _ngcontent-serverapp-c65="" class="name-child ">
    <div _ngcontent-serverapp-c65="" className=" name-child1 text-align-center mt-100 mt-v3-m-40 mb-20 text-align-center">Paint Simulator</div>
        
    </div>
</div>
      
      <div className="logic-gate" />
      <div className="input-source">
        <div className="processing-unit" />
        <div className="output-destination" />
      </div>
      <div className="logic-gate1" />
      <img className="template-4-child" alt="" />
      <div className="logic-gate2" />
      <div className="logic-gate3" />
      <section className="frame-parent">
        <img className="frame-icon" alt="" src="/frame@2x.png" />
        <div className="wrapper-group-1000002576">
          <img
            className="wrapper-group-1000002576-child"
            alt=""
            src="/group-1000002576.svg"
          />
        </div>

{/* <Canvas className="amination" camera={ {
      fov: 64,
      position: [2.3, 1.5,2.3],
    }}>
      <Experience />
      
    </Canvas> */}

    <motion.div
        variants={slideIn("right", "tween", 0.2, 3)}
        className=' amination'
      >
        <Earth />
      </motion.div>

        
        {/* <div className="wrapper-group-1000002457">
          <img
            className="wrapper-group-1000002457-child"
            loading="lazy"
            alt=""
            src="/group-1000002457.svg"
          />
        </div> */}
        <img
          className="frame-child animate__animated animate__lightSpeedInRight"
          loading="lazy"
          alt=""
          src="/Giphy1.gif"
        />
      </section>
      <FrameComponent9 />
      <section className="triangle-shape">
        <div className="oval-shape">
          <div className="frame-group">
            <div className="heading-3-integrate-into-you-wrapper">
              <h1 className="heading-3">{`Get skilled anywhere `}</h1>
            </div>
            <div className="discover-our-3d-xr">
              Discover our 3D XR training modules! Dive into a dynamic world
              where safety, repair, and maintenance converge with cutting-edge
              technology. Our library spans diverse industries—automotive,
              pharmaceuticals, oil and gas, retail, and more.
            </div>
          </div>
        </div>
        <div className="frame-container">
          <FrameComponent8 synthverse="Synthverse" />
          <FrameComponent8 synthverse="Embodied Cognition" />
          <FrameComponent8 synthverse="Instinctive Handling" />
        </div>
      </section>
      <div className="logic-gate4" />
      <div className="logic-gate5" />
      <div className="tab-tab-number-2" />
      <div className="tab-tab-number-3" />
      <div className="tab-tab-number-7" />
      <div className="tab-tab-number-8" />
      <div className="tab-tab-number-1" />
      <div className="button">
        <div className="give-feedback">Give Feedback</div>
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="symbol"></div>
        </div>
      </div>
      <FrameComponent7 />
      <div className="logic-gate6" />
      <div className="logic-gate7" />
      <FrameComponent6 />
      <FrameComponent5 />
      <section className="frame-section">
        <div className="frame-wrapper">
          <div className="heading-3-integrate-into-you-parent">
            <h1 className="heading-31">
              Playing an Impactful Part in Ensuring People Success
            </h1>
            <div className="we-are-proud-to-be-a-socially-wrapper">
              <div className="we-are-proud">
                We are proud to be a socially responsible and impact-conscious
                company. Our work has created an indelible impact on the lives
                of people across the spectrum, and our story has only started!
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div">
        <ScrollAnimation animateIn="slideInLeft" >
          <div className="frame-parent1 ">
            <div className="wrapper">
              <b className="b">52%</b>
            </div>
            <div className="label-cost">{`Simulanis' 3D XR Library enables `}</div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInUp" >
          <div className="frame-parent2">
            <div className="container">
              <b className="b1">300%</b>
            </div>
            <div className="label-cost1">{`Simulanis' 3D XR Library `}</div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInRight" >
          <div className="frame-parent3">
            <div className="x-wrapper">
              <h1 className="x">x%</h1>
            </div>
            <div className="label-cost2">{`Simulanis' 3D XR Library `}</div>
          </div>
          </ScrollAnimation>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent4">
            <div className="heading-3-integrate-into-you-group">
              <h1 className="heading-32">Product Specifications</h1>
              <div className="we-are-proud-to-be-a-socially-container">
                <div className="we-are-proud1">
                  We are proud to be a socially responsible and impact-conscious
                  company. Our work has created an indelible impact on the lives
                  of people across the spectrum, and our story has only started!
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <Button
                connectWithSales="Download Specifications PDF"
                propWidth="378px"
                propFlexWrap="wrap"
                propMinWidth="183px"
                propColor="#0c1aee"
              />
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <FrameComponent2 />
        </div>
        <div className="frame-wrapper3">
          <FrameComponent1 />
        </div>
        <div className="heading-3-integrate-into-you-container">
          <h1 className="heading-33">WHAT’S IN THE BOX</h1>
        </div>
      </section>
      <FrameComponent />
      <div className="logic-gate8" />
      <div className="switchboard">
        <div className="data-processor">
          <div className="image-handler-parent">
            <div className="image-handler">
              <div className="header-nav-container">
                <span className="simulanis">Simulanis</span>
                <b>Paint</b>
              </div>
            </div>
            <div className="database-linker">
              <div className="rectangle-parent">
                <div className="frame-item" />
                <div className="error-handler">
                  <div className="error-handler-child" />
                  <div className="network-communicator">
                    <div className="header-nav">Airless</div>
                  </div>
                  <div className="log-file-creator" />
                </div>
                <div className="algorithm-engine">
                  <div className="header-nav1">Air Spray</div>
                </div>
                <div className="algorithm-engine1" />
                <div className="algorithm-engine2">
                  <div className="header-nav2">Roller</div>
                </div>
                <div className="algorithm-engine3" />
                <div className="algorithm-engine4">
                  <div className="header-nav3">Brush</div>
                </div>
              </div>
            </div>
            <div className="timer-manager" />
          </div>
          <div className="queue-processor">
            <div className="input-validator">
              <div className="header-nav4">Overview</div>
              <div className="header-nav5">Specifications</div>
            </div>
          </div>
        </div>
        <div className="loop-controller">
          <img
            className="loop-controller-child"
            loading="lazy"
            alt=""
            src="/line-416.svg"
          />
        </div>
      </div>
      <div className="function-caller-parent">
      
        <div className="function-caller" />
        <img
          className="image-33-icon"
          loading="lazy"
          alt=""
          src="/image-33@2x.png"
        />
       
        <img
          className="image-63-icon"
          loading="lazy"
          alt=""
          src="/image-63@2x.png"
        />
        
      </div>
      
    </div>
    
  );
};

export default Template;
