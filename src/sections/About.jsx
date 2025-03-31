import { useState } from "react";
import Logo from '../assets/Logo.png';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("At A Glance");

  // Tab content data
  const tabContent = {
    "At A Glance": (
      <div className="mt-5">
        <p className="text-lg leading-relaxed">
          SMART-OT was established in 2025 following the approval of the Central Bank 
          of Nigeria to actualize its financial inclusion goal for every Nigerian, 
          especially the unbanked and underbanked. Smart-OT enables Person-to-Person 
          payment service (P2P) that allows individuals to send and receive money from 
          anyone around the globe through their mobile phones or at the nearest merchant 
          shop outlet.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The primary purpose of Smart-OT is to deepen financial inclusion,
          appropriating high-volume and low-value transactions in a safe,
          technology-driven environment.
        </p>
      </div>
    ),
    "Our Values": (
      <div className="mt-5">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              content: "We constantly seek creative solutions to financial challenges."
            },
            {
              title: "Integrity",
              content: "We conduct our business with honesty and transparency."
            },
            {
              title: "Inclusion",
              content: "We believe everyone deserves access to financial services."
            },
            {
              title: "Customer Focus",
              content: "Our customers are at the heart of everything we do."
            },
            {
              title: "Reliability",
              content: "We deliver consistent, dependable services."
            },
            {
              title: "Community",
              content: "We're committed to the communities we serve."
            }
          ].map((value, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="font-bold text-xl text-red-600 mb-2">{value.title}</h4>
              <p>{value.content}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    "Board of Directors": (
      <div className="mt-5">
        <p className="text-lg mb-6">
          Our experienced board of directors brings diverse expertise in finance, 
          technology, and business leadership to guide SMART-OT's vision.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Adeola Johnson",
              role: "Chairman",
              bio: "Former Central Bank executive with 25+ years in financial services."
            },
            {
              name: "Emeka Okoro",
              role: "CEO",
              bio: "Fintech pioneer with experience across three continents."
            },
            {
              name: "Amina Mohammed",
              role: "Director",
              bio: "Technology expert specializing in secure payment systems."
            },
            {
              name: "Prof. Chinedu Obi",
              role: "Director",
              bio: "Renowned economist and financial inclusion advocate."
            },
            {
              name: "Folake Adebayo",
              role: "Director",
              bio: "Marketing leader with expertise in rural financial services."
            },
            {
              name: "Idris Bello",
              role: "Director",
              bio: "Operations specialist with extensive banking experience."
            }
          ].map((member, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl">{member.name}</h4>
              <p className="text-red-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div id="about" className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex flex-wrap items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-4 ml-8"> {/* Added ml-8 for right push */}
          <img src={Logo} alt="Smart-OT Logo" className="h-12 w-auto mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Smart-OT</h1>
        </div>
        <nav className="flex flex-wrap items-center gap-6 mt-4 md:mt-0">
          <Link to='/home' className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/help" className="text-gray-700 hover:text-blue-600 transition-colors">Help & Support</Link>
          <Link to="/about" className="text-red-600 font-medium">About Us</Link>
          <Link to="/agent" className="text-gray-700 hover:text-blue-600 transition-colors">
            Become an Agent
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">ABOUT US</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <p className="text-lg leading-relaxed">
                <span className="font-bold">SMART-OT</span> is a leading and
                innovative Payment Service Bank with an overarching vision of
                bridging the financial divide by providing rural and urban
                Nigerians secured and reliable banking services as well as
                supporting the Central Bank of Nigeria's (CBN) drive to ensure
                financial inclusion for every Nigerian.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                With its corporate headquarters in Lagos, Nigeria, Smart-OT's 
                overarching objective is to ensure financial inclusion for everyone 
                including persons in the furthest and remotest parts of Nigeria.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src={Logo} 
                alt="about Smart-OT" 
                className="rounded-2xl w-full max-w-xs shadow-lg" 
              />
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {["At A Glance", "Our Values", "Board of Directors"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 font-medium text-lg border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <section>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">{activeTab}</h3>
          {tabContent[activeTab]}
        </section>
      </main>

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
    </div>
  );
};

export default AboutUs;