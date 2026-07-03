import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="product-card">

        <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <img
            src={product.image}
            alt={product.title}
            className="product-image"
            />

            <h3>{product.title}</h3>

            <p className="price">
            ${product.price}
            </p>
        </Link>

        <button
        className="add-to-cart-btn"
        onClick={() => {
            addToCart(product);
        }}
        >
        Add to Cart
        </button>

        </div>
    );
}

export default ProductCard;