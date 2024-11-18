import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    {
      name: 'Arun Sharma',
      feedback: 'The 1 Number Bricks are of exceptional quality! Perfect for my construction project.',
    },
    {
      name: 'Sneha Roy',
      feedback: 'Affordable pricing and timely delivery. Highly recommend this brick field!',
    },
    {
      name: 'Vikram Das',
      feedback: 'The team was very professional and ensured smooth service.',
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>"{review.feedback}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
