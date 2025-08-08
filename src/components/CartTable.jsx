import { useSelector } from "react-redux";

export default function CartTable() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end fw-bold fs-5">Total: ${total}</div>
    </div>
  );
}
