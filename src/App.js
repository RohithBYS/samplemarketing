import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import s from './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Pricing from './pages/Pricing/Pricing';
import PricingMobile from "./pages/Pricing/PricingMobile";
import ViewPricing from "./pages/VIewPricing/ViewPricing";
import AboutUs from "./pages/Company/AboutUs/AboutUs";
import Press from "./pages/Company/Press/Press";
import Culture from "./pages/Company/Culture/Culture";
import Customers from "./pages/Customers/Customers";
import OnlineTests from "./pages/Products/Online Tests/OnlineTests";
import LiveClasses from "./pages/Products/LiveClasses/LiveClasses";
import Doubts from "./pages/Products/Doubts/Doubts";
import Assignments from "./pages/Products/Assignments/Assignments";
import Connect from "./pages/Products/Connect/Connect";
// import { useState } from 'react'

function App() {
  // const [showPricing, setShowPricing] = useState(false)
  return (
    <div className={s.app}>
    
         <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/pricingmobile' element={<PricingMobile/>} />
            <Route path='pricingmobile/view' element={<ViewPricing/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/press' element={<Press/>} />
            <Route path='/culture' element={<Culture/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/onlinetests' element={<OnlineTests/>} />
            <Route path='/liveclasses' element={<LiveClasses/>} />
            <Route path='/doubts' element={<Doubts/>} />
            <Route path='/assignments' element={<Assignments/>} />
            <Route path='/connect' element={<Connect/>} />
        </Routes> 
        {/* <Footer/> */}
      
    </div>
  );
}

export default App;
