import React from 'react';
import { styles } from 'types/landingPage.type';

// images
import bitcoinPrice from 'public/images/bitcoin-price.png'
import verifyYourIdentity from 'public/images/verify-your-identity.png'
import portfolioBalance from 'public/images/portfolio-balance.png'

const Feature = ({styles} : any): JSX.Element => {

  return (
    <>
      <section className="flex flex-col gap-[64px] py-[96px] px-[120px] items-center ">
        <div className=" flex flex-row h-[600px] w-full ">
          <div className="w-6/12 flex justify-center">
            <img src={portfolioBalance.src} alt="" />
          </div>
          <div className=" flex flex-col justify-center pl-[111px] pr-8 w-6/12 gap-6">
            <h1 className={`text-[48px] font-bold ${styles["title-feature"]} `}>Create portfolio today</h1>
            <p>
              Buy and sell popular digital currencies, keep track of them in the one place. 
              Has a variety of features that make it the best place to start trading
            </p>
          </div>
        </div>
        <div className=" flex flex-row h-[600px] w-full ">
          <div className=" flex flex-col justify-center pl-[111px] pr-8 w-6/12 gap-6">
            <h1 className={`text-[48px] font-bold ${styles["title-feature"]} `}>
              Lightning-Fast Crypto Trading
            </h1>
            <p>
              The Exchange supports USD, EUR, and GBP. 
              Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
            </p>
          </div>
          <div className="w-6/12 flex justify-center">
            <img src={bitcoinPrice.src} alt="" />
          </div>
        </div>
        <div className=" flex flex-row h-[600px] w-full ">
          <div className="w-6/12 flex justify-center">
            <img src={verifyYourIdentity.src} alt="" />
          </div>
          <div className=" flex flex-col justify-center pl-[111px] pr-8 w-6/12 gap-6">
            <h1 className={`text-[48px] font-bold ${styles["title-feature"]} `}>Security From Day One</h1>
            <p>
              Safety, security and compliance. 
              Buy and sell popular digital currencies, keep track of them in the one place.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature;