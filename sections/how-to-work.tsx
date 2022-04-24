import React from 'react';

// images
import HowToWorkOne from "public/images/how-to-work1.png";
import HowToWorkTwo from "public/images/how-to-work2.png";
import HowToWorkThree from "public/images/how-to-work3.png";

type tCard = {
  image: string,
  title: string,
  desc: string,
}

const HowToWork = ({styles}: {styles: any}): JSX.Element => {

  const Card = ({image, title, desc}: tCard): JSX.Element => (
    <div
      className="bg-white flex flex-col justify-center items-center py-[40px] px-4 mt-[-100px]
                  border-2 border-gray-100 rounded-2xl w-3/12">
      <img
        className="w-[150px]" 
        src={image} 
        alt="" />
      <h1
        className="py-6 font-bold text-[24px]">
        {title}
      </h1>
      <p
        className='text-center'>
        {desc}
      </p>
    </div>
  )

  return (
    <>
      <section 
        className="flex flex-col justify-center ">
        <div 
          className=" flex flex-col items-center text-center px-[30vw] pt-[96px] pb-[169px]">
          <h1 
            className={`text-[48px] font-bold title-howToWork ${styles["title-howToWork"]} `}>
            Get Started in Just Few Minute
          </h1>
          <p
            className="text-[18px] mt-8">
            Has a variety of features that make it the best place to start trading
          </p>
        </div>
        <div
          className="bg-[#F8F8FC] flex-1 flex flex-row gap-[24px] justify-center pb-[97px]">
          <Card 
            image={HowToWorkOne.src}
            title="Sign Up"
            desc="Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends" />
          <Card 
            image={HowToWorkTwo.src}
            title="Fund"
            desc="Choose you preferred payment method such as bank transfer or credit card to top up your wallet " />
          <Card 
            image={HowToWorkThree.src}
            title="Buy Crypto"
            desc="Sign up for free wallet on web, IOS or Android and follow our easy process to set up your profile" />
        </div>
      </section>
    </>
  )
}

export default HowToWork;