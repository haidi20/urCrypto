import React from 'react';
// import Image from 'next/image';

// images
import Logo from "public/images/logo.png";

const Header = (): JSX.Element => {

  return (
    <>
      <div className="bg-white w-full flex flex-row place-content-between px-[10%] py-10">
        <div className="">
          <img src={Logo.src} className=" " />
        </div>
        <div className="flex flex-row gap-5">
          <h5>Products</h5>
          <h5>Price</h5>
          <h5>Learn</h5>
          <h5>Support</h5>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="">
            Sign in
          </a>
          <button className=" border-2 border-blue-400 rounded-lg py-2 px-3 font-bold text-blue-500 
                            hover:bg-blue-400 hover:text-white">
            Get started
          </button>
        </div>
      </div>
    </>
  )
}

export default Header;