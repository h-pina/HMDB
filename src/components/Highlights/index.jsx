import "./style.css";

import HighlightRow from "./HighlightRow.jsx";
//TODO: Create Drop Down Menu
//TODO: Expansion Poster Mechanic

function Highlights() {
  return (
    <>
      <header className="hl-header">
        <h1>Destaques</h1>
        <input></input>
      </header>
      <HighlightRow />
      <button className="hl-button">Carregar Mais </button>
    </>
  );
}

export default Highlights;
