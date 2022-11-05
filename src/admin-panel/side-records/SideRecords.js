import "./SideRecords.css";
import SideSection from "./SideSection";
import MainLogo from "../../components/shared-components/MainLogo";

function SideRecords() {
  const hosVisitedList = [
    {
      date: "22-02-2022",
      Name: "Bir Hospital",
    },
    {
      date: "18-12-2021",
      Name: "TU Teaching Hos",
    },
    {
      date: "7-8-2021",
      Name: "Mega Hospital",
    },
    {
      date: "18-9-2019",
      Name: "Norvic Hospital",
    },
  ];

  const docVisitedList = [
    {
      date: "22-02-2022",
      Name: "Dr. Sanish Deuba",
    },
    {
      date: "	18-12-2021",
      Name: "Dr. Ram Lal Yadav",
    },
    {
      date: "7-8-2021",
      Name: "Dr. Kalpana Regmi",
    },
    {
      date: "18-9-2019",
      Name: "Dr. Hamja Gurung",
    },
  ];

  const healthProblem = [
    {
      date: "20-01-2022",
      Name: "Sugar & Pressure",
    },
    {
      date: "9-12-2021",
      Name: "Mild fever",
    },
    {
      date: "12-8-2021",
      Name: "Stomachache",
    },
    {
      date: "10-8-2021",
      Name: "Backache",
    },
  ];

  return (
    <div className="sideRecords">
      <div className="recordsTitle">
        <a href="/login">
          <MainLogo />
        </a>
      </div>
      <SideSection
        title="Request Acess"
        btnText="Acess"
        addClass="btn-shade"
        path="http://localhost:4000/patient-demo"
      />
      <SideSection
        title="Hospital you visited"
        details={hosVisitedList}
        btnText="Load More"
      />
      <SideSection
        title="Doctor You Visited"
        details={docVisitedList}
        btnText="Load More"
      />
      <SideSection
        title="Health Problems You Have"
        details={healthProblem}
        btnText="Load More"
      />
      <SideSection title="Personal Problem" btnText="View" />
      <SideSection
        title="Medical Report"
        btnText="Upload"
        addClass="btn-shade"
      />
    </div>
  );
}

export default SideRecords;
