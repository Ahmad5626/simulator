import Button from "./Button";
import "./FrameComponent.css";
import React, { useEffect } from 'react';

import 'animate.css';
const FrameComponent = () => {


  return (
    
    <header className=" animate__animated animate__fadeInUp frame-header">
      <div className="group-wrapper ">
        <img className="group-icon2" loading="lazy" alt="" src="/group-1.svg" />
      </div>
      <div className="header-nav-list-item-l-wrapper">
        <div className="header-nav6">Simulanis UNO</div>
      </div>
      <div className="frame-wrapper7">
        <div className="header-nav-list-item-l-parent">
          <div className="header-nav-list-item-l" />
          <div className="header-nav-list-item-l1" />
        </div>
      </div>
      <div className="frame-wrapper8">
        <div className="header-nav-list-item-l-group">
          <div className="header-nav7">Solutions</div>
          <div className="header-nav8">Company</div>
        </div>
      </div>
      <div className="frame-wrapper9">
        <div className="header-nav-list-item-b-parent">
          <div className="header-nav-list-item-b" />
          <div className="header-nav-list-item-b1" />
        </div>
      </div>
      <div className="header-nav-list-item-b-wrapper">
        <div className="header-nav9">Blog</div>
      </div>
      <Button
        connectWithSales="Book a Meeting "
        propWidth="288px"
        propFlexWrap="unset"
        propMinWidth="unset"
        propColor="1px solid #369afc"
      />
    </header>
    
  );
};

export default FrameComponent;
