import React, {useState} from 'react';

// components
import Header from 'sections/header';
import Hero from 'sections/hero';
import Benefit from 'sections/benefit';

// styles


const Index = () : JSX.Element => {
  return (
    <>
      <div className="hidden md:block xl:block lg:block">
        <Header />
        <Hero />
        <Benefit />
      </div>
    </>
  )
}

export default Index;