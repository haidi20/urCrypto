import React from 'react';

// image
import bg from 'public/images/bg-cta.png';
import btc from 'public/images/btc.png';
import eth from 'public/images/eth.png';
import luna from 'public/images/luna.png';

const CTA = ({styles}: {styles: any}): JSX.Element => {

  const style = {
    bgCta: {
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }

  return (
    <>
      <section
        id="cta"
        className="flex justify-center py-[96px] px-[10vw]  ">
        <div 
          className={`w-screen flex flex-row  
                      md:py-[70px] md:px-[104px] 
                      lg:py-[95px] `} 
          style={style.bgCta} >
          <div className="flex flex-col w-[30vw]">
            <h1 className={` text-[40px] text-white ${styles["title-cta"]} `}>
              Join a new generation of investors
            </h1>
            <button className="bg-white w-[169px] mt-[32px] rounded-lg py-4
                                 hover:bg-gray-200 ">
              Get started
            </button>
          </div>
          <div>
            <img 
              className={`absolute 
                          md:w-[201px] md:h-[201px] md:left-[960px] md:top-[6200px]
                          lg:w-[240px] lg:h-[240px] lg:left-[1300px] lg:top-[6170px]`} 
              src={btc.src} 
              alt="" />
            <img 
              className={`absolute 
                          md:w-[150px] md:h-[150px] md:left-[1100px] md:top-[6390px]
                          lg:w-[160px] lg:h-[160px] lg:left-[1500px] lg:top-[6380px]`} 
              src={eth.src} 
              alt="" />
            <img 
              className={`absolute 
                          md:w-[134px] md:h-[134px] md:left-[950px] md:top-[6440px]
                          lg:w-[144px] lg:h-[144px] lg:left-[1280px] lg:top-[6430px]`} 
              src={luna.src} 
              alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA;