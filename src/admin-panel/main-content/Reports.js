import FilterTag from "./FilterTag";
import "./Reports.css";
import ReportList from "./ReportList";
import MoreBtn from "../sharedComponents/MoreBtn";

function Reports() {
  const reportDetailsList = [
    {
      date: "12 March 2022",
      doctorName: " Dr. Lalit Pd. Dhungel",
      hospitalName: "Mediciti Hospital Limited",
    },
    {
      date: "22 Feb 2022",
      doctorName: " Dr. Bibek Raj Acharya",
      hospitalName: "Bir Hospital",
    },
    {
      date: "8 Oct 2021",
      doctorName: " Dr. Ram Lal Yadav",
      hospitalName: "TU Teaching Hospital",
    },
    {
      date: "10 July 2021",
      doctorName: " Dr. Lalit Pd. Dhungel",
      hospitalName: "Norvic Hospital",
    },
  ];

  return (
    <div className="reports-container">
      <div className="reports-mainTitle">
        <h4>Recent Medical Report</h4>
      </div>
      <div className="filters-container">
        <div>
          <FilterTag text="Latest" active="true" />
          <FilterTag text="Archieved" />
        </div>
        <FilterTag text="Last 7 days" active="true" />
      </div>
      {reportDetailsList.map((report) => (
        <ReportList details={report} />
      ))}

      <div className="last-loadMoreBtn">
        <MoreBtn
          text="Load More"
          padding="8px 12px"
          style={{ backgroundColor: "red" }}
        />
      </div>
    </div>
  );
}

export default Reports;
