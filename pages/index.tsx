import React, {useState} from 'react';

// components
import Header from 'sections/header';
import Hero from 'sections/hero';

// styles


const Index = () : JSX.Element => {
  return (
    <>
      <div className="hidden md:block xl:block lg:block">
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default Index;