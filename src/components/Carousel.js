import React from 'react';
import image1 from '../assets/images/carousel/image1.webp';
import image2 from '../assets/images/carousel/image2.webp';
import image3 from '../assets/images/carousel/image3.webp';
import image4 from '../assets/images/carousel/image4.webp';

const Carousel = () => (
  <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={image1} className="d-block w-100" alt="Welcome" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      </div>
      <div className="carousel-item">
        <img
          src={image2}
          className="d-block w-100"
          alt="Book Show"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={image3}
          className="d-block w-100"
          alt="Book Show"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>
      <div className="carousel-item">
        <img
          src={image4}
          className="d-block w-100"
          alt="Book Show"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;
