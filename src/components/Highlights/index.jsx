import "./style.css";

import HighlightRow from "./HighlightRow.jsx";
import { useState, useEffect, useRef } from "react";
//TODO: Finish Category Getting
//TODO: Take poster pictures
function Highlights() {
  const [categoryList, setCategoryList] = useState([]);
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
    setRowNumber(1);

    async function fetchCategoryList() {
      let list = [];
      const catListRaw = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=pt-BR"
      );
      const catList = await catListRaw.json();
      catList.genres.forEach((element) => {
        list.push(element.name);
      });
      setCategoryList(list);
    }

    fetchCategoryList();
  }, []);

  useEffect(() => {
    containerRef.current.style.height = `${100 + (rowNumber - 1) * 60}vh`;
  }, [rowNumber]);

  return (
    <div ref={containerRef} className="highlight">
      <header className="hl-header">
        <h1>Destaques</h1>
        <select>
          <option value="todos">Todos</option>
          {categoryList.map((item) => (
            <option value={item}>{item}</option>
          ))}
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
