import { Routes, Route } from "react-router-dom";
import Contact from "./assets/pages/Contact";
import Forsale from "./assets/pages/Forsale";
import Home from "./assets/pages/Home";
import Portfolio from "./assets/pages/Portfolio";
import Slashtheory from "./assets/pages/Slashtheory";
import Cheetah from "./assets/pages/Cheetah";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/portfolio"} element={<Portfolio />} />
      <Route path={"/forsale"} element={<Forsale />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/slashtheory"} element={<Slashtheory />} />
      <Route path={"/cheetah"} element={<Cheetah />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
