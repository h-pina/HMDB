import { useEffect, useState } from "react";
import "./movieContent.css";
const MovieContent = ({ movieId }) => {
  const [videoLink, setVideoLink] = useState();
  const [videoTitle, setVideoTitle] = useState();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    async function fetchData() {
      const movieInfoRaw = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=pt-BR`
      );
      const videoLinkRaw = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=pt-BR`
      );
      const movieInfoJson = await movieInfoRaw.json();
      const videoLinkJson = await videoLinkRaw.json();
      const videoInfo = videoLinkJson.results.find(
        (element) => element.type === "Trailer" && element != undefined
      );
      setMovieInfo(movieInfoJson);
      setVideoLink(videoInfo.key);
      setVideoTitle(videoInfo.title);
    }
    fetchData();
  }, []);

  function getGenres() {
    let concatStr = "";
    movieInfo.genres.forEach((element) => {
      concatStr = concatStr + element.name + "; ";
    });
    return concatStr;
  }

  return (
    <div className="content">
      {videoLink && (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoLink}`}
            title={videoTitle}
          />
        </>
      )}
      {!videoLink && movieInfo && (
        <>
          <div className="substitute-poster">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
              alt=""
            />
          </div>
        </>
      )}
      {movieInfo && (
        <>
          <div className="info">
            <h2>{movieInfo.title}</h2>
            <p className="sinopse">
              <b>Sinopse:</b> {movieInfo.overview}
            </p>
            <p>
              <b>Titulo Original:</b> {movieInfo.original_title}
            </p>
            <p>
              <b>Generos: </b>
              {getGenres()}
            </p>
            <p>
              <b>Estreia: </b> {movieInfo.release_date}
            </p>
            <p>
              <b>Conteudo Adulto:</b> {movieInfo.adult ? "Sim" : "Não"}
            </p>
            <p>
              <b>Duração</b> {movieInfo.runtime} minutos
            </p>
            <p className="rate">
              <b>Avaliação:</b> {movieInfo.vote_average}
            </p>
          </div>
          <div />
        </>
      )}
    </div>
  );
};

export default MovieContent;
