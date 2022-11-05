import "./FilterTag.css";

function FilterTag({ text, active }) {
  const classList = Boolean(active)
    ? `regularStyle activeStyle`
    : "regularStyle";
  return <div className={classList}>{text}</div>;
}

export default FilterTag;
