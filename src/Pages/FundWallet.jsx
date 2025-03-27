import React, { useState } from 'react';

const FundWalletPage = () => {

    const walletId = localStorage.getItem('walletId')
    const userEmail = localStorage.getItem('userEmail')


    const [formData, setFormData] = useState({
    user: userEmail,
    amount: '',
    wallet: walletId,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
  
    if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      setMessage({ type: 'error', text: 'Enter a valid amount!' });
      return;
    }
  
    setLoading(true);
    try {
      console.log("Request Payload:", formData);
  
      const response = await fetch('https://dark-sissie-wfdhammy-78750b0c.koyeb.app/wallet/v1/fund/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: Number(formData.amount), // Ensure amount is a number
        }),
      });
  
      const data = await response.json(); // <-- Fixed: Added parentheses
  
      if (!response.ok) {
        console.error("Server Error:", data);
        throw new Error(data.message || "Failed to fund wallet");
      }
  
      console.log("Success:", data);
      setMessage({ type: 'success', text: 'Wallet funded successfully!' });
      setFormData({ user: '', amount: '', wallet: '' });

      const url = data.url;
        window.location.href = url;
    } catch (error) {
      console.error("Request Failed:", error);
      setMessage({ type: 'error', text: error.message || 'Transaction failed. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Fund Wallet</h2>
        
        {message && (
          <p className={`text-center mt-2 ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
            {message.text}
          </p>
        )}

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wallet</label>
            <select
              name="wallet"
              value={formData.wallet}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Wallet</option>
              <option value="main">Main Wallet</option>
              <option value="savings">Savings Wallet</option>
            </select>
          </div> */}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Fund Wallet'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundWalletPage;
