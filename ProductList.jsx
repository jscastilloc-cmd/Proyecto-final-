import PlantCard from "../components/PlantCard";
import { plants } from "../data";

export default function ProductList({ addToCart }) {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === category).map(plant => (
              <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}