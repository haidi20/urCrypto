import React from 'react';

// types
import { tSection } from 'types/landingPage.type';

// images
import Logo from 'public/images/logo-middle.png';

const Footer : tSection = ({styles}) => {

  return(
    <>
      <section className="flex flex-col w-full ">
        <div className="flex flex-row w-full place-content-between 
                        md:px-[10vw]">
          <div className="flex flex-col ">
            <img src={Logo.src} alt="" />
            <p>
              Take your crypto to the next level
            </p>
            <div className={`flex flex-row gap-4 mt-5 ${styles["medsos-footer"]}`}>
              <i className="fa-brands fa-facebook-f rounded-full bg-gray-600 text-white px-3 py-2"></i>
              <i className="fa-brands fa-twitter rounded-full bg-gray-600 text-white px-2 py-2"></i>
              <i className="fa-brands fa-instagram rounded-full bg-gray-600 text-white px-2 py-2"></i>
              <i className="fa-brands fa-linkedin-in rounded-full bg-gray-600 text-white px-2 py-2"></i>
              <i className="fa-brands fa-youtube rounded-full bg-gray-600 text-white px-2 py-2"></i>
            </div>
          </div>
          <div className={`flex flex-col gap-4 text-gray-500 ${styles["menus-footer"]}`}>
            <p className="text-black font-bold">Company</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Student</p>
            <p>Security</p>
            <p>Trust and Safety</p>
            <p>Newsroom</p>
            <p>Videos</p>
          </div>
          <div className={`flex flex-col gap-4 text-gray-500 ${styles["menus-footer"]}`}>
            <p className="text-black font-bold">Learn</p>
            <p>What's Trending</p>
            <p>Product News</p>
            <p>Events</p>
            <p>University</p>
            <p>Research</p>
            <p>Market Updates</p>
          </div>
          <div className={`flex flex-col gap-4 text-gray-500 ${styles["menus-footer"]}`}>
            <p className="text-black font-bold">Products</p>
            <p>Stock & Fund</p>
            <p>Cash Card</p>
            <p>Crypto</p>
            <p>Options</p>
            <p>Gold</p>
            <p>Learn Snacks</p>
          </div>
          <div className={`flex flex-col gap-4 text-gray-500 ${styles["menus-footer"]}`}>
            <p className="text-black font-bold">Support</p>
            <p>Support Center</p>
            <p>Contact Us</p>
            <p>System Status</p>
            <p>Areas of Availability</p>
          </div>
        </div>
        <div 
          className="text-center py-10 flex flex-col gap-10
                      md:px-[10vw]">
          <hr />
          <p>
            © Design by Dliya’ Zarror Nibros. All rights reserved.
          </p>
        </div>
      </section>
    </>
  )
} 

export default Footer;