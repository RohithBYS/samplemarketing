import React from 'react'
import s from './clientfeedback.module.css'

export default function ClientFeedbacks() {
  return (
    <div className={s.mainCont}>
      {/* <img className={s.leftDecoration} src='/images/TopCarousel.svg' alt='back-icon'/> */}
      <div className={s.mainText}>Here’s what our clients say</div>
     {/* carousel */}
      <div className={s.carouselBox}>

        <div className={s.userRoundBox}>
          <img src='/images/carouselusericon.svg' alt='user'/>
        </div>

        <div className={s.userNameText}>Stacy Cordelia</div>

        <div className={s.studentText}>Student</div>

       
        <div className={s.carouselMainCont}>
          <img className={s.openingQuote} src='/images/openingquote.svg' alt='openquote'/>
          <div className={s.carouselCommentText}>Our institute chose this app for sending us online lectures 
            and for conducting exams and I gotta say, it really works well.
            The classes have high quality visual and you can change the playback
            speed as well. You can't take screenshots during the exam and after the
            exam we get individual marks for each subject and the total as well.
            We can even compare our previous scores. We can even analyse the toppers
            score along with ours. Overall, it is a wonderful app.
          </div>

          <img className={s.closingQuote} src='/images/closingquote.svg' alt='closingquote'/>
        </div>

      </div>
      <div className='flexSideArrange g-6'>
        <img src='/images/leftarrow.svg' alt='arrow'/>
        <img src='/images/rightarrow.svg' alt='arrow'/>
      </div>
        {/* <img className={s.rightDecoration} src='/images/BottomCarousel.svg' alt='back-icon'/> */}

    </div>
  )
}
