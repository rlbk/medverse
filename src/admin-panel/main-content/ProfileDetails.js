import "./ProfileDetails.css";
import UserExtraDetails from "./UserExtraDetails";

function ProfileDetails() {
  return (
    <div className="profileDetails">
      <div className="pd-row1">
        <div className="userProfile">
          <div className="userProfile-image">
            <img src={require("../../components/images/dr-sabb.png")} alt="" />
          </div>
          <div className="userProfile-identity">
            <span>Rameshwor Nepal</span>
            <span>Kathmandu,Nepal</span>
          </div>
          <p className="userProfie-id">Patient's Id : 971230873</p>
          <div className="userExtraDetails">
            <UserExtraDetails cateTitle="Weight" value="65kg" />
            <UserExtraDetails cateTitle="Height" value="180 cm" />
            <UserExtraDetails cateTitle="Age" value="25" />
            <UserExtraDetails cateTitle="Blood Grp" value="B+" />
          </div>
        </div>
        <div className="pd-container2">
          <div className="status">
            <h5>Pressure</h5>
            <p>
              <span className="status-value">80/120</span>
            </p>
          </div>

          <div className="status">
            <h5>Sugar level</h5>
            <p>
              <span className="status-value">95.8</span>mg/dl
            </p>
          </div>
        </div>
      </div>
      <div className="pd-row2">
        <img src={require("../../components/images/sugar-level.png")} alt="" />
      </div>
      <div className="pd-row3">
        <h4>Personal Assestments</h4>
      </div>
    </div>
  );
}

export default ProfileDetails;
