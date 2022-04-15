import "./styles.css";
import logo from "../../imgs/logoHugo.jpg";

//TODO: Create Buttons Redirection
//TODO: Create Search Bar Dynamic

function Header({ onReleasesClick, onHighlightsClick }) {
  return (
    <header>
      <img className="logo-img" src={logo} />
      <button onClick={onReleasesClick}> Lançamentos </button>
      <button onClick={onHighlightsClick}> Destaques </button>
      <input />
    </header>
  );
}

export default Header;
