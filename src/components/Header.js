import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  return (
    <header>
      <nav>
        <div className="logo">🌿 Plant Paradise</div>
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
