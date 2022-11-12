import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { CharacterInfo } from "./pages/character-info/character-info";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
