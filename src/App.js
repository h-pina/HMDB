import Homepage from "./pages/homepage";
import Movie from "./pages/movie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//TODO: Finish Carrousel Missing Data sections
//TODO: Change Poster pictures based onb selection
//TODO: Limit Max Post Pictures
//TODO: Implement search bar
//TODO: Implement Movie content redirection by highlights

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
