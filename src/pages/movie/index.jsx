import "./styles.css";

import Header from "../../components/Header";
import MovieContent from "../../components/MovieCarrousel/MovieContent.jsx";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  return (
    <>
      <Header hideSections={true} />
      <main className="movie-details">
        <MovieContent movieId={id} />
      </main>
      <Footer />
    </>
  );
}

export default Movie;
