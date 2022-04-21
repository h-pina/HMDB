import "./HighlightPanel.css";
import { Link } from "react-router-dom";
//TODO: Link to new page Dynamic

function HighlightPanel({ imageLink, movieId }) {
  return (
    <>
      <Link to={`/movie/${movieId}`}>
        <img
          className="HighlightPanel"
          src={`https://image.tmdb.org/t/p/w500${imageLink}`}
          alt=""
        />
      </Link>
    </>
  );
}

export default HighlightPanel;
