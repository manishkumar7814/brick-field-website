import React from 'react';
import './Pricing.css';

function Pricing() {
  const prices = [
    { type: '1 Number Bricks', price: '₹ 8.5* per brick' },
    { type: '2 Number Bricks', price: '₹ 7.5* per brick' },
    { type: '3 Number Bricks', price: '₹ 6.5* per brick' },
  ];

  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Brick Type</th>
            <th>Price (Negotiable)</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((brick, index) => (
            <tr key={index}>
              <td>{brick.type}</td>
              <td>{brick.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Pricing;
