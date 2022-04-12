import "../styles/movieCarrousel.css";
import MovieContent from "./MovieContent.js";

function MovieCarrousel() {
  let actualPanel = 0;

  let handleRightClick = () => {
    let positions = ["0vw", "-90vw", "-180vw"];
    let panels = document.getElementsByClassName("panel");
    for (let i = 0; i < panels.length; i++) {
      if (actualPanel < 2) {
        panels.item(i).style.transform = `translateX(${
          positions[actualPanel + 1]
        })`;
      }
    }
    console.log("Direita");
    actualPanel++;
  };

  let handleLeftClick = () => {
    let positions = ["0vw", "-90vw", "-180vw"];
    let panels = document.getElementsByClassName("panel");
    for (let i = 0; i < panels.length; i++) {
      if (actualPanel > 0) {
        panels.item(i).style.transform = `translateX(${
          positions[actualPanel - 1]
        })`;
      }
    }
    console.log("esquerda");
    actualPanel--;
  };

  return (
    <>
      <h1>Lançamentos</h1>
      <div className="container">
        <button className="arrow aleft" onClick={handleLeftClick} />
        <div className="carroussel">
          <div className="panel">
            <MovieContent movieTitle="The Boys" />
          </div>
          <div className="panel">
            <MovieContent movieTitle="The Girls" />
          </div>
          <div className="panel">
            <MovieContent movieTitle="The Kids" />
          </div>
        </div>
        <button className="arrow aright" onClick={handleRightClick} />
      </div>
    </>
  );
}

export default MovieCarrousel;
