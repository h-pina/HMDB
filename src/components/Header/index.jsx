import "./styles.css";
import logo from "../../imgs/logoHugo.jpg";
import { Link } from "react-router-dom";
//TODO: Create Search Bar Dynamic

function Header({ onReleasesClick, onHighlightsClick, hideSections }) {
  const createButtons = () => {
    if (!hideSections) {
      return (
        <>
          <button onClick={onReleasesClick}> Lançamentos </button>
          <button onClick={onHighlightsClick}> Destaques </button>
        </>
      );
    }
  };
  return (
    <header>
      <Link to="/">
        <img className="logo-img" src={logo} />
      </Link>
      {createButtons()}
      <input />
    </header>
  );
}

export default Header;
