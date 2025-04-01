import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { 
  MdOutlineArrowDownward, MdAccountBalance, MdAddCircleOutline, MdSmartphone, 
  MdOutlineNetworkCell, MdReceiptLong, MdElectricBolt, MdOutlineLock, MdSportsSoccer 
} from 'react-icons/md';
import Logo from '../assets/Logo.png';
import '../App.css';

const services = [
    { icon: MdOutlineArrowDownward, title: 'Withdraw' },
    { icon: MdAccountBalance, title: 'Transfer Money' },
    { icon: MdAddCircleOutline, title: 'Add Money', link: '/fund-wallet' },
    { icon: MdSmartphone, title: 'Airtime' },
    { icon: MdOutlineNetworkCell, title: 'Data' },
    { icon: MdReceiptLong, title: 'Pay Bills' },
    { icon: MdElectricBolt, title: 'Electricity' },
    { icon: MdOutlineLock, title: 'Safebox' },
    { icon: MdSportsSoccer, title: 'Betting' }
];

const Services = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <Link to='/home'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/help'>Help & Support</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/agent'>Become an Agent</Link>
        </div>
        <div className='cta'>
          <Link to='/login'>
            <button>Login / Signup</button>
          </Link>
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
          {services.map((item, index) => (
            <Link to={item.link || '#'} key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-b-4 border-red-500 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-red-200 rounded-full mb-4">
                  <item.icon className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Secure and reliable {item.title.toLowerCase()} services.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer id="help" container className='bg-black'>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='logo'>
              <h1 className='text-gray-400'>Smart-OT</h1>
              <img src={Logo} alt="Smart-OT Logo" width="100" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default Services;