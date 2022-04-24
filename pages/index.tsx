import React, {useState} from 'react';

// sections
import Header from 'sections/header';
import Hero from 'sections/hero';
import Benefit from 'sections/benefit';
import Feature from 'sections/feature';
import HowToWork from 'sections/how-to-work';
import Testimonial from 'sections/testimonial';
import CTA from 'sections/cta';

// styles
import styles from "styles/landingPage.module.scss";

const Index = () : JSX.Element => {
  return (
    <>
      <div className="hidden sm:hidden md:block xl:block lg:block">
        <Header styles={styles} />
        <Hero styles={styles} />
        <Benefit styles={styles} />
        <Feature styles={styles} />
        <HowToWork styles={styles} />
        <Testimonial styles={styles} />
        <CTA styles={styles} />
      </div>
    </>
  )
}

export default Index;