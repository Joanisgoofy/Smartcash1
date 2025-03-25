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
                  <div className='cta'>
                    <Link to="/login">
                      <button>Login / Signup</button>
                    </Link>
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
                          <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
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
    )
}

export default Agent