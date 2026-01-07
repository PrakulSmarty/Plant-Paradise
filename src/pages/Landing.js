import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)' }}>
      <div>
        <h1>Plant Paradise</h1>
        <p>Welcome to Plant Paradise, your go-to destination for beautiful houseplants. Discover a wide variety of plants to brighten your home and garden.</p>
        <Link to="/products"><button>Get Started</button></Link>
      </div>
    </div>
  );
};

export default Landing;
