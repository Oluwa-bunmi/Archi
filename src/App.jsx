import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Deluxe from "./pages/Deluxe";
import Standart from "./pages/Standart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deluxe-room" element={<Deluxe />} />
        <Route path="/standart-room" element={<Standart />} />
      </Routes>
    </>
  );
}

export default App;
