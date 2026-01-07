import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cart';
import plants from '../data/plants';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setNotification(`${plant.name} added to cart!`);
    setTimeout(() => setNotification(''), 2000);
  };

  const categories = ['Indoor', 'Outdoor', 'Succulents'];

  return (
    <div>
      {notification && <div className="notification">{notification}</div>}
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat} Plants</h2>
          <div className="products">
            {plants.filter(p => p.category === cat).map(plant => {
              const isAdded = cartItems.some(item => item.id === plant.id);
              return (
                <div key={plant.id} className="plant">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button disabled={isAdded} onClick={() => handleAddToCart(plant)}>
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
