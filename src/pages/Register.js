import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    authService.register(email, password);
    alert('Registered successfully');
    navigate('/login');
  };

  return (
    <div className="container mt-4 col-md-4">
      <h3>Register</h3>
      <input className="form-control mb-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
