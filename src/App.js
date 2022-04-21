import Homepage from "./pages/homepage";
import Movie from "./pages/movie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
