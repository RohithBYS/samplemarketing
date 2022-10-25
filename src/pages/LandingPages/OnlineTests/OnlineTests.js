import React from 'react'
import s from './onlinetests.module.css'

export default function OnlineTests() {

  const moduleData = [
    {
      name: 'Online Tests',
      backColor : ' #fff',
      icon: '/images/OnlineTests.svg',
      image:'/images/Tests.mp4',
      flexDir: 'row-reverse',
      ballonTopClr: '#f2e5fe',
      ballonBottomClr: '#ffe0e8',
      bulletData: [
        'Unlimited test creation',
        '100,000 student concurrency',
        'Conduct online and offline tests',
        'Advanced Proctoring features',
        'Pre-defined marking schemas and custom marking schemas',
        'Grace period option avaialbe',
        'Live attendance dashboard',
      ]
    },
    {
      name: 'Assignments',
      backColor : '#f7f7f7',
      icon: '/images/roundAssignments.svg',
      image:'/images/Assignments.mp4',
      flexDir: 'row',
      ballonTopClr: '#f36',
      ballonBottomClr: '#3fc',
      bulletData: [
        'Administer and grade online and in-class assessments',
        'Grade multiple assessment types, including handwritten assessments',
        'Evaluate using mobile app and in a web browser',
        'Improve student feedback loop and provide an opportunity to enrich the learning experience through analytics',
      ]
    },
    {
      name: 'Doubts',
      backColor : '#fff',
      icon: '/images/roundDoubts.svg',
      image:'/images/Doubts.mp4',
      flexDir: 'row-reverse',
      ballonTopClr: '#fc9512',
      ballonBottomClr: ' #f2e5fe',
      bulletData: [
        'Doubts can turn up anytime',
        'Ask until it is resolved',
        'Answer doubt anytime, anywhere',
        'Access and Analyse doubts',
      ]
    }

  ]

  return (
    <div>

      {
        moduleData.map((item, index)=>{
          return(
            <div className={s.wholemainCont} style={{backgroundColor: item.backColor}}>
            <div className={s.mainCont } style={{backgroundColor: item.backColor}} key={index}>
              <div className={`${s.arrangeData}`} style={{flexDirection: item.flexDir}}>
              {/* <div className={s.flexDirectionOverride}> */}
                    
                      {/* <div className={`ballonTop`} style={{backgroundColor: item.ballonTopClr}}></div> */}
                      {/* <img className={`insideImage`} src={item.image} alt='ourmodule-icon'/> */}
                    {/* <div className={`ballonBottom`} style={{backgroundColor: item.ballonBottomClr}}></div> */}
               

                <div className={s.liveClassesBox}>

                    <img  className={s.liveClassImg} src={item.icon} alt='icon'/>

                    <div className={s.subText}>{item.name}</div>
                    
                    <ul>
                      {
                        item.bulletData.map((item2,index2)=>{
                          return(
                            <li className={s.subsubText} key={index2}>{item2}</li>
                          )
                        })
                      }      
                    </ul>

                  </div>
                  

                  <video width={`${item.name === 'Doubts' ? '80%' : '100%'}`} height='100%'   className={s.videoCont}   controls>
                         <source src={item.image} type="video/mp4"/>
                      </video>


                {/* </div> */}
              </div>

              </div>
            </div>
          )

        })
      }

    </div>
  )
}
