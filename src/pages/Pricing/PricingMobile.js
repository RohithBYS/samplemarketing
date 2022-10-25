import React from 'react'
import s from './pricingmobile.module.css'
import Educational from '../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../LandingPages/Achievement/AchievementSoFar'
import FeaturedIn from '../LandingPages/FeauturedIn/FeaturedIn'
import Awards from '../LandingPages/Awards/Awards'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { PRICING_DATA
 } from './PricingData'
export default function PricingMobile() {

  const planIncludesData =[
    {
      name: 'Live Classes',
      icon: '/images/Live.svg'
    },
    {
      name: 'Online Tests',
      icon: '/images/Tests.svg'
    },
    {
      name: 'Assignments',
      icon: '/images/Assignments.svg'
    },
    {
      name: 'Doubts',
      icon: '/images/Doubts.svg'
    },
    {
      name: 'Connect',
      icon: '/images/InActive_Connect.svg'
    },
  ]

  

  const [annualPlans, setAnnualPlans] = useState(true)

  function webCard (){
    return(
      <div className={s.priceCardWebCont}>
        <div className="flexSideArrange g-6 mb-52">
          <div>
            <div className={s.save15Text}>(Save 15%)</div>
            <div className={s.planTypeText}>Annual Plans</div>
          </div>
        
          <div className={`${annualPlans ? s.onOffButton : s.onOffButton2}`}
            onClick={() => setAnnualPlans(!annualPlans)}>
            <div className={`${s.onOffCircleAnnual} ${annualPlans ?  s.displayShow : ''}`} ></div>
            <div className={`${s.onOffCircleMonthly} ${annualPlans ? '' : s.displayShow}`}></div>
          </div>

          <div className={s.planTypeText}>Monthly Plans</div>
        </div>
      {/* card */}
      <div className={s.flexCOL}>   
      {
        PRICING_DATA.map((item,index)=>{
          return(
            <div key={index}>
            <div className={s.priceCardWebArrange}>
              <div className={`${s.priceCardWeb}`}>
                <img className={`${s.pricingCardImage} mt-5`} src={item.icon} alt='icon'/>
                <div className={s.pricardMainText+' '+s.mt24}>{item.title}</div>
                <div className={`${s.pricingMobileSubText} mt-3`}>Upto {item.noofstudents} students</div>

                {
                  // for Annual 
                  annualPlans && 
                  <div>
                    <div className={`${s.pricingMainText} mt-5`}>&#8377;{item.annualprice}/-</div>
                    <div className={`${s.perStudentTextWeb} mt-5`}>Per Student</div>
                    <div className={s.rupeeWebText}>&#8377;45/-</div>
                    <div className={s.perStudentTextWeb}>Per Month</div>
                  </div>
                }
                {
                 // for monthly
                  annualPlans === false &&
                  <div>
                    <div className={`${s.pricingMainText} mt-5`}>&#8377;{item.monthlyprice}/-</div>
                    <div className={`${s.perStudentTextWeb} mt-5`}>switch to annual pack to save 15%</div>
                    <div className={s.perStudentTextWeb+' '+s.mt24+' '+s.textUnderline}>Contact Us For A Quote</div>
                  </div>
                 }
        
                <button className={s.buyButton}>Buy</button>
              </div>
            </div>
            </div>
          )
        })
      }

      </div>
      <div className ={s.enterpriseWebCard}>
        <div className={s.enterpriseMainText}>Enterprise</div>
        <div className={s.enterpriseSubText}>For institutes with more than 1000 students</div>
        <button className={s.priceButtonMob}>Contact us</button>
      </div>
    



      {/* <div className={`${s.priceCardWeb}`}>
        <img className={`${s.pricingCardImage} mt-5`} src='/images/card/starter.svg' alt='icon'/>
        <div className={s.pricardMainText+' '+s.mt24}>Starter</div>
        <div className={`${s.pricingMobileSubText} mt-3`}>Upto 100 students</div>
        {
          // for Annual 
          annualPlans && 
          <div>
            <div className={`${s.pricingMainText} mt-5`}>&#8377;50,000/-</div>
            <div className={`${s.perStudentTextWeb} mt-5`}>Per Student</div>
            <div className={s.rupeeWebText}>&#8377;45/-</div>
            <div className={s.perStudentTextWeb}>Per Month</div>
          </div>
        }
        {
          // for monthly
          annualPlans === false &&
          <div>
            <div className={`${s.pricingMainText} mt-5`}>&#8377;50,000/-</div>
            <div className={`${s.perStudentTextWeb} mt-5`}>switch to annual pack to save 15%</div>
            <div className={s.perStudentTextWeb+' '+s.mt24+' '+s.textUnderline}>Contact Us For A Quote</div>
          </div>
        }
        
        <button className={s.buyButton}>Buy</button>
      </div> */}
      
    </div>
    )
  }

  function mobileCard (){
    // console.log(PRICING_DATA[0].title)
    return(
      <div>
        {/* Mobile version Price Card */}
        <div className={s.priceCardMobCont}>
          <div className="flexSideArrange">
            <div className={`${annualPlans ? s.pricingCardMobileButtonsSelected : `${s.pricingCardMobileButtonsDeSelected+' '+s.leftButton}` }`}
              onClick={() => setAnnualPlans(!annualPlans)}
            >
              Annual Plans
            </div>
            <div className={`${annualPlans ? `${s.pricingCardMobileButtonsDeSelected+' '+s.rightButton}` : s.pricingCardMobileButtonsSelected  }`}
               onClick={() => setAnnualPlans(!annualPlans)}
            >
              Monthly Plans
            </div>
          </div>
         
          <div className={s.priceCardMobileArrange}>
            {
              PRICING_DATA.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={s.priceCardMobile}>
                      <div className={s.pricardMainText+' '+s.mt24}>{item.title}</div>
                      <div className={`${s.pricingMobileSubText} mt-3`}>Upto {item.noofstudents} students</div>
                      {
                        // FOR ANNUAL PLANS
                        annualPlans && 
                        <div className={s.dataText}>
                          <div className={s.perStudentText+' '+s.mt24}>Per Student  
                            <span className={s.rupeeMobText}>&#8377;{item.pspm}/- </span> per month 
                          </div>
                          <button className={s.priceButtonMob+' '+s.mt24}>&#8377;{item.annualprice}/-</button>
                          </div>
                      }

                      {
                        // FOR MONTHLY PLANS
                        annualPlans === false && 
                        <div className={s.dataText}>
                          <div className={s.perStudentText+' '+s.mt24}>Switch to annual plan to save 15%</div>
                          <button className={s.priceButtonMob+' '+s.mt24}>&#8377;{item.monthlyprice}/-</button>
                        </div>
                      }  
                    </div>
                  </div>
                )
              })
            }



            
            <div className={s.priceCardMobile}>
              <div className={s.pricardMainText+' '+s.mt24}>Enterprise</div>
              <div className={`${s.enterpriseMobileSubText} mt-28`}>For institutes with more than 1000 students</div>
              
               <button className={`${s.priceButtonMob} mt-28`}>Contact us</button>
            </div>
          </div>

          
        </div>

      </div>
    )
  }

  return (
    <>
    <div>
      <div className={s.mainCont}>

        <div className={s.headingText}>Choose your edition. 
            Try it free for 7 days.
          </div>

          <div className={s.smallText}>Egnify plans start as low as Rs.45/- 
            per student per month.</div>

          <div className={s.subText+' '+s.planIncludesText}>Every plan includes</div>

          <div className={s.roundBoxArrange}>
          {
              planIncludesData.map((item,index)=>{
                return(
                  <div key={index} className={s.roundBox}>
                    <div className={s.roundBoxImage}>
                      <img  className={s.moduleImage} src={item.icon} alt='icon'/>
                    </div>
                    <div className={s.roundBoxText}>{item.name}</div>
                  </div>
                )
              })
            }
          </div>
          
          <div className={s.planDetailsText}
            onClick={()=>  window.location.href='pricingmobile/view'}
          >
            View Plan Details</div>
         
      </div>
      {webCard()}
      {mobileCard()}
       
    </div>
    <Educational/>
    <AchievementSoFar/>
    <FeaturedIn selColor= '#f7f7f7'/>
    <Awards selColor= '#fff'/>
    <Footer selColor= '#f7f7f7'/>
    </>
  )
}
