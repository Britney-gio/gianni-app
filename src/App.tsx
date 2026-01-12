import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/acquisto">Acquisto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acquisto" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

