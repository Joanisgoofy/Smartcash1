import React, { useState } from 'react';
import { service } from '../components/export';
import Logo from '../assets/Logo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Services = () => {
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [formData, setFormData] = useState({
    user: localStorage.getItem('userEmail'),
    amount: '',
    wallet: localStorage.getItem('walletId'),
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
          amount: Number(formData.amount),
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Server Error:", data);
        throw new Error(data.message || "Failed to fund wallet");
      }
  
      console.log("Success:", data);
      setMessage({ type: 'success', text: 'Wallet funded successfully!' });
      setFormData({ ...formData, amount: '' });

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
    <>
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <Link to='/home'>Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/help">Help & Support</Link>
          <Link to="/about">About Us</Link>
          <Link to="/agent">Become an Agent</Link>
        </div>
      </header>

      <section className="w-[95%] mx-auto py-20 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-red-500 text-lg uppercase">Our Services</h1>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
            Transfer & CashOut
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {service.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-b-4 border-red-500 hover:scale-105 transition-transform cursor-pointer"
              onClick={() => item.title === "Add Money" ? setShowAddMoneyModal(true) : null}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-200 rounded-full mb-4">
                <item.icon className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {item.description || `Secure and reliable ${item.title.toLowerCase()} services.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Money Modal - Using FundWallet functionality */}
      {showAddMoneyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add Money to Wallet</h2>
            
            {message && (
              <p className={`text-center mt-2 ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                {message.text}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter amount"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddMoneyModal(false);
                    setMessage(null);
                  }}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Proceed to Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer container className="bg-gray-900 mt-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={Logo} alt="Smart-OT Logo" className="h-10" />
                <span className="text-xl font-semibold text-white">Smart-OT</span>
              </div>
              <p className="text-gray-400">
                Bridging the financial divide through innovative banking solutions.
              </p>
            </div>
            
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col className="mt-4">
                <Footer.Link href="#" className="text-gray-400 hover:text-white">About Us</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Careers</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Newsroom</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col className="mt-4">
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Help Center</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Contact Us</Footer.Link>
                <Link to="/help" className="text-gray-400 hover:text-white">FAQs</Link>
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col className="mt-4">
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Footer.Link>
                <Footer.Link href="#" className="text-gray-400 hover:text-white">Licenses</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          
          <Footer.Divider className="my-8 border-gray-700" />
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <Footer.Copyright 
              href="#" 
              by="Smart-OT™" 
              year={new Date().getFullYear()} 
              className="text-gray-400"
            />
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Footer.Icon href="#" icon={BsFacebook} className="text-gray-400 hover:text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-gray-400 hover:text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-gray-400 hover:text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-gray-400 hover:text-white" />
              <Footer.Icon href="#" icon={BsDribbble} className="text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default Services;