import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginLogic } from '../api/auth'; // Import the correct function

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null);
  //   setLoading(true);
  
  //   try {
  //     const response = await LoginLogic({
  //       email: formData.email,
  //       password: formData.password,
  //     });
  
  //     console.log('API Response:', response); // Debugging
  
  //     if (response.success) {
  //       localStorage.setItem('auth_token', response.token);
  //       navigate('/hero');
  //     } else {
  //       setError(response.message || 'Invalid credentials');
  //     }
  //   } catch (err) {
  //     console.error('Login error:', err);
  //     setError('An error occurred. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending:", formData);

    try {
      const response = await fetch("https://dark-sissie-wfdhammy-78750b0c.koyeb.app/user/v1/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.log("Full error response:", data);
        throw new Error(data.message || `Login failed with status ${response.status}`);
      }
      
      console.log("Login successful:", data);
      setError(null);

      if (response.ok) {
        localStorage.setItem('auth_token', data.access);
        localStorage.setItem('walletBalance', data.wallet.balance);
        localStorage.setItem('userId', data.data.id);
        localStorage.setItem('userEmail', data.data.email);
        localStorage.setItem('walletId', data.wallet.id);
        navigate('/home');
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login to Your Account</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
