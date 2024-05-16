import GroupComponent from "./GroupComponent";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  return (
    <section className="accordion">
      <div className="split-view">
        <div className="grid-layout">
          <h1 className="heading-35">Frequently Asked Question</h1>
        </div>
        <div className="discover-our-3d-xr1">
          Discover our 3D XR training modules! Dive into a dynamic world where
          safety, repair, and maintenance converge with cutting-edge technology.
          Our library spans diverse industries—automotive, pharmaceuticals, oil
          and gas, retail, and more.
        </div>
      </div>
      <div className="accordion-inner">
        <div className="button-parent">
          <button className="button2">
            <div className="onboarding">Onboarding</div>
          </button>
          <div className="button3">
            <div className="troubleshooting">Troubleshooting</div>
          </div>
          <div className="button4">
            <div className="safety-and-security">Safety and security</div>
          </div>
          <div className="button5">
            <div className="additional-resources">Additional resources</div>
          </div>
        </div>
      </div>
      <div className="shape-properties">
        <div className="layout-properties-parent">
          <div className="layout-properties">
            <div className="style-library">
              <div className="figma-asset">
                <div className="button-expand">Expand all</div>
              </div>
              <div className="conditional-splitter">
                <div className="feature-transformer">{` | `}</div>
              </div>
              <div className="button-collapse">Collapse all</div>
            </div>
          </div>
          <GroupComponent
            group1000002504="/group-1000002504@2x.png"
            heading3QHowDoISignInTo="How do I sign in to UNO for education?"
          />
        </div>
      </div>
      <div className="data-filter">
        <div className="index-tracker">
          <div className="discover-our-3d-xr-training-mo-wrapper">
            <div className="discover-our-3d-xr2">
              Discover our 3D XR training modules! Dive into a dynamic world
              where safety, repair, and maintenance converge with cutting-edge
              technology. Our library spans diverse industries—automotive,
              pharmaceuticals, oil and gas, retail, and more.
            </div>
          </div>
          <div className="validation-checker">
            <GroupComponent
              group1000002504="/group-1000002504-1@2x.png"
              heading3QHowDoISignInTo="How do I add staff teams?"
              propPadding="var(--padding-23xl) var(--padding-9xl-4) var(--padding-lgi)"
            />
            <GroupComponent
              group1000002504="/group-1000002504-1@2x.png"
              heading3QHowDoISignInTo="How do I view my score?"
              propPadding="var(--padding-23xl) var(--padding-9xl-4) var(--padding-lg)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
