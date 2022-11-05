import "./SectionTitle.css";

const SectionTitle = ({ text }) => {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle-text">{text}</h2>
    </div>
  );
};

export default SectionTitle;
