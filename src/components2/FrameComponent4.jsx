import { useMemo } from "react";
import "./FrameComponent4.css";

const FrameComponent4 = ({ propLeft }) => {
  const heading6Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-parent5">
      <div className="heading-6-data-security-parent">
        <div className="heading-6">Length</div>
        <div className="heading-61" style={heading6Style}>
          1000 mm / 30”
        </div>
        <img className="vector-icon" alt="" src="/vector-38.svg" />
      </div>
      <div className="heading-6-data-security-group">
        <div className="heading-62">Width</div>
        <div className="heading-63">1000 mm / 30”</div>
        <img className="frame-child1" alt="" src="/vector-38.svg" />
      </div>
    </div>
  );
};

export default FrameComponent4;
