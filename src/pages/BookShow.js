import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
   if (isLoggedIn !== 'true') {
      alert('Please log in to book a show.');
      navigate('/login');
    }
  }, [navigate]);

  const handleBook = () => {
    alert('Show booked successfully!');
    navigate('/payment');
  };

  return (
    <div className="container mt-4">
      <h3>Book Show for Movie ID: {id}</h3>
      <button className="btn btn-success" onClick={handleBook}>Confirm Booking</button>
    </div>
  );
};

export default BookShow;
