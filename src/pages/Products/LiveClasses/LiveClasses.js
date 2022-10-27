import React from 'react'
import Products from '../../../components/Products/Products'
import s from './liveclasses.module.css'
import ModuleImage from '../../../components/ModuleImage/ModuleImage'
import ProductsImage from '../Components/ProductsImageData/ProductsImage'
import DataSection from '../Components/DataSection/DataSection'
import { LIVE_COMMON_DATA } from './LiveClassesData'
import { WEB_COMP_DATA } from './ComparisionData'
import { GETRANKS_DATA, ZOOM_DATA } from './ComparisionData'
import  Educational from'../../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../../LandingPages/Achievement/AchievementSoFar'
import AvailableOn from '../../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../../components/Footer/Footer'

export default function LiveClasses(){

  // step 1 
  function displayOpenBanner(){
    return(
      <div className={s.openBannerCont}>
      <Products 
        name={'Live Classes'} 
        backgColor={'#ffece0'}
        moduleImage ='/images/LiveClasses/Live.svg'
        moduleColor = '#ff6400'
        mainText = 'Maximize the learning of your students'
        mainTextWidth= {s.MainTextWidth}
        subText='A powerful teaching module that facilitates distance learning, promote positive student behaviour, engage parents in the learning process and reduce teacher workload all from one easy-to-use platform.'
        subTextWidth = { s.subTextWidth}
        WebbackImage= '/images/LiveClasses/LiveClassesWeb.webp'
        mobileBackImage= '/images/LiveClasses/LiveClassesMobile.webp'
      />
       <img className={s.UnderlineStyle} src='/images/underlineStyle.svg' alt='underline'/>
       <img className={s.WebImage} src='/images/LiveClasses/LiveClassesWeb.webp' alt='icon'/>
    </div>
    )
  }


// step 2 Live CLass
function displayLiveClass(){
  return(
    <div className={s.liveClassMainCont}>
      <div className={s.contentBox}>

        <div className={s.dataSectionLive}>
          <div className={s.moduleIcon}>
            <ModuleImage
                moduleImage= '/images/LiveClasses/LiveModuleImage.svg'
            />
          </div>
          <div className={s.liveMainText}>Live</div>
        </div>

        <div className={s.TextBox}>
          <div className={s.integrationArrange}>

            <div className={s.getRanksZoomArrange}>
              <img src='/images/LiveClasses/getranks copy.svg' alt='getranks'/>
              <div className={s.plus}>+</div>
              <img src='/images/LiveClasses/Zoom-Logo-Download 1.webp' alt='zoom'/>
            </div>

            <div className={s.liveSubText}>Integration</div>
          </div>

          <div className={s.liveSubText}>ZOOM Integration Zoom is integrated with GetRanks. 
                All Benefits-In, All Limitations-out
          </div>
          <div className={s.liveSubText2}>No matter where education takes place, “Egnify Live with Zoom” can help engage students, faculty, and staff for learning, collaboration, and administration.</div>
        </div>

      </div>
      <div className={s.imageCont}>
        <ProductsImage
          dataImage='/images/LiveClasses/1.LiveClasses.webp'
          topBaloonColor='#f2e5fe'
          bottomBaloonColor='#ffe0e8'
          // topAdjust={s.topballonAdjust}
          // bottomAdjust={s.bottomballonAdjust}
        />
      </div>

    </div>
  )
}

// step 3 Data
 function displayData(){
  return(
    <>
    {
      LIVE_COMMON_DATA.map((item,index)=>{
        return(
          <div className={s.dataMainCont} key={index}>
            <div className={`${index % 2 != 0 ?s.imageDataArrange: s.imageDataArrange2}`}>
              <div className={`${s.mainTextBox} ${index % 2 != 0 ?s.textboxRow: s.textboxReverse}`}>
                <DataSection 
                  mainText={item.mainHeading}
                  subText={item.subtext}
                />
              </div>
              <div className={s.imageCont}>
                {/* <div>{item.bTopColor}</div>
                <div>{item.bBottomColor}</div> */}
                <ProductsImage
                  dataImage={item.image}
                  topBaloonColor={item.bTopColor}
                  bottomBaloonColor={item.bBottomColor}
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


//  step4

 function getranksZoomComparision(){
  return(
    <div className={s.comparisionMainCont}>
      <div className={s.comparisionMainText}>GetRanks + Zoom is more powerful than Zoom alone</div>

        <div className={s.webComparision}>
          {/* negativepoints */}
          <div className={s.negativepostiveArrange}>
            <div className={s.negativePointsCont}>
              <div className={s.npText}>Negative Points</div>
              <div className={s.negativeSquareBox}></div>
            </div>
            <div className={s.positivePointsCont}>
              <div className={s.npText}>Positive Points</div>
              <div className={s.positiveSquareBox}></div>
            </div>
          </div>

          {/*  */}
          <div className={s.flexSideArrange}>
            <div className={s.zoomHeading}>
                <div>Zoom Only</div>
            </div>
            <div className={s.getranksheading}>
                <div>GetRanks + Zoom</div>
            </div>
          </div>

          {/* data */}
          {
            WEB_COMP_DATA.map((item,index)=>{
              return(
                <div className={s.compDataCont} key={index}>
                  <div className={s.zoomDataCont}>
                    <ul className={s.negativeBullets}>
                      <li className={s.npText+' '+s.bulletColor}>{item.zoomdata}</li>
                      {
                        (item.zoomsubdata || []).map((item2,index2)=>{
                          return(
                            <div key={index2}>
                                <div className={s.npText+' '+s.divTextSpace}>{item2}</div>
                            </div>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className={s.getranksDataCont}>
                    <ul className={s.positiveBullets}>
                        <li className={s.npText+' '+s.bulletColor}>{item.getranksdata}</li>
                        {
                          (item.getrankssubdata || [] ) .map((item3,index3)=>{
                            return(
                              <div key={index3}>
                                <div className={s.npText+' '+s.divTextSpace}>{item3}</div>
                              </div>
                            )
                          })
                        }
                    </ul>
        
                  </div>
                </div>
              )
            })
          }

        </div>
       {/* mobile */}
      <div>
        <div className={s.mobileComparision}>

          <div className={s.positivePointsCont}>
            <div className={s.npText}>Positive Points</div>
            <div className={s.positiveSquareBox}></div>
          </div>

          <div className={s.getranksheading}>
            <div>GetRanks + Zoom</div>
          </div>

          <div className={s.getranksMobileDataCont}>
            {
              GETRANKS_DATA.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={s.getranksDataCont}>
                      <ul  className={s.positiveBullets}>
                        <li  className={s.npText+' '+s.bulletColor}>{item.name}</li>
                        {
                          (item.subdata || []).map((item2,index2)=>{
                            return(
                              <div className={s.npText} key={index2}>{item2}</div>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* negative points */}
          <div className={s.positivePointsCont+' '+s.marginT24}>
            <div className={s.npText}>Negative Points</div>
            <div className={s.negativeSquareBox}></div>
          </div>
          
          <div className={s.getranksheading}>
            <div>Zoom Only</div>
          </div>

          <div className={s.zoomMobileDataCont}>
            {
              ZOOM_DATA.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={s.zoomDataCont}>
                      <ul className={s.negativeBullets}>
                        <li className={s.npText+' '+s.bulletColor}>{item.name}</li>
                        {
                          (item.subdata || []).map((item2,index2)=>{
                            return(
                              <div className={s.npText} key={index2}>{item2}</div>
                            )
                          })
                        }
                      
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

  </div>

  )
 }


  return (
  <>
    <div className={s.mainCont}>
      { displayOpenBanner()}
    </div>
    <Educational/>
    <AchievementSoFar/>
    { displayLiveClass() }
    <div className={s.dataCont}>
      { displayData() }
    </div> 
    { getranksZoomComparision() }
    <AvailableOn/>
    <Footer/>
  </>
  )
}