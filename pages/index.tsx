import React, {useState} from 'react';

// components
import Header from 'components/header';

// styles


const Index = () : JSX.Element => {
  const [linkImage, setLinkImage] = useState<string>("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

  return (
    <>
      <Header />
    </>
  )
}

export default Index;