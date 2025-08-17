import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart({ cart, increase, decrease, remove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          ))}
          <h3>Total: ${total}</h3>
          <Link to="/products">
            <button>Continuar comprando</button>
          </Link>
          <button>Pagar</button>
        </>
      )}
    </div>
  );
}