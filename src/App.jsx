import { useState } from "react";
import ProductList from "./components/ProductList";
import CartTable from "./components/CartTable";
import AddProductModal from "./components/AddProductModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shopping Cart</h1>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Product
        </button>
      </div>

      <ProductList />
      <CartTable />

      <AddProductModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
