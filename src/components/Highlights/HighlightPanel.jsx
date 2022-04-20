import "./HighlightPanel.css";
import { Link } from "react-router-dom";
//TODO: Link to new page Dynamic

function HighlightPanel({ imageLink }) {
  return (
    <>
      <Link to="/movie">
        <img className="HighlightPanel" src={imageLink} alt="" />
      </Link>
    </>
  );
}

export default HighlightPanel;
