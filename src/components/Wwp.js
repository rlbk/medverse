import LoadBtn from "./shared-components/LoadBtn";
import SectionTitle from "./shared-components/SectionTitle";
import SubTitle from "./shared-components/SubTitle";
import Description from "./shared-components/Description";
import "./Wwp.css";
// import WwpItem from "./WwpItem";

const Wwp = () => {
  return (
    <div
      className="wwp-block
  "
    >
      <div className="side-image">
        <img src={require("./images/use-cases-block.png")} alt="aside" />
      </div>
      <div className="side-text">
        <SectionTitle text="What We Provide" />
        <div className="wwp-items">
          <div className="WwpItem-block">
            <div className="wwp-icon">
              <img src={require("./images/wwp-icon.png")} alt="" />
            </div>
            <SubTitle text="Preserve and Exchange Data" />
            <Description
              text="Blockchain is based on existing cryptographic techniques,
            which include the appropriate framework for cryptography for 
            data sharing. The patient's name, date of birth and diagnosis, 
            treatments, and ambulatory history are recorded in EHR format 
            during patient details by the healthcare provider."
              fontSize="12px"
            />
          </div>
          <div className="WwpItem-block">
            <div className="wwp-icon">
              <img src={require("./images/helping-hand.png")} alt="" />
            </div>
            <SubTitle text="Safety and Transparency" />
            <Description
              text="Blockchain is based on existing cryptographic techniques,
            which include the appropriate framework for cryptography for 
            data sharing. The patient's name, date of birth and diagnosis, 
            treatments, and ambulatory history are recorded in EHR format 
            during patient details by the healthcare provider."
              fontSize="12px"
            />
          </div>
          <div className="WwpItem-block">
            <div className="wwp-icon">
              <img src={require("./images/checkup-cycle.png")} alt="" />
            </div>
            <SubTitle text="Speedup In Health services" />
            <Description
              text="Blockchain is based on existing cryptographic techniques,
            which include the appropriate framework for cryptography for 
            data sharing. The patient's name, date of birth and diagnosis, 
            treatments, and ambulatory history are recorded in EHR format 
            during patient details by the healthcare provider."
              fontSize="12px"
            />
          </div>
          <div className="WwpItem-block">
            <div className="wwp-icon">
              <img src={require("./images/analysis.png")} alt="" />
            </div>
            <SubTitle text="Reduce needless Cost" />
            <Description
              text="Blockchain is based on existing cryptographic techniques,
            which include the appropriate framework for cryptography for 
            data sharing. The patient's name, date of birth and diagnosis, 
            treatments, and ambulatory history are recorded in EHR format 
            during patient details by the healthcare provider."
              fontSize="12px"
            />
          </div>
        </div>
        <LoadBtn />
      </div>
    </div>
  );
};

export default Wwp;
