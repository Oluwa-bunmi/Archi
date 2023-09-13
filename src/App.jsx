import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Deluxe from "./pages/Deluxe";
import Standart from "./pages/Standart";
import Luxury from "./pages/Luxury";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deluxe-room" element={<Deluxe />} />
        <Route path="/standart-room" element={<Standart />} />
        <Route path="/luxury-room" element={<Luxury />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
