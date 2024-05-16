import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  group1000002504,
  heading3QHowDoISignInTo,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="rectangle-group" style={groupDivStyle}>
      <div className="frame-inner" />
      <img className="group-icon" loading="lazy" alt="" src={group1000002504} />
      <div className="heading-3-q-how-do-i-sign-i-wrapper">
        <div className="heading-34">{heading3QHowDoISignInTo}</div>
      </div>
    </div>
  );
};

export default GroupComponent;
