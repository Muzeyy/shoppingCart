import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
      {products.map((p) => (
        <div key={p.id} className="col">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
