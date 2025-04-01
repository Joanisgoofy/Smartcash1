import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Heros = () => {
  return (
    <>
      <section className='w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
        <div>
          <img src={Logo} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
        </div>
        <div className='flex flex-col justify-center items-start gap-8'>
          <h1 className='text-blue-700 font-extrabold dark:text-white'>WHO WE ARE</h1>
          <h1 className='text-black text-[15px] font-semibold leading-10 dark:text-white'>
            Smart-OT is a leading and innovative Payment Service with an overarching vision of bridging the financial divide by providing rural and urban Nigerians secured and reliable banking services as well as supporting the Central Bank of Nigeria's (CBN) drive to ensure financial Inclusion for every Nigerian. With its corporate headquarters in Lagos, Nigeria, Smart-OT's overarching objective is to ensure financial inclusion for everyone including persons in the furthest and remotest parts of Nigeria.
          </h1>
          <Link 
            to="/about" 
            className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:text-black text-ig p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300 inline-block text-center'
          >
            READ MORE
          </Link>
        </div>
      </section>
    </>
  );
};

export default Heros;