import { useState, useRef, useEffect } from "react";
import "./styles.css";
import MovieContent from "./MovieContent.jsx";

function MovieCarrousel() {
  const [actualPanel, setActualPanel] = useState(0);
  const [movies, setMovies] = useState();
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);

  const panel1 = useRef(null);
  const panel2 = useRef(null);
  const panel3 = useRef(null);

  let handleRightClick = () => {
    if (actualPanel > -180) {
      setActualPanel(actualPanel - 90);
    }
  };

  let handleLeftClick = () => {
    if (actualPanel < 0) {
      setActualPanel(actualPanel + 90);
    }
  };

  useEffect(() => {
    let moviesDispl = [
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 20),
    ];
    setMoviesDisplayed(moviesDispl);

    const fetchReleases = async () => {
      let moviesRaw = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=pt-BR&page=1"
      );
      let movies = await moviesRaw.json();
      setMovies(movies);
    };

    fetchReleases();
  }, []);

  useEffect(() => {
    panel1.current.style.transform = `translateX(${actualPanel}vw)`;
    panel2.current.style.transform = `translateX(${actualPanel}vw)`;
    panel3.current.style.transform = `translateX(${actualPanel}vw)`;
  }, [actualPanel]);

  return (
    <>
      <h1>Lançamentos</h1>
      <div className="container">
        <button className="arrow aleft" onClick={handleLeftClick} />
        <div className="carroussel">
          <div ref={panel1} className="panel">
            {movies && (
              <MovieContent movieId={movies.results[moviesDisplayed[0]].id} />
            )}
          </div>
          <div ref={panel2} className="panel">
            {movies && (
              <MovieContent movieId={movies.results[moviesDisplayed[1]].id} />
            )}
          </div>
          <div ref={panel3} className="panel">
            {movies && (
              <MovieContent movieId={movies.results[moviesDisplayed[2]].id} />
            )}
          </div>
        </div>
        <button className="arrow aright" onClick={handleRightClick} />
      </div>
    </>
  );
}

export default MovieCarrousel;
