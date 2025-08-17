export default function CartItem({ item, increase, decrease, remove }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
      <div style={{ flexGrow: 1 }}>
        <h4>{item.name}</h4>
        <p>Precio unitario: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => increase(item.id)}>+</button>
        <button onClick={() => decrease(item.id)}>-</button>
        <button onClick={() => remove(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}