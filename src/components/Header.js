import "../styles/header.css";
import logo from "../imgs/logoHugo.jpg";

function header() {
  return (
    <header>
      <img src={logo} />
      <button> Lançamentos </button>
      <button> Destaques </button>
      <input />
    </header>
  );
}

export default header;
