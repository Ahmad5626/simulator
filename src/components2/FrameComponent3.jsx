import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({ propLeft }) => {
  const heading61Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-parent6">
      <div className="heading-6-data-security-container">
        <div className="heading-64">Height</div>
        <div className="heading-65" style={heading61Style}>
          1000 mm / 30”
        </div>
        <img className="frame-child2" alt="" src="/vector-38.svg" />
      </div>
      <div className="heading-6-data-security-parent1">
        <div className="heading-66">Weight (depending on add-on)</div>
        <div className="heading-67">approx 10 kg / 20lb</div>
      </div>
      <img className="frame-child3" alt="" src="/vector-38.svg" />
    </div>
  );
};

export default FrameComponent3;
