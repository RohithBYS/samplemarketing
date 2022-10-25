import React, { useState } from 'react'
import s from './press.module.css'
import Footer from '../../../components/Footer/Footer'
import { MEDIA_NEWS, MEDIA_VIDEOS } from './PressData'
export default function Press() {

  const [activeTab, setActiveTab]= useState(true) //true: Media coverage  false: videos



  // mediacoverage data box
  function mediaCoverageNews(){
    return(
      <div className={s.mediaCoverageNewsMainCont}>
        {
          MEDIA_NEWS.map((item,index)=>{
            return(
              <div key={index}>
                <div className={s.NewsBox}>
                  <img  className={s.mediaImage} src={item.icon} alt='media'/>
                  <div className={s.dataBox}>
                    <div className={s.mediaHeadText}>{item.mainHeading}</div>
                    <div className={s.publishedByText}>{item.by}</div>
                    <div className={s.subText}>{item.context}</div>
                    <a className={s.readMoreTex} href='#'>Read More...</a>
                  </div>
                </div>
                {
                  MEDIA_NEWS.length-1 === index ? null  :  <div className={s.horizontalLine}></div>
                }
              
              </div>
            )
          })
        }
      </div>
    )
  }

  // media news
  function mediaVideos(){
    return(
      <div className={s.mediaVideosCont}>
        {
          MEDIA_VIDEOS.map((item,index)=>{
            return(
              <div key={index}>
                <div className={s.NewsBox}>
                  <img className={s.mediaVideo} src={item.thumbnail} alt='video'/>
                   <div className={s.dataBox}>
                    <div className={s.mediaHeadText}>{item.mainHeading}</div>
                  </div>
                </div>
                {
                  MEDIA_VIDEOS.length-1 === index ? null : <div className={s.horizontalLine3}></div>
                }
              </div>
            )
          })
        }
      </div>
    )
  }

  // 1: Engnify News
  function displayBanner(){
    return(
      <div className={s.bannerCont}>
        <div>egnify in News</div>
      </div> 
    )
  }

  // 2 Display TabNavigation
  function displayTabNav(){
    return(
      <div className={s.tabNavCont}>

        <button className={`${activeTab ? s.tabButtonSelected : s.tabButtonDeSelected}`}
          onClick={()=> setActiveTab(true)}
        >
          Media coverage
        </button>

        <button className={`${!activeTab ? s.tabButtonSelected : s.tabButtonDeSelected }`}
          onClick={()=> setActiveTab(false)}
        >
          Video
        </button>

      </div>
    )
  }

  //3: Media Data
  function displayMediaData(){
    return(
      <div className={s.mediaDataCont}>
        {
          activeTab ? mediaCoverageNews() : mediaVideos()
        }
      </div>
    )
  }

  // 4. MediaQueriesBox
  function displayMediaQueryBox(){
    return(
      <div className={s.mediaQueryCont}>
        <div className={s.mediaQueryText}>For media queries, Please Contact</div>
        {/* <div className={s.mediaQueryText}>Please Contact</div> */}
        <div className={s.horizontalLine2}></div>
        <div className={s.mailIconArrange}>
          <img src='/images/inNews/mail_outline.svg' alt='mail'/>
          <div className={s.emailText}>kiran@egnify.com</div>
        </div>
      </div>
    )
  }

  return (
  <>
    <div className={s.mainCont}>
      {displayBanner() }
      <div className={s.bodyCont}>
        { displayTabNav() }
        <div className={s.innerBodyCont}>
          { displayMediaData() }
          { displayMediaQueryBox() }
        </div>
      </div>
    </div>
    <Footer selColor= '#f7f7f7' />
  </>
  )
}
