import { useState, useRef, useEffect } from "react";
import "./styles.css";
import MovieContent from "./MovieContent.jsx";

function MovieCarrousel() {
  const [actualPanel, setActualPanel] = useState(0);

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
            <MovieContent movieTitle="The Boys" />
          </div>
          <div ref={panel2} className="panel">
            <MovieContent movieTitle="The Girls" />
          </div>
          <div ref={panel3} className="panel">
            <MovieContent movieTitle="The Kids" />
          </div>
        </div>
        <button className="arrow aright" onClick={handleRightClick} />
      </div>
    </>
  );
}

export default MovieCarrousel;
