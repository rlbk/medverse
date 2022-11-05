import "./SliderText.css";
import Button from "../shared-components/Button";
import Description from "../shared-components/Description";

const SliderText = () => {
  return (
    <div className="slider-text">
      <p className="focusTitle">
        40% <span className="highlight-text">reduction</span> in Credentialing{" "}
        <span className="highlight-text">Costs</span> and Timelines
      </p>
      <Description text="Our members can get benefit from this medical ecosystem where there is reduction in cost as well as improvement in performance" />
      <Button text="Join Now" addClass="btn-shade" marginLeft="120px" />
    </div>
  );
};

export default SliderText;
