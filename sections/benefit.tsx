import React from 'react';

// images
import reviewAppMobile from 'public/images/review-app-mobile.png';

const Benefit = ({styles}: {styles: any}): JSX.Element => {

  return (
    <>
      <section className="flex flex-row w-full ">
        <div className="flex flex-col w-6/12 px-[10vw] justify-center">
          <h1 
            className={`font-semibold text-[48px] text-black ${styles["title-benefit"]}`}>
            The Most Trusted Cryptocurrency Platform
          </h1>
          <div className="flex flex-col mt-10 divide-y ">
            <div className="flex flex-row gap-6 py-6">
              <h1 className="text-[24px] text-blue-200">01</h1>
              <div className="flex flex-col gap-2 w-[25vw]">
                <h2 className="text-[24px] font-semibold">Sync between platforms</h2>
                <p>No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 py-6">
              <h1 className="text-[24px] text-blue-200">02</h1>
              <div className="flex flex-col gap-2 w-[25vw]">
                <h2 className="text-[24px] font-semibold">More focus, less clutter</h2>
                <p>No ads, just the crypto and content you love.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 py-6">
              <h1 className="text-[24px] text-blue-200">03</h1>
              <div className="flex flex-col gap-2 w-[25vw]">
                <h2 className="text-[24px] font-semibold">Security by default</h2>
                <p>Enable privacy mode and app locking to protect your data.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E8FAFE] flex flex-row w-6/12 justify-center">
          <img 
            className=""
            src={reviewAppMobile.src} 
            alt="Review App Mobile" />
        </div>
      </section>
    </>
  )
}

export default Benefit;