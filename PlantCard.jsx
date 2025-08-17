export default function PlantCard({ plant, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px" }}>
      <img src={plant.image} alt={plant.name} style={{ width: "100%" }} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>Precio: ${plant.price}</p>
      <button onClick={() => addToCart(plant)}>Agregar al carrito</button>
    </div>
  );
}