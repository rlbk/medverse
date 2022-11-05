import "./MainContent.css";
import Reports from "./Reports";
import ProfileDetails from "./ProfileDetails";

function MainContent() {
  return (
    <div className="mainContent">
      <ProfileDetails />
      <Reports />
    </div>
  );
}

export default MainContent;
