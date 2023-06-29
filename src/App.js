import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Profil from "@/pages/profil/Profil";
import Error from "@/pages/error/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/accueil" element={<Home />} />
          <Route path="/profil/:id" element={<Profil />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
