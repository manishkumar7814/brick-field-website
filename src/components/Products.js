import React from 'react';
import './Products.css';

function Products() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-categories">
        <div className="product">
          <img src="/brick1.jpg" alt="1 Number Bricks" />
          <h3>1 Number Bricks</h3>
          <p>Premium grade red clay bricks, best suited for high-strength construction. Perfect for structural applications requiring durability and resilience.</p>
        </div>
        <div className="product">
          <img src="/brick2.jpg" alt="2 Number Bricks" />
          <h3>2 Number Bricks</h3>
          <p>Standard grade bricks that offer an affordable yet durable solution for a range of construction needs.</p>
        </div>
        <div className="product">
          <img src="/brick3.jpg" alt="3 Number Bricks" />
          <h3>3 Number Bricks</h3>
          <p>Economical bricks, ideal for non-load-bearing walls and interior applications.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
