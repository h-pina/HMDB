import "./style.css";
import HighlightPanel from "./HighlightPanel";
import { useState, useEffect, useRef } from "react";
//TODO: Finish Category Getting
//TODO: Take poster pictures
function Highlights() {
  const [categoryList, setCategoryList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [rowNumber, setRowNumber] = useState(1);
  const [genre, setGenre] = useState();
  const selectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setRowNumber(1);

    async function fetchCategoryList() {
      let list = [];
      const catListRaw = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=en-US"
      );
      const catList = await catListRaw.json();
      catList.genres.forEach((element) => {
        list.push(element);
      });
      setCategoryList(list);
    }

    fetchCategoryList();
  }, []);

  useEffect(() => {
    async function fetchGenreMovieList() {
      let genreMovieListRaw = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=en-US&with_genres=${genre}`
      );
      let genreMovieListJson = await genreMovieListRaw.json();

      setMovieList(genreMovieListJson);
    }

    fetchGenreMovieList();
  }, [genre]);

  useEffect(() => {
    containerRef.current.style.height = `${100 + (rowNumber - 1) * 60}vh`;
  }, [rowNumber]);

  const addRow = () => {
    if (rowNumber * 4 < movieList.results.length) setRowNumber(rowNumber + 1);
  };

  const handleGenreChange = (event) => {
    setRowNumber(1);

    let genre = categoryList.find(
      (element) => element.name === event.target.value
    );
    setGenre(genre.id);
  };

  return (
    <div ref={containerRef} className="highlight">
      <header className="hl-header">
        <h1>Destaques</h1>
        <select onChange={handleGenreChange}>
          <option value={"Select"}>Select</option>
          {categoryList.map((item) => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </header>
      {genre && (
        <div className="highlights-container">
          {movieList.results.slice(0, rowNumber * 4).map((movie) => (
            <HighlightPanel imageLink={movie.poster_path} movieId={movie.id} />
          ))}
        </div>
      )}

      <button className="hl-button" onClick={addRow}>
        Carregar Mais
      </button>
    </div>
  );
}

export default Highlights;
