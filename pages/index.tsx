import React, {useState} from 'react';

// sections
import Header from 'sections/header';
import Hero from 'sections/hero';
import Benefit from 'sections/benefit';
import Feature from 'sections/feature';

// styles
import styles from "styles/landingPage.module.scss";

const Index = () : JSX.Element => {
  return (
    <>
      <div className="hidden md:block xl:block lg:block">
        <Header styles={styles} />
        <Hero styles={styles} />
        <Benefit styles={styles} />
        <Feature styles={styles} />
      </div>
    </>
  )
}

export default Index;