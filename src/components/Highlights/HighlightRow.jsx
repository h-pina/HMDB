import HighlightPanel from "./HighlightPanel";
import "./HighlightRow.css";

function HighlightRow() {
  let imageLink =
    "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg";
  return (
    <div className="panels-container">
      <HighlightPanel imageLink={imageLink} />
      <HighlightPanel imageLink={imageLink} />
      <HighlightPanel imageLink={imageLink} />
      <HighlightPanel imageLink={imageLink} />
    </div>
  );
}

export default HighlightRow;
