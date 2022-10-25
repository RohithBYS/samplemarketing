import React from 'react'
import s from './freetrial.module.css'

export default function FreeTrial() {
  return (
    <div>
      
      <div className={s.mainCont}>

          <div className={s.headText}>
            Egnify is the online teaching platform your students, teachers, and staff will love.
          </div>
          <div className={s.subText}>Everything you need to teach online anywhere, anytime to anyone.</div>

          <div className={s.startFreeButtonArrange}> 
            <button className={s.freeTrialButton}>
              START FREE TRIAL
            </button>
            <div className={`flexSideArrange g-3 cursor-pointer`}>
              <div className={s.chatOnText}>Chat on</div>
              <img src='/images/whatsapp.svg' alt='whatsapp-logo'/>
            </div>
          </div>

          <div className={s.videoBox}>
          <video width='100%' height='100%' controls autoplay="autoplay">
            <source src="/images/egnify_homepage_animation.mp4" type="video/mp4"/>
          </video>
          </div>
          

          <div className={`${s.downloadAppText} mt-6`}>Download the app</div>
          <img className='mt-3 cursor-pointer' src='/images/googleplay-1.webp' alt='google-play'/>

      </div>

    </div>
  )
}
