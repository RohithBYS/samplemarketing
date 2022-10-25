import React, { Component } from 'react'
import { useState } from 'react'
import s from './viewpricing.module.css'
import { PLAN_DATAA } from './ViewPricingData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ViewPricing(){

  const [teacherSelected, setTeacherSelected] = useState('Admin/Teacher')
  const [selectedNavigation, setSelectedNavigation] = useState(0)
  const [selectedSubIndex, setSelectedSubIndex] = useState(0)
  const [showData, setShowData] = useState(false)
  const teacherstudentData = [
    {
      name: 'Admin/Teacher',
      src: '/images/Teacher.svg'
    },
    {
      name: 'Student',
      src: '/images/Student.svg'
    }
  ]  
  

  function getSubListData(){
    return(
      <div>
          <div className={s.subListMainCont}>

            {/* left navigation */}
            <div className={s.leftNavArrange}>
              {
                PLAN_DATAA[selectedNavigation].sublist.map((item,index)=>{
                  return(
                    <div key={index}>
                      <div className={s.leftNavIconNText}
                        onClick={()=> setSelectedSubIndex(index)}
                      >
                        <img className={`${index === selectedSubIndex ? s.leftNavIconVisible : s.leftNavIconHidden}`} src='/images/PricingNavigation/Polygon 16 (1).svg' alt='arrow-icon'/>
                        <div className={`${index === selectedSubIndex ? s.selectedLeftNavText :s.deSelectedLeftNavText }`}>{item.name}</div>
                      </div>
                    </div>
                  )
                })
              }  
            </div>
            {/* -------------------- */}

            {/* rightside content */}
            <div className={s.rightContentCont}>
                <div className={s.rightBodyHeading}>{PLAN_DATAA[selectedNavigation].sublist[selectedSubIndex].name}</div>
                <div className={s.rightbodyContentCont}>
                  <div className={s.sectionCont}>
                    <div className={s.rightbodyDiv1}>
                      {
                        PLAN_DATAA[selectedNavigation].sublist[selectedSubIndex].subsublist.slice(0,10).map((item,index)=>{
                          return(
                            <div key={index}>
                              <div className={s.rightbodyContArrange}>
                                <img src='/images/PricingNavigation/Icons.svg' alt='right-symbol'/>
                                <div className={s.rightcontText}>{item}</div>
                              </div>   
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className={s.rightbodyDiv2}>
                      {
                        PLAN_DATAA[selectedNavigation].sublist[selectedSubIndex].subsublist.slice(10,20).map((item,index)=>{
                          return(
                            <div key={index}>
                              <div className={s.rightbodyContArrange}>
                                <img src='/images/PricingNavigation/Icons.svg' alt='right-symbol'/>
                                <div className={s.rightcontText}>{item}</div>
                              </div>                                
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                </div>
            </div>

          </div>
      </div>
    )
  }

  function getSubListDataMobile(index){
    return(
          
           <div className={s.mobNavInsideData}>
            {
              PLAN_DATAA[index].sublist.map((item1,index1)=>{
                return(
                  <div key={index1}>
                    <div className={s.mobNavInsideSubHeading}>{item1.name}</div>
                    {
                      item1.subsublist.map((item,index)=>{
                        return(
                          <div key={index} className={s.navinsideDataCont}>
                            <div className='flexSideArrange g-3'>
                              <img src='/images/PricingNavigation/Icons.svg' alt='right'/>
                              <div className={s.subsubData}>{item}</div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }

             


            </div> 
    )
  }

  // mobile
  function  mobilePlanPricing( ){
    return(
      <div className={s.mobileCont}>

        <div className={s.buttonMainCont}>
          <div className={`${teacherSelected === 'Admin/Teacher' ?  s.buttonSelected : s.buttonCont+' '+s.teacherBox}`}
            onClick={()=> setTeacherSelected('Admin/Teacher')}
          >
            <img src='/images/Student.svg' alt='student' />
            <div>Admin/Teacher</div>
          </div>
          <div className={`${teacherSelected === 'Student' ?  s.buttonSelected : s.buttonCont+' '+s.studentBox}`}
            onClick={()=> setTeacherSelected('Student')}
          >
            <img src='/images/Student.svg' alt='student' />
            <div>Student</div>
          </div>
        </div>

        {/* inside cont */}
        <div className={s.insideMobCont}>

        {
              PLAN_DATAA.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={`${selectedNavigation === index && showData? s.mobileNavSelected : s.mobileNavCont}`}
                      onClick={()=> (setSelectedNavigation(index), setSelectedSubIndex(0), setShowData(!showData))}
                    >
                      <div className={s.mobNavInside}>
                        <img src={item.inActiveIcon} alt='icon'/>
                        <div className={`${selectedNavigation === index && showData ? s.navTextSelected : s.navTextDeselected}`}>{item.name}</div>
                      </div>
                      {
                        selectedNavigation === index && showData? <img src='/images/Icons (1).svg' alt='icon' /> :
                        <img src='/images/Icons.svg' alt='plus'/>
                      }
                     
                    </div>
                    {
                      showData && index === selectedNavigation  ? getSubListDataMobile(selectedNavigation) : null
                     }
         
                  </div>
                )
              })
            }
          </div>

        

      </div>
    )
  }
 
  

  // web Container and stylings
  function webPlanPricing() {
    return(

      <div className={s.webMainCont}>

        <div className={s.webInsideCont}>

          <div className={s.teacherStudentbtnCont}>
            {
              teacherstudentData.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={`${s.studentTeacherCont} ${teacherSelected === item.name ? 
                      s.adminTeacherStudentBoxSelected : ''}`}
                        onClick={()=> setTeacherSelected(item.name)}
                      >
                      <div className={s.roundBox}>
                        <img className={s.roundBoxImg} src={item.src} alt='icon'/>
                      </div>
                      <div className={`${s.adminTeacherStudentText} ${teacherSelected === item.name ? s.adminTeacherStudentTextSelected : null}`}>{item.name}</div>
                      {
                        teacherSelected === item.name ?  <img  className={s.rightTick} src='/images/righttick.svg' alt='right'/> : null
                      }
                     
                    </div>
                  </div>
                )
              })
            }
           

            {/* <div className={s.studentTeacherCont+' '+s.adminTeacherStudentTextSelected}>
              <div className={s.roundBox}>
                <img className={s.roundBoxImg} src='/images/Teacher.svg' alt='icon'/>
              </div>
              <div className={s.adminTeacherStudentText}>Student</div>
              <img  className={s.rightTick} src='/images/righttick.svg' alt='right'/>
            </div> */}

          </div>

          <div className={s.everyPlanText}>Every plan includes</div>
          
          {/* navigation */}
          <div className={s.dummy}>
            <div className={s.navigationBoxMainCont}>
              {
                PLAN_DATAA.map((item,index)=>{
                  return(
                    <div key={index}>
                      <div className={`${s.navigationRectangle} ${selectedNavigation === index ?
                        s.navigationRectangleSelected : null}`}
                        onClick={()=> (setSelectedNavigation(index), setSelectedSubIndex(0))}
                        >
                        <img src={selectedNavigation === index ? item.activeIcon :item.inActiveIcon} alt='icon' />
                        <div className={`${s.navigationItemText} ${selectedNavigation === index ? s.navigationItemTextSelected: null}`}>{item.name}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
              {getSubListData()}
            </div>  
        </div>
        
      </div>
    )
  }



  return (

  <div>
    <div>

      {/* common details */}
      <div className={s.topCont}>
        <div className={s.mainHeadText}>
          Choose your edition.
        </div>
        <div className={s.mainHeadText}>
          Try it free for 7 days.
        </div>

        <div className={s.smallText}>Egnify plans start as low as 
          Rs.45/- per student per month.
        </div>
      
        <div className={s.backToPriceText}
          onClick={()=>  window.location.href='/pricingmobile'}
        >
          Back to pricing details</div>
          <div className={s.webContArrange}>
          <div className={s.whoRUText}>Who are you?</div>
          {
          webPlanPricing()
          }
       
        </div>
      </div>
        {/* ---------------- */}

      {/* web */}
     
      {
          mobilePlanPricing()
      }
    </div>
    <Footer selColor='#f7f7f7'/>
  </div>

  )
  
}
