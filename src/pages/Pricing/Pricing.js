import React from 'react'
import s from './pricing.module.css'
export default function Pricing() {

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

  return (
    <div className={s.mainCont}>
      
      <div className={s.headingCont}>
        <img className={s.circleImg} src='/images/roundPricing.svg' alt='round'/>
        <div className={s.headingText}>Choose your edition. 
          Try it free for 7 days.
        </div>
        <img  className={s.rectangleImg} src='/images/RectanglePricing.svg' alt='rectangle'/>
      </div>
      <div className={s.pricingSubText}>Egnify plans start as low as Rs.45/- per student per month.</div>
      <div className={s.subText}>Every plan includes</div>


        <div className={s.roundBoxCont}>
          <img className={s.lineAlign} src='/images/line.svg' alt='icon'/>
          {
            planIncludesData.map((item,index)=>{
              return(
                <div key={index} className={s.iconsArrange}>
                  <div className={s.roundBox}>
                    <img src={item.icon} alt='icon'/>
                  </div>
                  <div className={s.roundBoxTest}>{item.name}</div>
                </div>
              )
            })
          }
          <img className={s.RectangleAlign} src='/images/pauseplay.svg' alt='icon'/>
        </div>
        
      <div className={s.planDetailsText}>View Plan Details</div>
       
     

      
    </div>
  )
}
