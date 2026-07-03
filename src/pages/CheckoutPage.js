import { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {

    const user = localStorage.getItem("user");

    if (!user) {

        alert("Please login first.");

        navigate("/login");

    }

  }, [navigate]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.phone
    ) {
      return;
    }

    alert("🎉 Order Placed Successfully!");

    setCart([]);

    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="order-total">
        Order Total: <strong>${total.toFixed(2)}</strong>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Shipping Address"
          rows="4"
          value={form.address}
          onChange={handleChange}
        />

        <button type="submit">
          Place Order
        </button>

      </form>
    </div>
  );
}

export default CheckoutPage;