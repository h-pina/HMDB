import "./movieContent.css";

const movieContent = ({ movieTitle }) => {
  return (
    <div className="content">
      <iframe src="https://www.youtube.com/embed/q5l-2R7E_48"></iframe>
      <div className="info">
        <h2>{movieTitle}</h2>
        <p className="sinopse">
          <b>Sinopse:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut
          massa nibh. Pellentesque est tellus, mattis varius metus quis,
          pellentesque euismod risus. Nullam lacinia ligula sit amet tellus
          eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id
          ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi
          ultrices aliquet. Donec nibh ligula,nibh. Pellentesque est tellus,
          mattis varius metus quis, pellentesque euismod risus. Nullam lacinia
          ligula sit amet tellus eleifend, eget tincidunt neque fringilla.
          Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc
          vestibulum sem nec nisi ultrices aliquet. Donec nibh ligula,
        </p>
        <p>
          <b>Titulo Original</b>
        </p>
        <p>
          <b>Genero</b>
        </p>
        <p>
          <b>Estreia</b>
        </p>
        <p>
          <b>Conteudo Adulto:</b>
        </p>
        <p>
          <b>Duração</b>
        </p>
        <p className="rate">
          <b>Avaliação:</b>
        </p>
      </div>
      <div />
    </div>
  );
};

export default movieContent;
