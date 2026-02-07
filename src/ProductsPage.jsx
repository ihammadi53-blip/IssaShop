import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        if (category) {
          const filtered = data.filter(
            product => product.category.toLowerCase() === category.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <section className="products-page">
      <h1>{category ? category : "All Products"}</h1>

      {/* أزرار التصنيفات */}
      <div className="category-buttons" style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <Link to="/products/electronics" className="btn">Electronics</Link>
        <Link to="/products/jewelery" className="btn">Jewelery</Link>
        <Link to="/products/men's clothing" className="btn">Men's Clothing</Link>
        <Link to="/products/women's clothing" className="btn">Women's Clothing</Link>
      </div>

      {/* grid المنتجات */}
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">${product.price}</div>
              <p className="product-description">{product.description.slice(0, 20)}...</p>
              <button className="btn">in den warenkorb</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
