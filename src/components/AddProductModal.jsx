import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

export default function AddProductModal({ show, onClose }) {
  const [form, setForm] = useState({ title: "", description: "", price: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...form, price: Number(form.price) }));
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add Product</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
              />
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
}
