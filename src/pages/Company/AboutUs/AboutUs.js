import React from 'react'
import s from './aboutus.module.css'
import Footer from '../../../components/Footer/Footer'
// import Button from '../../../components/Button/Button'

export default function AboutUs() {

  // text
  const dataText = [
    'We founded Egnify to create products that improve the lives of as many people as possible. We want to create products that rethink industry industry standards, challenge the status quo and make people\'s easier. ',
    'We started with education and teaching (specifically) as a problem to be solved. We dreamt up a better way of teaching that is easy, fast, and result-oriented\**. With Egnify we provide dynamic, data-informed experiences to the education community so that learners and educators can achieve their goals.\**',
    'Designed with an intuitive, personalized interface, Egnify engages learners and eases the burden on instructors. With time-saving tools and a streamlined design, it\'s never been easier to teach and learn.'
  ]
  // 1: about us
  function displayAboutsUs(){
    return(
      <div className={s.aboutusCont}>
        <div>About Us</div>
      </div> 
    )
  }

  // 2.Content
  function displayContent(){
    return(
      <div className={s.contentCont}>

        <div className={s.textBox}>
          {
            dataText.map((item,index)=>{
              return(
                <div key={index}>{item}</div>
              )
            })
          }
        </div>
        
        <img className={s.aboutImage} src='/images/aboutus.webp' alt='icon'/>
      </div>
    )
  }

  // 3 Button
  function displayButton(){
    return(
      <div className={s.buttonCont}>
        <div className={s.webButton}>
          SCHEDULE DEMO 
        </div>
      </div>
    )
  }


  return (
    <>
      <div className={s.mainCont}>
        { displayAboutsUs()}
        { displayContent()}
        { displayButton()}
      </div>
      
      <Footer selColor= '#f7f7f7' />
    </>
    
  )
}
