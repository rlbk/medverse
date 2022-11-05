import "./Community.css";
import SectionTitle from "../shared-components/SectionTitle";
import CommunityItems from "./CommunityItems";

const Community = () => {
  return (
    <div className="community-block">
      <SectionTitle text="OUR COMMUNITY" />
      <CommunityItems />
    </div>
  );
};

export default Community;
