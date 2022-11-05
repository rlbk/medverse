import "./BlogItem.css";
import Description from "../shared-components/Description";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function BlogItem() {
  const title = `Importance of Blockchain in Health Services`;
  const desText = `Vegetables are necessary for human health due to their vitamin A, minerals, and dietary fiber content. Vitamins A, C, and E play a vital role in human health. The nutrient and non-nutrient molecules in vegetables reduce the risk of chronic disease, diabetes, cancer, obesity, and hyperactivity. Green vegetables are not only for physical health but also for mental health of a person....`;

  const personName = "Dr. Keshav Pr. Dhungel";
  const date = "29th May 2022";

  return (
    <div className="blogItem-container">
      <div className="blogItem-image">
        <img
          src={require("../images/cauliflower-113.png")}
          alt=""
          className="blogItem-image"
        />
      </div>
      <div className="blogItem--icon">
        <div className="icon--symbol">
          <PersonIcon fontSize="small" />
        </div>
        <div className="icon--des">{personName}</div>
      </div>
      <div className="blogItem--icon">
        <div className="icon--symbol">
          <CalendarMonthIcon fontSize="small" />
        </div>
        <div className="icon--des">{date}</div>
      </div>
      <h4 className="blogItem-subtitle">{title}</h4>
      <Description text={desText} fontSize="12px" />
      <p className="readMore">Read More</p>
    </div>
  );
}

export default BlogItem;
