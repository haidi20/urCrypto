import React, {useState} from 'react';

// components
import Header from 'sections/header';
import Hero from 'sections/hero';
import Benefit from 'sections/benefit';

// styles
// styles
import styles from "styles/landingPage.module.scss";

const Index = () : JSX.Element => {
  return (
    <>
      <div className="hidden md:block xl:block lg:block">
        <Header styles={styles} />
        <Hero styles={styles} />
        <Benefit styles={styles} />
      </div>
    </>
  )
}

export default Index;