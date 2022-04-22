import React from 'react';

// images
import reviewAppMobile from 'public/images/review-app-mobile.png';

const Benefit = () : JSX.Element => {

  return (
    <>
      <section className="flex flex-row w-full h-[70vh] ">
        <div className="flex flex-col w-6/12 px-[10vw] py-[8vh]">
          <h1 
            className="font-semibold text-[48px] text-black">
            The Most Trusted Cryptocurrency Platform
          </h1>
        </div>
        <div className="bg-[#E8FAFE] flex flex-row w-6/12 justify-center">
          <img 
            className="w-[60%]"
            src={reviewAppMobile.src} 
            alt="Review App Mobile" />
        </div>
      </section>
    </>
  )
}

export default Benefit;