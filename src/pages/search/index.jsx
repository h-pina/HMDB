import "./styles.css";

import Header from "../../components/Header";
import HighlightPanel from "../../components/Highlights/HighlightPanel";
import Footer from "../../components/Footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { query } = useParams();
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    const fetchResultList = async () => {
      const resultListRaw = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9ec145f1e4ffb5e1b2d2682e0f236af0&language=pt-BR&query=${query}&page=1&include_adult=false`
      );
      const resultListJson = await resultListRaw.json();

      setResultList(resultListJson);
    };
    fetchResultList();
  }, []);

  return (
    <>
      <Header hideSections={true} />
      {resultList && (
        <div className="srch-results">
          {resultList.results.map((result) => (
            <HighlightPanel
              imageLink={result.poster_path}
              movieId={result.id}
            />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Movie;
