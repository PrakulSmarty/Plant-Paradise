import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  return (
    <header>
      <nav>
        <Link to="/" className="logo">🌿 Plant Paradise</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">🛒 Cart ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
