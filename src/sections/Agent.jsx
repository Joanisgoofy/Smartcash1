import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from '../assets/Logo.png'
import '../App.css'
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const Agent = () => {
    return (
        <>
           <header>
                  <div className='logo'>
                    <h1>Smart-OT</h1>
                    <img src={Logo} alt="Smart-OT Logo" width="100" />
                  </div>
                  <div className='nav-links'>
                    <Link to='/home'>Home</Link>
                    <Link to="/services"> Services</Link>
                    <Link to="/help">Help & Support</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/agent">Become an Agent</Link>
                  </div>
                  
          
          
                </header>
            
            {/* Agent Registration Section */}
            <section className="w-full max-w-6xl mx-auto px-6 lg:px-20 py-16 grid lg:grid-cols-2 gap-10">
                {/* Registration Form */}
                <form className="flex flex-col gap-6 bg-white p-6 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800">Become an Agent</h1>
                    
                    <div>
                        <Label htmlFor="fullname" value="Full Name" />
                        <TextInput id="fullname" type="text" required shadow />
                    </div>
                    <div>
                        <Label htmlFor="mobile" value="Mobile Number" />
                        <TextInput id="mobile" type="tel" required shadow />
                    </div>
                    <div>
                        <Label htmlFor="email" value="Email" />
                        <TextInput id="email" type="email" required shadow />
                    </div>
                    <div>
                        <Label htmlFor="nin" value="NIN" />
                        <TextInput id="nin" type="text" required shadow />
                    </div>
                    <div>
                        <Label htmlFor="bvn" value="BVN" />
                        <TextInput id="bvn" type="text" required shadow />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree">
                            I agree with the <Link to="#" className="text-blue-600 hover:underline">terms and conditions</Link>
                        </Label>
                    </div>
                    <Button type="submit" gradientDuoTone="cyanToBlue">Register Now</Button>
                </form>

                {/* Image / Info Section */}
                <div className="flex flex-col justify-center items-center text-center">
                    <img src={Logo} alt="Agent Registration" className="w-40 mb-6" />
                    <p className="text-gray-600 text-lg">
                        Join Smart-OT as an agent and enjoy seamless transactions, secure payments, and a growing community of trusted financial partners.
                    </p>
                </div>
            </section>
                 {/* Footer */}
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
          <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
          <Footer.Link href="#" className="text-gray-400 hover:text-white">Careers</Footer.Link>
          <Footer.Link href="#" className="text-gray-400 hover:text-white">Newsroom</Footer.Link>
        </Footer.LinkGroup>
      </div>
      
      <div>
        <Footer.Title title="Support" className="text-white" />
        <Footer.LinkGroup col className="mt-4">
          <Link to="/help" className="text-gray-400 hover:text-white">Help & Support</Link>
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

export default Agent