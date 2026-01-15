import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="/checkout">Acquisto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
