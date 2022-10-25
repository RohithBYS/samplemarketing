import React from 'react'
import s from './availableon.module.css'
export default function AvailableOn(props) {
  
  return (
    <>
    <div className={s.mainCont} style={{backgroundColor : props.selColor}}>

      <div className={s.TextIconArrange}>
        <div className={s.mainText}>We are <span className={s.availableColor}>available</span> on</div>
        <div className={s.weAreonCont}>
              <div className={s.iconsPlayArrange}>
                <img className={s.threeTypesIcons} src='/images/tabmobileweb.svg' alt='playstore-icons'/>
                <div className={s.playButtonsArrange}>
                  <img  className={s.playStoreIcons} src='/images/google play icon.webp' alt='googleplay'/>
                  <img className={s.playStoreIcons} src='/images/appleplaystore.webp' alt='appleplay'/>
                </div>
              </div>
        </div>
      </div>

      <img className={s.lapTabImage} src='/images/tabmobile.webp' alt='web-icon' />

    </div>

    <div className={s.joinCommunityCont}>
      <div className={s.communityText}>Join our FaceBook Community</div>
      <button className={s.joinNowButton}>JOIN NOW</button>
    </div>
    </>
  )
}
