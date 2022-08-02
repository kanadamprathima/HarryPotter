import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetailsPage from "./Pages/CharacterDetailsPage";
import HomePage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/character/id">Characters</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/id" element={<CharacterDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
