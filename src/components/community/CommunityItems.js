// import CommunityItem from "./CommunityItem";
import SubTitle from "../shared-components/SubTitle";
import Description from "../shared-components/Description";
import "./CommunityItems.css";

function CommunityItems() {
  return (
    <div className="communityItems-block">
      <div className="community-item">
        <div className="image-container">
          <img src={require("../images/hospital-free-c.png")} alt="" />
        </div>
        <SubTitle text="Hospital and Health Organization" />
        <Description
          text="There are almost every hospitals and health 
        organization involved in our technology from 
        where they are getting better solutions for their
         traditional ledger system"
          fontSize="12px"
        />
      </div>
      <div className="community-item">
        <div className="image-container">
          <img src={require("../images/hospital-free-p.png")} alt="" />
        </div>
        <SubTitle text="Doctors and Nurses" />
        <Description
          text="There are almost every hospitals and health 
          organization involved in our technology from 
          where they are getting better solutions for their
           traditional ledger system"
          fontSize="12px"
        />
      </div>
      <div className="community-item">
        <div className="image-container">
          <img src={require("../images/hospital-free-d.png")} alt="" />
        </div>
        <SubTitle text="Patients" />
        <Description
          text="There are almost every hospitals and health 
        organization involved in our technology from 
        where they are getting better solutions for their
         traditional ledger system"
          fontSize="12px"
        />
      </div>
    </div>
  );
}

export default CommunityItems;
