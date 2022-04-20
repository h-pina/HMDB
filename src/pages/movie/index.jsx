import "./styles.css";

import Header from "../../components/Header";
import MovieContent from "../../components/MovieCarrousel/MovieContent.jsx";
import Footer from "../../components/Footer";

function Movie() {
  return (
    <>
      <Header hideSections={true} />
      <main className="movie-details">
        <MovieContent movieTitle="The CommitJr" />
      </main>
      <Footer />
    </>
  );
}

export default Movie;
