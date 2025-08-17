import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#d4f1c5" }}>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
  );
}