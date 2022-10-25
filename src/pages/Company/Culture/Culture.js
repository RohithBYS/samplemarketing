import React from 'react'
import { CULTURE_DATA } from './cultureData'
import s from './culture.module.css'
import Footer from '../../../components/Footer/Footer'

export default function Culture() {

  function displayFunnyThing(){
    return(
      <div className={s.funnyThingMainCont}>
        <div className={s.funnyThingInnerCont}>

          <div className={s.textBox}>
            <div className={s.culturemainHeading}>Culture is a funny thing to describe in words</div>
            <div className={s.cultureSubText}>We believe culture is the most important driver of organizational success and of the satisfaction we feel at the end of each day. But when put into words, it can sound contrived. So we’ll just tell you what you’d observe as you wander the halls.</div>
          </div>
          <img className={s.cultureImage} src='/images/culture/funnyThing.webp' alt='culture'/>
        </div>
      </div>
    )
  }


  function displayOtherData(){
    return(
      <div className={s.otherMainCont}>
        {
          CULTURE_DATA.map((item,index)=>{
            return(
              <div key={index} className={s.otherInnerCont} style={{flexDirection: item.flexDir ,backgroundColor: item.backColor}}>
              <div className={s.textBox2}>
                  <div className={s.otherMainHeading}>{item.heading}</div>
                  <div className={s.otherSubHeading}>{item.content}</div>
              </div>
              <img className={s.otherImage} src={item.image} alt='othericon'/>
          </div>
            )
          })
        }
          

          {/* <div className={s.otherInnerCont} style={{backgroundColor: '#fff'}}>
              <div className={s.textBox2}>
                  <div className={s.otherMainHeading}>Think Big - 10X not 10%</div>
                  <div className={s.otherSubHeading}>We believe culture is the most important driver of organizational success and of the satisfaction we feel at the end of each day. But when put into words, it can sound contrived. So we’ll just tell you what you’d observe as you wander the halls.</div>
              </div>
              <img className={s.otherImage} src='/images/culture/other1.webp' alt='othericon'/>
          </div> */}
      </div>
    )
  }


  return (
  <>
    <div className={s.mainCont}>
      { displayFunnyThing() }
      { displayOtherData()}
    </div>
    <Footer selColor= '#f7f7f7' />
  </>
  )
}
