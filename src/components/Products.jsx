import React, { useState, useEffect } from 'react';

    function Products() {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('/api/products')
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);

      return (
        <div>
          <h2>Products</h2>
          <input type="text" placeholder="Tracking #" />
          <button>Track order</button>
          <div className="product-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>{product.specifications}</p>
                <p>MSDS</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Products;
