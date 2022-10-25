import React from 'react'
import s from './products.module.css'

export default function Products(props) {
  const { name, backgColor, moduleImage, moduleColor, mainText, subText, WebbackImage, mobileBackImage, mainTextWidth, subTextWidth, mobileimageWidthHeight} = props
 console.log("class : "+mainTextWidth)
  return (
    <div className={s.mainCont} style={{backgroundColor: backgColor}}>

      <div className={s.inPageCont}>
        <div className={s.homeText}>Home</div>
        <div className={s.homeText}>/</div>
        <div className={s.locationText}>{name}</div>
      </div>

      <div className={s.moduleArrange}>
        <div className={s.roundBox} style={{backgroundColor: moduleColor}}>
          <img src={moduleImage} alt='module' />
        </div>
       
        <div className={s.moduleText} style={{color: moduleColor}}>{name}</div>
      </div>

      <div className={s.mainSection}>
        <div className={s.DataSection}>
          <div className={s.mainText+' '+mainTextWidth}>{mainText}</div>
          <div className={s.subText+' '+subTextWidth}>{subText}</div>
          
          <div className={s.buttonWhatsappArrange}>
            <div className={s.getSubscriptionButton}>get subscription</div>
            <div className={s.chatOnArrange}>
                    <img src='/images/whatsapp.svg' alt='whatsapp-logo'/>
                    <div className={s.chatOnText}>Chat on</div>
            </div>
          </div>


          <div className={`${s.downloadAppText}`}>Download the app</div>
          <img className='mt-3 cursor-pointer' src='/images/googleplay-1.webp' alt='google-play'/>
        </div>
       
        <div className={s.imageSection}>
          {/* <img className={s.WebmainImage} src={WebbackImage} alt='icon'/> */}
          <img className={s.mobileMainImage+' '+mobileimageWidthHeight} src={mobileBackImage} alt='icon'/>
        
        </div>
      </div>

    </div>
    
  )
}
