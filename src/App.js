import "./styles/App.css";

import Header from "./components/Header.js";
import MovieCarrousel from "./components/MovieCarrousel.js";
import Highlights from "./components/Highlights.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <MovieCarrousel />
      </main>
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
