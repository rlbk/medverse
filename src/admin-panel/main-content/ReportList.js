import "./ReportList.css";
import MoreBtn from "../sharedComponents/MoreBtn";

function ReportList({ details }) {
  return (
    <div className="reportList">
      <div className="report-date">Date : {details.date}</div>
      <div className="details-report">
        <p>Doctor's Name : {details.doctorName}</p>
        <p>Hospital name : {details.hospitalName}</p>
        <div className="more-detail">
          <div className="blood-details">
            <span className="bloodReport-pdf"></span>
            <p>Blood Report</p>
          </div>
          <div className="more-btn">
            <MoreBtn text="open" />
            <MoreBtn text="Download" addClass="btn-shade" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportList;
