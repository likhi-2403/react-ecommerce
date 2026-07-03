import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>React Store</strong>.
        </p>

        <p>Your order has been confirmed.</p>

        <Link to="/">
          <button className="home-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;