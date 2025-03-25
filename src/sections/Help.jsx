import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const HelpAndSupport = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqData = [
    {
      id: "faq1",
      question: "What is smart-OT?",
      answer:
        "smart-OT is a smart cash website that allows you to manage your finances, send and receive money, pay bills, and access loans—all in one place.",
    },
    {
      id: "faq2",
      question: "How do I create an account?",
      answer:
        "To create an account, download the smart-OT app from the App Store or Google Play Store, and follow the registration steps. You'll need a valid phone number and email address.",
    },
    {
      id: "faq3",
      question: "Is smart-OT secure?",
      answer:
        "Yes, smart-OT uses advanced encryption and multi-factor authentication to ensure your data and transactions are secure.",
    },
    {
      id: "faq4",
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login screen, click on 'Forgot Password,' and follow the instructions sent to your registered email or phone number.",
    },
    {
      id: "faq5",
      question: "What fees does smart-OT charge?",
      answer:
        "smart-OT charges minimal fees for transactions and withdrawals. You can view the full fee structure in the app under 'Settings > Fees.'",
    },
  ];

  return (
    <div id="help" className="font-sans">
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
      {/* Help and Support Section */}
      <section className="mb-8">
        <div className="mb-20">
          <h3 className="text-center text-2xl text-red-600 font-bold">
            HELP AND SUPPORT
          </h3>
        </div>

        <div className="ml-20 mb-6">
          <h3 className="text-lg text-red-600 font-bold">CONTACT US</h3>
        </div>

        <div className="ml-20">
          Call for support - 08101014685
          <br />
          Email for support - customerservice@smart-OT.ng
          <br />
          Fraud Reports - frauddesk@Smart-OT.ng
          <br />
          To block your wallet.
          <br />
          Using your mobile number: Dial *939*911# then input your wallet PIN.
          <br />
          Using other mobile numbers: Dial *939*911* Customer Phone Number# then
          input PIN linked to the wallet you want to block.
          <br />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <main>
          <h3 className="text-lg text-red-600 font-bold ml-20 mb-8">FAQ</h3>

          <div className="ml-20 mr-20">
            {faqData.map((faq) => (
              <div key={faq.id} className="mb-8">
                <div className="question-container">
                  <button
                    className="w-full text-left focus:outline-none flex justify-between items-center"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        openAccordion === faq.id ? "text-red-600" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border ${
                        openAccordion === faq.id
                          ? "border-red-600"
                          : "border-gray-900"
                      } flex items-center justify-center`}
                    >
                      <span
                        className={`${
                          openAccordion === faq.id ? "text-red-600" : "text-gray-900"
                        }`}
                      >
                        {openAccordion === faq.id ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`accordion-content pl-2 pr-10 mt-2 overflow-hidden transition-all ${
                      openAccordion === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
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
    </div>
  );
};

export default HelpAndSupport;