import React from 'react'
import Products from '../../../components/Products/Products'
import {DOUBTS_DATA } from './DoubtsData'
import s from './doubts.module.css'
import DataSection from '../Components/DataSection/DataSection'
import ProductsImage from '../Components/ProductsImageData/ProductsImage'
import Educational from '../../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../../LandingPages/Achievement/AchievementSoFar'
import AvailableOn from '../../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../../components/Footer/Footer'




// step 3 Data
function displayData(){
  return(
    <>
    {/* <div>{DOUBTS_DATA[0].mainHeading}</div>
    <div>ROhtih</div> */}
    {
      DOUBTS_DATA.map((item,index)=>{
        return(
          <div className={s.dataMainCont} key={index}>
            <div className={`${index % 2 != 0 ?s.imageDataArrange: s.imageDataArrange2  }`}>
              <div className={`${s.mainTextBox} ${index % 2 != 0 ?s.textboxRow: s.textboxReverse}`}>
                <DataSection
                  mainText={item.mainHeading}
                  subText={item.subtext}
                />
              </div>
              <div className={s.imageCont}>
                
                <ProductsImage
                  dataImage={item.image}
                  topBaloonColor={item.bTopColor}
                  bottomBaloonColor={item.bBottomColor}
                />
              </div>
            </div>
          </div>
        )
      })
    }
   
    </>
  )
 }


export default function Doubts() {
  return (
    <>
    <div className={s.mainCont}>
      <div className={s.openBannerCont}>
       <Products 
        name='Doubts'
        backgColor='#d6ffed'
        moduleImage ='/images/Doubts/DoubtsIcon.svg'
        moduleColor = '#095'
        mainText = 'Don’t let your Student’s doubts pile up, clear them instantly'
        subText='Solve your students doubts in the most interactive and personalized way. Resolve the doubts by typing text, taking a picture, recording a video or audio.'
        WebbackImage= '/images/Doubts/DoubtsWeb.webp'
        mobileBackImage= '/images/Doubts/DoubtsMobile.webp'
        mainTextWidth= {s.MainTextWidth}
        subTextWidth = { s.subTextWidth}
      />
       {/* <img className={s.UnderlineStyle} src='/images/underlineStyle.svg' alt='underline'/> */}
       <img className={s.WebImage} src='/images/Doubts/DoubtsWeb.webp' alt='icon'/>
      </div>
    </div>
    <Educational/>
    <AchievementSoFar/>
    <div className={s.dataCont}>
      { displayData() }
    </div> 
    <AvailableOn/>
    <Footer/>
    </>

  )
}