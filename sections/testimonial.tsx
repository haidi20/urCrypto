import React from "react";

// types
import { tSection } from "types/landingPage.type";

// images
import Testimoni1 from 'public/images/testimoni1.png'
import Testimoni2 from 'public/images/testimoni2.png'
import Testimoni3 from 'public/images/testimoni3.png'
import Testimoni4 from 'public/images/testimoni4.png'

const Testimonial : tSection = ({styles}) => {

  return (
    <>
      <section className=" flex flex-col items-center text-center">
        <h1 className="text-[48px] my-10 font-bold">
          What people are saying
        </h1>
        <div className={`flex flex-row gap-4 pb-[10vh]  `}>
          <img src={Testimoni1.src} className={`${styles["image-testimoni"]}`} alt="" />
          <img src={Testimoni2.src} className={`${styles["image-testimoni"]}`} alt="" />
          <img src={Testimoni3.src} className={`${styles["image-testimoni"]}`} alt="" />
          <img src={Testimoni4.src} className={`${styles["image-testimoni"]}`} alt="" />
        </div>
      </section>
    </>
  )
}

export default Testimonial;