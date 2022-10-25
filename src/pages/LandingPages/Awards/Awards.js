import React from 'react'
import s from './awards.module.css'
export default function Awards(props) {

  const awardsData = [
    '/images/awards/Frame.webp',
    '/images/awards/Frame (1).webp',
    '/images/awards/Frame (2).webp',
    '/images/awards/Frame (3).webp',
    '/images/awards/Frame (4).webp',
    '/images/awards/Frame (5).webp',
  ]

  return (
    <div className={s.mainCont} style={{backgroundColor: props.selColor}}>
       <div className={s.mainText}>Awards</div>
       <img className={s.webImage} src='/images/awardsicon.webp' alt='awards-icon'/>

        {/* <div   className={s.awardCont}>
          {
            awardsData.map((item,index)=>{
              return(
                <div key={index}>
                  <img src={item} alt='icon'/>
                </div>
              )
            })
          }
        </div> */}
        <div  className={s.awardCont}>
          <img src='/images/awards/Frame.webp' alt='icon'/>
          <img src='/images/awards/Frame (1).webp' alt='icon'/>
          <img src='/images/awards/Frame.webp' alt='icon'/>
          <img src='/images/awards/Frame (1).webp' alt='icon'/>
          <img src='/images/awards/Frame.webp' alt='icon'/>
          <img src='/images/awards/Frame (1).webp' alt='icon'/>
        </div>
        
    </div>
  )
}
