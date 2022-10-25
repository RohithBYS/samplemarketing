import React from 'react'
import Products from '../../../components/Products/Products'
import s from './onlinetests.module.css'
import ModuleImage from '../../../components/ModuleImage/ModuleImage'
import ProductsImage from '../Components/ProductsImageData/ProductsImage'
import { ONLINE_DATA } from './OnlineClassData'
import Educational from '../../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../../LandingPages/Achievement/AchievementSoFar'
import AvailableOn from '../../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../../components/Footer/Footer'


export default function OnlineTests() {


  const reportSubdata = [
    'Test results',
    'Student response report',
    'Student response count',
    'Marks distribution',
    'Error count',
    'Top marks',
    'Student performance trend',
    'Averages comparison',
    'Concept based report'
  ]
 

  function displayLiveClass(){
    return(
    <>
      {/* {
        data.map((item,index)=>{
          return(
            <div className={`${index %2 != 0 ?  s.liveClassMainCont2 : s.liveClassMainCont }`} key={index} >

              <div className={s.contentBox}>
                <div className={s.dataSectionLive}>
                  <div className={s.moduleIcon}>
                    <ModuleImage
                      moduleImage= {item.modImage}
                    />
                  </div>
                  <div className={s.liveMainText}>{item.modName}</div>
                </div>
      
                <div className={s.TextBox}>
                  <div className={s.liveSubText}>{item.modText}</div>
                </div>
      
              </div>


              <div className={s.imageCont}>
                <ProductsImage
                  dataImage='/images/LiveClasses/1.LiveClasses.webp'
                  topBaloonColor={item.bTopColor}
                  bottomBaloonColor={item.bBottomColor}
                  topAdjust={s.topballonAdjust}
                  bottomAdjust={s.bottomballonAdjust}
                />
              </div>


            </div>
          )
        })
      } */}
      {
        ONLINE_DATA.map((item,index)=>{
          return(      
            <div  className={s.pageMainCont} key={index} >
              <div className={`${index %2 != 0 ?  s.rowReverseCont : s.rowCont }`}>
                <div className={s.textboxRow}>
                  <div className={s.contentBox}>
                    <div className={s.dataSectionLive}>
                      <div className={`${item.moduleImage === 'no' ? s.offModuleIcon :  s.moduleIcon}`}>
                        <ModuleImage
                          moduleImage= {item.moduleImage}
                          moduleSize={s.modeuleSetSize}
                        />
                      </div>
                      <div className={s.liveMainText}>{item.mainText}</div>
                      </div>

                      
                        <ul className={s.bulletSpacing}>
                          {
                            item.subData.map((item2,index2)=>{
                              return(
                                <div key={index2}>
                                  <li className={s.liveSubText}>{item2}</li>
                                </div>
                              )
                            })
                          }
                        </ul>
                      
                  </div>
                </div>

                <div className={s.imageCont}>
                  <ProductsImage
                    dataImage={item.mainImage}
                    topBaloonColor={item.bTopColor}
                    bottomBaloonColor={item.bBottomColor}
                    topAdjust={s.topballonAdjust}
                    bottomAdjust={s.bottomballonAdjust}
                  />
                </div>

              </div>
            </div>
            
          )
        })
      }

  
    </>
    )
  }


  // analysis

  function displayAnalysis(){
    return(
      <div className={s.analysisMainCont} >

        <div className={s.contentBox}>
          <div className={s.dataSectionLive}>
            <div className={s.moduleIcon}>
              <ModuleImage
                moduleImage= '/images/OnlineTests/Tests.svg'
                moduleSize={s.modeuleSetSize}
              />
            </div>
            <div className={s.liveMainText}>Analysis</div>
          </div>

          {/* analysis */}
          <div className={s.analysisTextBox}>
            <div className={s.subHeading+' '+s.mtAnalysis}>Marks Based Analysis</div>
            <ul className={s.bulletSpacing}>
              <li className={s.liveSubText}>Marks distribution graph</li>
              <li className={s.liveSubText}>Cut-off based analysis</li>
              <li className={s.liveSubText}>Student-wise marks analysis</li>
            </ul>
          </div>

          <div className={s.analysisImageDisplay}>
            <ProductsImage
              dataImage='/images/OnlineTests/OnlineTests1.webp'
              topBaloonColor='#f2e5fe'
              bottomBaloonColor='#ffe0e8'
              topAdjust={s.topballonAdjust}
              bottomAdjust={s.bottomballonAdjust}
            />
          </div>

          {/* Comparision Analysis */}
          <div className={s.analysisTextBox}>
            <div className={s.subHeading+' '+s.mtAnalysis}>Comparision Analysis </div>
            <ul className={s.bulletSpacing}>
              <li className={s.liveSubText}>Historic test averages</li>
              <li className={s.liveSubText}>Student performance profile</li>
              <li className={s.liveSubText}>Subject top marks vs topper</li>
            </ul>
          </div>

          {/* Error Analysis */}
          <div className={s.analysisTextBox+' '+s.mobReducetopSpace}>
            <div className={s.subHeading+' '+s.mtAnalysis}>Error Analysis </div>
            <ul className={s.bulletSpacing}>
              <li className={s.liveSubText}>Question error count</li>
              <li className={s.liveSubText}>Students error mapping</li>
              <li className={s.liveSubText}>Question paper referencing</li>
            </ul>
          </div>

          <div className={s.analysisImageDisplay}>
            <ProductsImage
              dataImage='/images/OnlineTests/OnlineTests1.webp'
              topBaloonColor='#f2e5fe'
              bottomBaloonColor='#ffe0e8'
              topAdjust={s.topballonAdjust}
              bottomAdjust={s.bottomballonAdjust}
            />
          </div>


          {/* Concept-based Analysis */}
          <div className={s.analysisTextBox}>
            <div className={s.subHeading+' '+s.mtAnalysis}>Concept-based Analysis</div>
            <ul className={s.bulletSpacing}>
              <li className={s.liveSubText}>Topic based analysis</li>
              <li className={s.liveSubText}>Sub-topic based analysis</li>
              <li className={s.liveSubText}>Difficulty level analysis</li>
            </ul>
          </div>

          <div className={s.analysisImageDisplay}>
            <ProductsImage
              dataImage='/images/OnlineTests/OnlineTests1.webp'
              topBaloonColor='#f2e5fe'
              bottomBaloonColor='#ffe0e8'
              topAdjust={s.topballonAdjust}
              bottomAdjust={s.bottomballonAdjust}
            />
          </div>

        </div> {/* end of content box*/}


        <div className={s.analysisimageCont}>
          <ProductsImage
            dataImage='/images/OnlineTests/OnlineTests1.webp'
            topBaloonColor='#f2e5fe'
            bottomBaloonColor='#ffe0e8'
            topAdjust={s.topballonAdjust}
            bottomAdjust={s.bottomballonAdjust}
          />

          <ProductsImage
            dataImage='/images/OnlineTests/OnlineTests1.webp'
            topBaloonColor='#f2e5fe'
            bottomBaloonColor='#ffe0e8'
            topAdjust={s.topballonAdjust}
            bottomAdjust={s.bottomballonAdjust}
          />

          <ProductsImage
            dataImage='/images/OnlineTests/OnlineTests1.webp'
            topBaloonColor='#f2e5fe'
            bottomBaloonColor='#ffe0e8'
            topAdjust={s.topballonAdjust}
            bottomAdjust={s.bottomballonAdjust}
          />
        </div>

      </div>
  
    )
  }
  


  // last

  function displayReports(){
    return(
      <div  className={s.reportCont}>

              <div className={s.imageCont2}>
                <ProductsImage
                  dataImage= '/images/OnlineTests/OnlineTests 6.webp'
                  topBaloonColor='#B9FFF1'
                  bottomBaloonColor='#ffe0e8'
                  topAdjust={s.topballonAdjust}
                  bottomAdjust={s.bottomballonAdjust}
                />
              </div>


              <div className={s.contentBox}>
                <div className={s.dataSectionLive}>
                  <div className={s.moduleIcon}>
                    <ModuleImage
                      moduleImage= '/images/OnlineTests/Icons.svg'
                      moduleSize={s.modeuleSetSize}
                    />
                  </div>
                   <div className={s.liveMainText}>Reports</div>
                   
                  </div>
                  
                  <div className={s.TextBox3}>
                    <ul className={s.bulletSpacing}>
                      {
                        reportSubdata.map((item2,index2)=>{
                          return(
                            <div key={index2}>
                              <li className={s.liveSubText}>{item2}</li>
                            </div>
                          )
                        })
                      }
                    </ul>
                  </div>
              </div>

            </div>
            
    )
  }


  return (
  <>
    <div className={s.mainCont}>
      <Products 
        name={'Online Tests'} 
        backgColor={'#f0e0fe'}
        moduleImage ='/images/OnlineTests/ONlineTests.svg'
        moduleColor = '#8800fe'
        mainText = 'Plan, design, deliver and mark assessments seamlessly - onsite or remotely.'
        mainTextWidth= {s.OnlineClassesMainText}
        subText='An end-to-end assessment platform that support teachers, data entry operators with cutting edge features that cover all your assessment needs entirely on-screen.'
        subTextWidth = { s.subText}
        WebbackImage= '/images/OnlineTests/OnlineTestBackground.webp'
        mobileBackImage= '/images/OnlineTests/OnlineTestMobile.webp'
      />
      <img className={s.UnderlineStyle} src='/images/underlineStyle.svg' alt='underline'/>
      <img className={s.WebImage} src='/images/OnlineTests/OnlineTestBackground.webp' alt='icon'/>
    </div>
    <Educational/>
    <AchievementSoFar/>
  { displayLiveClass() }
  { displayAnalysis() }
  { displayReports() }
  <AvailableOn selColor = '#f7f7f7'/>
    <Footer/>
  </>

  )
}
