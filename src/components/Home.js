import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Faqs from './Faqs';
import Header from './Header';

function Home() {
    return (
        <>
        <Header />
        {
        jumboData.map((item) =>
        {
          return <Jumbotron 
                  key={item.id}
                  id={item.id}
                  direction={item.direction}
                  title={item.title}
                  subTitle={item.subTitle}
                  image={item.image}
                  alt={item.alt}
                  />        
        })
      }
      <Faqs />
      <Footer />
        </>
    )
}

export default Home;
