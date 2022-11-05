import SubTitle from "../shared-components/SubTitle";
import Description from "../shared-components/Description";
import "./CommunityItem.css";

function CommunityItem(props) {
  //   const path = "../images/logo-temp.png";

  const title = "Hospital and Health Organization";
  const desText = `There are almost every hospitals and health 
  organization involved in our technology from 
  where they are getting better solutions for their
   traditional ledger system`;
  const imageLink = require("../images/hospital-free-c.png");

  // const post = props.post;
  return (
    <div className="community-item">
      <div className="image-container">
        <img src={imageLink} alt="" />
      </div>
      <SubTitle text={title} />
      <Description text={desText} fontSize="12px" />
    </div>
  );
}

export default CommunityItem;
