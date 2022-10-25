import React from 'react'
import s from './educational.module.css'

export default function Educational() {

  // Educational Institutions icons
  const eduIconsData = [
   '/images/EducationalInstitutions/3d83166de8b9fac317cfd9959c00040c 1.webp',
   '/images/EducationalInstitutions/Group 956.webp',
   '/images/EducationalInstitutions/image 8.webp',
   '/images/EducationalInstitutions/image 9.webp',
   '/images/EducationalInstitutions/image 13.webp',
   '/images/EducationalInstitutions/image 16.webp',
   '/images/EducationalInstitutions/image 17.webp',
   '/images/EducationalInstitutions/image 60.webp',
   '/images/EducationalInstitutions/image 64.webp',
   '/images/EducationalInstitutions/ms-junior-college-02 1.webp',
   '/images/EducationalInstitutions/Sri Bhavishya 1.webp',
   '/images/EducationalInstitutions/Trinity_512X512 1.webp',
  ]
  return (
    <div className={s.mainCont}>
    <div className={s.educationalMainCont}>
      <div className={s.alignCenter}>
        <div className={s.mainText}>Trusted by leading Educational Institutions</div>

        <div className={s.eduLogos}>
            {
              eduIconsData.map((item,index)=>{
                return(
                  <div className={s.eduLogoBox} key={index}>
                    <img src={item} alt='edu-logo'/>
                  </div>
                )
              })
            }
            
        </div>
       
       </div>
       <div  className={s.clickhereText}>
          <a href='https://www.egnify.com/'>click here for more...</a>
        </div>
    </div>
    
    </div>
    
  )
}
