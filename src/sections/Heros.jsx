import React from 'react'
import Logo from '../assets/Logo.png'

const Heros = () => {
  return (
    <>
   <section  className=' w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
      <div>
        <img src={Logo} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1  className='text-blue-700 font-extrabold dark:text-white'>WHO WE ARE</h1>
        <h1 className='text-black text-[40px] font-semibold leading-10 dark:text-white'>We Help Clients Buy And Sell Houses Since 2001</h1>
        <p className='text-x1 text-gray-600 dark:text-white text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, sit porro non facere minima recusandae commodi quisquam illo, error deserunt dolore. Nam assumenda blanditiis ullam incidunt?</p>
        <button className='bg-red-600 dark:bg-red-700 hover:bg-black  dark:hover:text-black text-ig p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>READ MORE</button>

      </div>

    </section>
    </>
  )
}

export default Heros