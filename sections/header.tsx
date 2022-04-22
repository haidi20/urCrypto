import React from 'react';
// import Image from 'next/image';

// images
import Logo from "public/images/logo.png";

const Header = ({styles}: {styles: object}): JSX.Element => {

  return (
    <>
      <div className="bg-white w-full flex flex-row place-content-between px-[10%] py-10">
        <div className="">
          <img src={Logo.src} className=" " />
        </div>
        <div className="flex flex-row gap-10 items-center">
          <h5 className={`item-menu`}>Products</h5>
          <h5 className={`item-menu`}>Price</h5>
          <h5 className={`item-menu`}>Learn</h5>
          <h5 className={`item-menu`}>Support</h5>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="">
            Sign in
          </a>
          <button className=" border-2 border-blue-600 rounded-lg py-2 px-3 font-bold text-blue-600 
                            hover:bg-blue-600 hover:text-white">
            Get started
          </button>
        </div>
      </div>
    </>
  )
}

export default Header;