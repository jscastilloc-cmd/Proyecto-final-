import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido a Paradise Nursery</h1>
      <p>Explora nuestra variedad de plantas de interior.</p>
      <Link to="/products">
        <button>Ver Productos</button>
      </Link>
    </div>
  );
}