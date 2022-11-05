import MoreBtn from "../sharedComponents/MoreBtn";
import "./SideSection.css";
import SideSectionPost from "./SideSectionPost";

function SideSection({ title, details, btnText, addClass, path }) {
  return (
    <div className="sideSection">
      <div className="sideSecton-title">
        <h4>{title}</h4>
      </div>

      {details &&
        details.map((detail, i) => (
          <SideSectionPost visitDate={detail.date} Name={detail.Name} key={i} />
        ))}

      <MoreBtn
        text={btnText}
        padding="10px 16px"
        addClass={addClass}
        path={path}
      />
    </div>
  );
}

export default SideSection;
