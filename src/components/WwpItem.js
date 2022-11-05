import "./WwpItem.css";
import SubTitle from "./shared-components/SubTitle";
import Description from "./shared-components/Description";

function WwpItem() {
  const desText = `Blockchain is based on existing cryptographic techniques,
    which include the appropriate framework for cryptography for 
    data sharing. The patient's name, date of birth and diagnosis, 
    treatments, and ambulatory history are recorded in EHR format 
    during pa`;
  return (
    <div className="WwpItem-block">
      <div className="wwp-icon">
        <img src={require("./images/wwp-icon.png")} alt="" />
      </div>
      <SubTitle text="Preserve and Exchange Data" />
      <Description text={desText} fontSize="12px" />
    </div>
  );
}

export default WwpItem;
