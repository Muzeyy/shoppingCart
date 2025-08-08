import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="fw-bold">${product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
