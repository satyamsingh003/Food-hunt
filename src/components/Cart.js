import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-content">
        {cartItems.length > 0 ? (
          <button className="clearCartButton" onClick={handleClearCart}>
            Clear Cart
          </button>
        ) : null}
        {cartItems.length === 0 && (
          <h1 className="empty-cart-text">
            Cart is empty, add items to your cart..!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
