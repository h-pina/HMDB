import "./styles.css";

import Header from "../../components/Header";
import MovieCarrousel from "../../components/MovieCarrousel";
import Highlights from "../../components/Highlights";
import Footer from "../../components/Footer";
import { useRef } from "react";

function Homepage() {
  const movieCarrousselView = useRef(null);
  const highlightView = useRef(null);

  const onReleasesClick = () => {
    movieCarrousselView.current.scrollIntoView({ behavior: "smooth" });
  };

  const onHighlightsClick = () => {
    highlightView.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onReleasesClick={onReleasesClick}
        onHighlightsClick={onHighlightsClick}
      />
      <main ref={movieCarrousselView}>
        <MovieCarrousel />
      </main>
      <div ref={highlightView} className="highlight-container">
        <Highlights />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
