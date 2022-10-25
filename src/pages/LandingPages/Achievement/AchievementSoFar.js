import React from 'react'
import s from './achievementsofar.module.css'
export default function AchievementSoFar() {

  const achievementData = [
    {
      iconcolor: '#fff3eb',
      icon: '/images/academics.svg',
      maintext: '150+',
      textcolor: '#f60',
      subtext: 'Clients',
      boxshadow: '0 4px 32px 0 rgba(255, 102, 0, 0.2)',
    },
    {
      iconcolor: '#f7effe',
      icon: '/images/students.svg',
      maintext: '3 Lakh+',
      textcolor: 'rgba(37, 40, 43, 0.6)',
      subtext: 'Students',
      boxshadow: '0 4px 32px 0 rgba(140, 0, 254, 0.2)',
    },
    {
      iconcolor: '#ffebf0',
      icon: '/images/testattempts.svg',
      maintext: '3 Million+',
      textcolor: '#f36',
      subtext: 'Test Attempts',
      boxshadow: '0 4px 32px 0 rgba(0, 115, 255, 0.24)',
    },
    {
      iconcolor: '#ebffef',
      icon: '/images/questionSolved.svg',
      maintext: '20 Million+',
      textcolor: '#00ac26',
      subtext: 'Questions Solved',
      boxshadow: '0 4px 32px 0 rgba(0, 172, 38, 0.2)',
    }
  ]

  function webCards(){
    return(
      <div className={s.achievementArrange}>
        {
          achievementData.map((item,index)=>{
            return(
              <div className={s.achievementBox} key={index} style={{boxShadow : item.boxshadow}}>
                <div className={s.rounBox} style={{backgroundColor: item.iconcolor}}>
                  <img src={item.icon} alt='icon'/>
                </div>
                <div>
                  <div className={s.achievmentMainText} style={{color: item.textcolor}}>{item.maintext}</div>
                  <div className={`${s.achievmentMainSubText} mt-3`}>{item.subtext}</div>
                </div> 
              </div>
            )
          })
        }

      </div>
    )
  }

  // function mobileCard(){
  //   return(
  //     <div className={s.mobileCardMainCont}>
        
  //       <div className={s.mobileCard1}>
  //         <div className={s.mblCardInsideText}>
  //         Trending 
  //         <span className={s.mobileCardImpText}>#1 in Top Education Apps</span> in Google Playstore
  //         </div>
  //       </div>

  //     </div>
  //   )
  // }

  return (
    <div className={s.mainCont}>

      <div className={s.mainText}>What we have achieved so far</div>
      { webCards()}
      {/* {mobileCard()} */}
    </div>
  )
}
