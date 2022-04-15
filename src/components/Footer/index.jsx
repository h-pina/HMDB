import "./styles.css";
import logoHugo from "../../imgs/logoHugo.jpg";
import logoCommit from "../../imgs/logoCommit.png";

const footer = () => {
  return (
    <footer>
      <img className="logo-img" src={logoCommit} />
      <div>
        <h2>Produzido por Hugo Pina</h2>
        <h3>MIT License</h3>
      </div>
      <img className="logo-img" src={logoHugo} />
    </footer>
  );
};

export default footer;
