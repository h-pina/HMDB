import "./HighlightPanel.css";
import { Link } from "react-router-dom";
//TODO: Link to new page Dynamic

function HighlightPanel() {
  return (
    <>
      <Link to="/movie">
        <img
          className="HighlightPanel"
          src="https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg"
          alt=""
        />
      </Link>
    </>
  );
}

export default HighlightPanel;
