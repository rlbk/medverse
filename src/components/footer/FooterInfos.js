import FooterInfoItem from "./FooterInfoItem";
import "./FooterInfos.css";

const FooterInfos = ({ title, items }) => {
  return (
    <div className="footerInfos">
      <h4 className="footerInfos-title">{title}</h4>
      <div className="footerInfos-items borderRight">
        {items.map((item, i) => (
          <FooterInfoItem itemName={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FooterInfos;
