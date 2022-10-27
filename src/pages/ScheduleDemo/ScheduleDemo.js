import React from 'react'
import s from './scheduledemo.module.css'
import Educational from '../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../LandingPages/Achievement/AchievementSoFar'
import AvailableOn from '../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../components/Footer/Footer'
import FeaturedIn from '../LandingPages/FeauturedIn/FeaturedIn'
import Awards from '../LandingPages/Awards/Awards'

export default function ScheduleDemo() {


  function displayHeadText(){
    return(
      <div className={s.headTextCont}>
        <img className={s.triangleImage} src='/images/demo/triangle.svg' alt='triangle'/>
        <div className={s.headText}>Talk to our team today</div>
        <div className={s.subText}>Our team is standing by, ready to provide an in-depth product demo, answer your questions, and build a custom plan that meets your needs.</div>
        <img className={s.circleImage} src='/images/demo/circle.svg' alt='circle'/>
      </div>
      
    )
  }

  function displayContact(){
    return(
      <div className={s.contactCont}>

        <div className={s.boxCont}>
          <div className={s.imageBoxCont}>
            <img className={s.imageFit} src='/images/demo/mobile.svg' alt='mobile'/>
          </div>
          <div className={s.typeText}>Phone</div>
          <div className={s.boxSubText}>Please call us and we will be happy to assist you.</div>
          <div className={s.phoneNumbertext}>+91 99495 23849</div>
        </div>


        <div className={s.boxCont}>
          <div className={s.imageBoxCont} style={{backgroundColor: '#ebeeff'}}>
            <img className={s.imageFit} src='/images/demo/email.svg' alt='mobile'/>
          </div>
          <div className={s.typeText}>email</div>
          <div className={s.boxSubText}>Please call us and we will be happy to assist you.</div>
          <div className={s.phoneNumbertext}>support@egnify.com</div>
        </div>



        <div className={s.boxCont}>
          <div className={s.imageBoxCont}>
            <img className={s.imageFit} src='/images/demo/location.svg' alt='mobile'/>
          </div>
          <div className={s.typeText}>Location</div>
          <div className={s.boxSubAdressText}>1-2/1/24/A/1,7, Plot No 17, Opp. Bharat Petrol Bunk, JNTU Rd, Hi-Tech City
            Hyderabad, Telangana 500084</div>
          <div className={s.googleMapLinkText}>View on Google map</div>
        </div>


      </div>
    )
  }


  function freeDemoPop(){
    return(
      <div className={s.freeDemoPopMainCont}>
        <div className={s.requestdemoformContainer}>
          
          <div className={s.freeDemoHeadText}>Take A Free Demo</div>
          
          <div className={s.mainInputWrapper}>
            <div className={s.inputwrapper}>
              <input type='text' name='firstname' placeholder='First Name*'/>
              <input type='text' name='lastname' placeholder='Last Name*'/>
            </div>

            <input type='email' name='email' placeholder='Email*'/>

            <div className={s.inputwrapper}>
              <input type='text' name='phonenumber' placeholder='Phone Number**'/>
              <input type='text' name='collegename' placeholder='College/Institution Name*'/>
            </div>

            <div className={s.requestdemoDropdown}>
              <div className={s.SelectControl}>
                <div className={s.SelectPlaceholder}>
                  <div className={s.selectroleText}>Select a Role</div>
                  <div>
                    <img src='/images/demo/Icons=Chevron down.svg' alt='downArrow'/>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className={s.submitButton} >request a demo</div>
          
        </div>
      </div>
    )
  }

  return (
  <>
    <div className={s.mainCont}>
      { displayHeadText() }
      { displayContact() }
      { freeDemoPop() }
    </div>
    <Educational/>
    <AchievementSoFar/>
    <FeaturedIn selColor='#f7f7f7'/>
    <Awards/>
    <AvailableOn  selColor='#f7f7f7'/>
    <Footer/>
  </>
  )
}
