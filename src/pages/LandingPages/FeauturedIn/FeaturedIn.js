import React from 'react'
import s from './featuredin.module.css'
export default function FeaturedIn(props) {

  const mediaIcons = [
    '/images/NewsIcons/andhra jyothi.webp',
    '/images/NewsIcons/asia.webp',
    '/images/NewsIcons/Deccan chronicle.webp',
    '/images/NewsIcons/etv.webp',
    '/images/NewsIcons/financial express.webp',
    '/images/NewsIcons/indian express.webp',
    '/images/NewsIcons/namasthe telangana.webp',
    '/images/NewsIcons/t news.webp',
    '/images/NewsIcons/telangana today.webp',
    '/images/NewsIcons/the news minute.webp',
    '/images/NewsIcons/v6 news.webp',
    '/images/NewsIcons/your story.webp',
  ]
  return (
    
    <div className={s.mainCont} style={{backgroundColor: props.selColor}}>

      <div className={s.mainText}>We’ve got featured in</div>

      <div className={s.mediaVideos}>
        <img className={s.videoImage} src='/images/etv.webp' alt='media-icon'/>
        <img className={s.videoImage} src='/images/t news.webp' alt='media-icon'/>
        <img className={s.videoImage} src='/images/v6.webp' alt='media-icon'/>
      </div>

      <div className={s.mediaIcons}>
          {
            mediaIcons.map((item,index)=>{
              return(
                <div key={index}>
                  <img className={s.mediaIcon} src={item} alt='media-icon'/>
                </div>
              )
            })
          }
      </div>
      
    </div>
  )
}
