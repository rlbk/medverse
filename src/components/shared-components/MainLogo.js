import "./MainLogo.css";

const MainLogo = ({ addClass }) => {
  const classList = Boolean(addClass) ? `logo-text ${addClass}` : "logo-text";
  return (
    <h1 className={classList}>
      <span className="highlight-text">Med</span>Verse
    </h1>
  );
};

export default MainLogo;
