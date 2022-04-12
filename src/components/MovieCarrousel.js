import "../styles/movieCarrousel.css";
import MovieContent from "./MovieContent.js";

function movieCarrousel() {
  return (
    <>
      <h1>Lançamentos</h1>
      <div className="carroussel">
        <MovieContent />
        <MovieContent />
        <MovieContent />
      </div>
    </>
  );
}

export default movieCarrousel;
