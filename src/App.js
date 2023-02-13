import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PlayerMain from "./player/PlayerMain";
import ScoringMain from "./scoring/ScoringMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/scoring" element={<ScoringMain />} />
        <Route path="/player" element={<PlayerMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
