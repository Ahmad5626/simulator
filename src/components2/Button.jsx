import { useMemo } from "react";
import "./Button.css";

const Button = ({
  connectWithSales,
  propWidth,
  propFlexWrap,
  propMinWidth,
  propColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      width: propWidth,
      flexWrap: propFlexWrap,
    };
  }, [propWidth, propFlexWrap]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const symbolStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="button1" style={buttonStyle}>
      <div className="connect-with-sales-wrapper" style={frameDivStyle}>
        <div className="connect-with-sales">{connectWithSales}</div>
      </div>
      <div className="star-shape">
        <div className="star-shape-child" />
        <div className="symbol1" style={symbolStyle}>
          
        </div>
        
      </div>
    </div>
  );
};

export default Button;
