import React from 'react'
import s from './customers.module.css'
import { CUSTOMER_DATA1 } from './CustomersData'

export default function Customers() {


  // data
  const comment1 = '\" Our institute chose this app for sending us online lectures and for conducting exams and I gotta say, it really works well. The classes have high quality visual and you can change the playback speed as well. You can\'t take screenshots during the exam and after the exam we get individual marks for each subject and the total as well. We can even compare our previous scores. We can even analyse the toppers score along with ours. Overall, it is a wonderful app.\"'
  const comment2 = '\"This app is so good and there is no problem in quality of classes posted in the app. The way of conducting exam in the app is so good that every student will be comfortable to write. This app is also good for studies. Online exams are also so good.Thank for supporting our institution in keeping exams and online classes So everybody download getranks and request your Institute to conduct exams and post classes in getranks\"'
  // rectangleBox
  function rectangleBox(image, maintext, subtext){
    return(
      <div>
        <div className={s.rectangleBox}>
          <img className={s.cardImage} src={image} alt='icon'/>
          <div className={s.cardMainText}>{maintext}</div>
          <div className={s.cardSubText}>{subtext}</div>
        </div>
      </div>
    )
  }

  // images
  function displayImages(data){
    return(
      <div className={s.ImageMainCont}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className={s.imageBox} >
                <img  className={s.imageStyle} src={item} alt='icon'/>
              </div>
            )
          })
        }
        
        {/* <img className={s.imageBox} src='/images/customers/comment1/Frame 1136.webp' alt='icon'/> */}
      </div>
    )
  }

  // comment boc
  function commentBox(comment,commentatorImg,name,role){
    return(
      <div className={s.commentBox}>
          <div className={s.commentText}>{comment}</div>
          <div className={s.commentatorBox}>
            <img className={s.commentatorImage} src={commentatorImg} alt='user'/>
            <div className={s.commentatorName}>{name}</div>
            <div className={s.commentatorType}>{role}</div>
          </div>
      </div>
    )
  }

  // step1
  function trustedByInstitutions(){
    return(
      <div className={s.trustedByMainCont}>

        <div className={s.textBox1}>
          <div className={s.trustedMainHeading}>Trusted by
            <div className={s.highlightedText}> 100+ Institutions</div>
          </div>
        </div>

        {/* Box */}
        <div className={s.rectangleBoxMainCont}>
          { rectangleBox('/images/customers/student.svg', '1 Million +', 'Satisfied Students') }
          { rectangleBox('/images/customers/academics.svg','100+','Satisfied Institutions') }
        </div>
      </div>
    )
  }

  // step2 
  function displayNetwork(){
    return(
      <div className={s.networkMainCont}>
        <div className={s.networkCont}> 
          <div className={s.networkHeadText}>A large network servicing the whole country</div>
          <img className={s.indiaMapImage} src='/images/customers/IndiaMap.webp' alt='icon'/>
        </div>
      </div>
    )
  }

  // step 3
  function displaySection1(){
    return(
      <div className={s.section1mainCont}>
          { commentBox(comment1, '/images/customers/Comment1.webp', 'Srujan Sagar', 'Academic Head, Sri Chaitanya' ) }
          { displayImages(CUSTOMER_DATA1) }
      </div>
    )
  }

  function displaySection2(){
    return(
      <div className={s.section2mainCont}>
          { commentBox(comment2, '/images/customers/Comment2.webp', 'M. Laxman Rao', 'HOD, Rankguru' ) }
          { displayImages(CUSTOMER_DATA1) }
          
      </div>
    )
  }



  return (
    <div className={s.mainCont}>
      { trustedByInstitutions() }
      { displayNetwork() }
      { displaySection1() }
      { displaySection2() }
    </div>
  )
}
