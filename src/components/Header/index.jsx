import "./styles.css";
import logo from "../../imgs/logoHugo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//TODO: Create Search Bar Dynamic

function Header({ onReleasesClick, onHighlightsClick, hideSections }) {
  const [query, setQuery] = useState();
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

  useEffect(() => {}, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(event);
  };

  return (
    <header>
      <Link to="/">
        <img className="logo-img" src={logo} />
      </Link>
      {createButtons()}
      <input type="text" value={query} onChange={handleChange} />
    </header>
  );
}

export default Header;
