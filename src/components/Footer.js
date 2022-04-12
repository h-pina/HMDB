import "../styles/footer.css";
import logoHugo from "../imgs/logoHugo.jpg";
import logoCommit from "../imgs/logoCommit.png";

const footer = () => {
  return (
    <footer>
      <img src={logoCommit} />
      <div>
        <h2>Produzido por Hugo Pina</h2>
        <h3>Commit License</h3>
      </div>

      <img src={logoHugo} />
    </footer>
  );
};

export default footer;
