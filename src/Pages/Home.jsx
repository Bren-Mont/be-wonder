import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Cards from '../components/Card/Cards'
import Testimonials from '../components/Testimonials/Testimonials'
import './home.css'
import FAQS from '../components/FAQ/FAQS'
import Footer from '../components/Footer/Footer'
import ResponsiveAppBar from '../components/Navbar/Navbar-2'


const home = () => {
  return (
    <div>
    <ResponsiveAppBar/>
   <Banner />
   <Cards/>
   

   <FAQS></FAQS>

   <Testimonials/>
   <Footer/>
   </div>
  )
}

export default home