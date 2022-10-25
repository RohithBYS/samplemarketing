import React from 'react'
import s from './ourmodules.module.css'
export default function OurModules() {
  return (
    <div className={s.mainCont}>
    <div className={s.ourModulesMainCont}>
      
      <div className={s.mainText}>Our Modules</div>

        <div className={s.flexSideArrange}>

          {/* text */}
          <div className={s.liveClassesBox}>

            <img className={s.liveClassImg} src='/images/liveClassesmodule.svg' alt='icon'/>

            <div className={s.subText}>Live Classes</div>
            
            <div className={s.subsubText}>No matter where education takes place,
            “Egnify Live with Zoom” can help engage students,
              faculty, and staff for learning, collaboration, and administration.
            </div>

          </div>

            <video width='100%' height='100%'   className={s.videoCont}  controls>
              <source src="/images/Live.mp4" type="video/mp4"/>
            </video>
          
            {/* <div className={`ballonTop ${s.ballonTopColor}`}></div> */}
            {/* <img className={`insideImage`} src='' alt='ourmodule-icon'/> */}
            {/* <div className={`ballonBottom ${s.ballonBottmColor}`}></div> */}
          

        </div>


    </div>
    </div>
  )
}
