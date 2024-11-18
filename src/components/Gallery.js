import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

function Gallery() {
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img7.jpg',
  ];

  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <SampleNextArrow />, // Custom Next Arrow
    prevArrow: <SamplePrevArrow />, // Custom Prev Arrow
  };

  // Custom Next Arrow
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow next`} onClick={onClick}>
        &#9654; {/* Unicode for a right-pointing triangle */}
      </div>
    );
  }

  // Custom Previous Arrow
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow prev`} onClick={onClick}>
        &#9664; {/* Unicode for a left-pointing triangle */}
      </div>
    );
  }

  return (
    <section className="gallery">
      <h2>Our Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Gallery;
