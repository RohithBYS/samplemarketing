import React from 'react'
import Products from '../../../components/Products/Products'
import s from './connect.module.css'
import ModuleImage from '../../../components/ModuleImage/ModuleImage'
import ProductsImage from '../Components/ProductsImageData/ProductsImage'
import Educational from '../../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../../LandingPages/Achievement/AchievementSoFar'
import AvailableOn from '../../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../../components/Footer/Footer'

export default function Connect()  {

  const data =[
    {
      modImage: '/images/Connect/schedule.svg',
      modName: 'Schedule',
      modText: 'The smartest way to view classes, events, activities and get more done fast. Eliminate the hassle of back-and-forth messages about the schedule and activities for the day. Activities take time, but scheduling and communicating shouldn’t.',
      bTopColor: '#F2E5FE',
      bBottomColor: '#B7F5E6',
    },
    {
      modImage: '/images/Connect/messenger.svg',
      modName: 'Messenger',
      modText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend et elit enim malesuada sagittis, a elit facilisis. Diam ut ut felis consectetur molestie sed blandit nisl.',
      bTopColor: '#C8DFFB',
      bBottomColor: '#FAEBD4',
    },
    {
      modImage: '/images/Connect/notifications.svg',
      modName: 'Notifications',
      modText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vel quam sit turpis fames nibh tortor cursus. Sed massa vulputate faucibus id eget pellentesque.',
      bTopColor: '#B9F7E7',
      bBottomColor: '#FFE0E8',
    },
  ]

  function displayLiveClass(){
    return(
    <>
      {
        data.map((item,index)=>{
          return(
            <div className={`${index %2 != 0 ?  s.liveClassMainCont2 : s.liveClassMainCont }`} key={index} >
              <div className={`${s.mainTextBox} ${index % 2 != 0 ?s.textboxRow: s.textboxReverse}`}>
                <div className={s.contentBox}>
                  <div className={s.dataSectionLive}>
                    <div className={s.moduleIcon}>
                      <ModuleImage
                        moduleImage= {item.modImage}
                      />
                    </div>
                    <div className={s.liveMainText}>{item.modName}</div>
                  </div>
        
                  <div className={s.TextBox}>
                    <div className={s.liveSubText}>{item.modText}</div>
                  </div>
        
                </div>
              </div>


              <div className={s.imageCont}>
                <ProductsImage
                  dataImage=''
                  topBaloonColor={item.bTopColor}
                  bottomBaloonColor={item.bBottomColor}
                  topAdjust={s.topballonAdjust}
                  bottomAdjust={s.bottomballonAdjust}
                  customWidth= {s.customImageStyling}
                />
              </div>


            </div>
          )
        })
      }
      
    </>
    )
  }
  


  return (
  <>
    <div className={s.mainCont}>
      <Products 
        name='Connect'
        backgColor=' #e0ffe0'
        moduleImage ='/images/Connect/Group 685.svg'
        moduleColor = '#0c0'
        mainText = 'Simplify communication with students, parents, teachers and make time for what’s important.'
        subText='A complete unified communications platform that enables new ways teaching, learning, and working across educational environments.'
        WebbackImage= '/images/Connect/ConnectWeb.webp'
        mobileBackImage= '/images/Connect/ConnectWeb.webp'
        mainTextWidth= {s.MainTextWidth}
        subTextWidth = { s.subTextWidth}
        mobileimageWidthHeight = { s.MobileImageWidth}
      />
      <img className={s.UnderlineStyle} src='/images/underlineStyle.svg' alt='underline'/>
      <img className={s.WebImage} src='/images/Connect/ConnectWeb.webp' alt='icon'/>
    </div>
    <Educational/>
    <AchievementSoFar/>
    { displayLiveClass() }
    <AvailableOn/>
    <Footer/>
  </>
  )
}



