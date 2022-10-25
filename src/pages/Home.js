import React, { Component } from 'react'
import FreeTrial from './LandingPages/FreeTrial/FreeTrial'
import Educational from './LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from './LandingPages/Achievement/AchievementSoFar' 
import OurModules from './LandingPages/OurModules/OurModules'
import OnlineTests from './LandingPages/OnlineTests/OnlineTests'
import ClientFeedbacks from './LandingPages/ClientFeedbacks/ClientFeedbacks'
import FeaturedIn from './LandingPages/FeauturedIn/FeaturedIn'
import Awards from './LandingPages/Awards/Awards'
import AvailableOn from './LandingPages/AvailableOn/AvailableOn'
import Footer from '../components/Footer/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>   
        
        <FreeTrial/>
        <Educational/>
        <AchievementSoFar/>
        <OurModules/>
        <OnlineTests/>
        <ClientFeedbacks/>  
        <FeaturedIn/>
        <Awards  selColor= '#f7f7f7'/>
        <AvailableOn/>
        <Footer selColor = '#fff'/>

          {/* <FreeTrial/>
              <Educational/>
              <AchievementSoFar/>
              <OurModules/>
              <OnlineTests/>
              <ClientFeedbacks/>
              <FeaturedIn/>
              <Awards/>
              <AvailableOn/> */}
          
      </div>
    )
  }
}
