import React from 'react'
import Header from './Header'
import Footer from './Footer'

import './website.css'
import Slider from './Slider'
import Catagories from './Catagories'
import Featured from './Featured'
import TopSellingItems from './Top Selling Items'
import Deal from './Deal'
import BlogPost from './BlogPost'
import Brand from './Brand'






const Home = () => {
  return (
    <div className='overflow-hidden'>
      
    
        <Header />
         <Slider /> 
        <Catagories />
        <Featured/>
        <TopSellingItems/>
        <Deal/> 
       <BlogPost/> 
  <Brand/>

        <Footer/>
        
  
    </div>
  )
}

export default Home
