import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/actions/cart';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalCost = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total number of plants: {cart.totalItems}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>
      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default ShoppingCart;
