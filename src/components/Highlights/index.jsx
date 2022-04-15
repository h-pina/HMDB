import "./style.css";

import HighlightRow from "./HighlightRow.jsx";
import { useState, useEffect, useRef } from "react";

function Highlights() {
  const [rowNumber, setRowNumber] = useState(1);
  const containerRef = useRef(null);

  let rowList = [];
  for (let i = 0; i < rowNumber; i++) {
    rowList.push(<HighlightRow />);
  }

  const addRow = () => {
    setRowNumber(rowNumber + 1);
  };

  useEffect(() => {
    containerRef.current.style.height = `${100 + (rowNumber - 1) * 60}vh`;
  }, [rowNumber]);

  return (
    <div ref={containerRef} className="highlight">
      <header className="hl-header">
        <h1>Destaques</h1>
        <select>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
          <option value="f">f</option>
          <option value="g">g</option>
          <option value="h">h</option>
          <option value="i">i</option>
        </select>
      </header>
      {rowList}
      <button className="hl-button" onClick={addRow}>
        Carregar Mais
      </button>
    </div>
  );
}

export default Highlights;
