import React, {useState} from 'react';

// types
import { tLandingPage } from 'types/landingPage.type';

// sections
import CTA from 'sections/cta';
import Hero from 'sections/hero';
import Header from 'sections/header';
import Benefit from 'sections/benefit';
import Feature from 'sections/feature';
import Footer from 'sections/footer';
import HowToWork from 'sections/how-to-work';
import Testimonial from 'sections/testimonial';

// styles
import styles from "styles/landingPage.module.scss";

const Index: tLandingPage = () => {
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
        <Footer styles={styles} />
      </div>
    </>
  )
}

export default Index;