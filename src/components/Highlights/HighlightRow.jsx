import HighlightPanel from "./HighlightPanel";
import "./HighlightRow.css";

function HighlightRow() {
  return (
    <div className="panels-container">
      <HighlightPanel />
      <HighlightPanel />
      <HighlightPanel />
      <HighlightPanel />
    </div>
  );
}

export default HighlightRow;
