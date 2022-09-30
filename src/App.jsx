import { HashRouter, Route, Routes, useNavigate, Link } from "react-router-dom";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import PokemonDetails from "./Components/PokemonDetails";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import UserInput from "./Components/UserInput";
import pokeballGray from "./assets/images/pokeballGray.png";
import Settings from "./Components/Settings";

function App() {
  // const navegate= useNavigate();
  
  return (
    <>
      <HashRouter>
        <div className="pokeball-container">
          <img className="userInput-img2" src={pokeballGray} />
        </div>
        <div className="App">
          <Routes>
            <Route path="/" element={<UserInput />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokedex/:id" element={<PokemonDetails />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
        <Link to="/settings">
          <button className="settings">
            <i className="fa-solid fa-gear"></i>
          </button>
        </Link>
      </HashRouter>
    </>
  );
}

export default App;
