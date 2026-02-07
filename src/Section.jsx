import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(/hero.jpg)`, 
        
      }}
    >
      <div className="hero-content" style={{color : "black"}}
      >
        <h1>Welcome to ISSA shop</h1>
        <p>Your one-stop shop for quality products at affordable prices</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </div>
    </section>
  );
};

export default MainSection;
