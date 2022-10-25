import React from 'react'
import Products from '../../../components/Products/Products'
import s from './assignments.module.css'
import Educational from '../../LandingPages/EducationalInstitutions/Educational'
import AchievementSoFar from '../../LandingPages/Achievement/AchievementSoFar'
import ProductsImage from '../Components/ProductsImageData/ProductsImage'
import DataSection from '../Components/DataSection/DataSection'
import AvailableOn from '../../LandingPages/AvailableOn/AvailableOn'
import Footer from '../../../components/Footer/Footer'

export default function Assignments() {

  const data =[
    {      
      modName: 'Anytime, Anywhere Assignments:',
      modText: 'Create and publish assignments from any location and on any device to any group of students.',
      bTopColor: '#F4DBFD',
      bBottomColor: '#FBD5E0',
      mainImage: '/images/Assignments/studentAssignments 1.webp'
    },
    {     
      modName: 'Grade Faster with Easy-to-Use Tools:',
      modText: 'All information is right at the teacher’s fingertips with our intuitive and user-friendly interface',
      bTopColor: '#B9FFF1',
      bBottomColor: '#FCD7E1',
      mainImage: '/images/Assignments/StudentsAssignments2.webp'
    },
    {      
      modName: 'Quick-Fill Capabilities:',
      modText: 'Significant time savings with quick-fill options for entering scores',
      bTopColor: '#F4DBFD',
      bBottomColor: '#FED9E4',
      mainImage: '/images/Assignments/StudentsAssignments3.webp'
    },
    {
      modName: 'Keep Parents and Students Informed:',
      modText: 'Give families access to online grades from anywhere. Real-time insight into student progress boosts engagement and supports classroom success.',
      bTopColor: '#B8FFF0',
      bBottomColor: '#FAD5E0',
      mainImage: '/images/Assignments/StudentsAssignments4.webp'
    },
  ]


  const compData = [
    {
      data1: 'Ready, Set, Grade',
      data2: 'Grade anywhere, anytime. With GetRanks, teachers can grade assessments with ease from any Internet connected device from anywhere.',
      data3: 'Paper, paper and more paper. Teachers are forced to stay late at school to grade assessments or carry stacks of paper home and back.',
    },
    {
      data1: 'Collaboration',
      data2: 'Teachers can collaboratively evaluate student work online with moderation. The moderated evaluations can be performed anywhere and at anytime.',
      data3: 'Moderated grading requires teachers to assemble in the same room at the same time. Scheduling is a hassle.',
    },
    {
      data1: 'Feedback',
      data2: 'Teachers can provide rich feedback that includes annotations, comments, scores, embedded images and hyperlinks to online resources to support further learning.',
      data3: 'Teachers use a red pen to provide comments in the margin with a number score.',
    },
    {
      data1: 'Student Portfolio',
      data2: 'A digital copy of student homework, assignments, lab reports, midterms and finals together with teacher feedback is stored in the cloud creating an easily accessible student portfolio.',
      data3: 'Assessments can be stored in a file folder at home or at school. That is, if pages aren’t lost or forgotten.',
    },
    {
      data1: 'Parent Engagement',
      data2: 'Teachers can access the student portfolio to enrich discussions with parents by showing examples of student work. Teachers can digitally share student work and associated assessment feedback with parents.',
      data3: 'Parents are sometimes shown scores in a grade book. Examples of student work can be sent home in the student’s backpack to parents for review.',
    },
  ]


// step 3 Data
function displayData(){
  return(
    <>
    {/* <div>{DOUBTS_DATA[0].mainHeading}</div>
    <div>ROhtih</div> */}
    {
      data.map((item,index)=>{
        return(
          <div className={s.dataMainCont} key={index}>
            <div className={`${index % 2 != 0 ?s.imageDataArrange: s.imageDataArrange2  }`}>
              <div className={`${s.mainTextBox} ${index % 2 != 0 ?s.textboxRow: s.textboxReverse}`}>
                <DataSection
                  mainText={item.modName}
                  subText={item.modText}
                />
              </div>
              <div className={s.imageCont}>
                
                <ProductsImage
                  dataImage={item.mainImage}
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


//  step 4
function displayComparisionData(){
  return(
    <div className={s.compMainCont}>

      <div className={s.compHeaderCont}>
        <div className={s.compCol1}>
          See how we compare to the status quo:
        </div>
        <div className={s.compCol2}>
         <img src='/images/Assignments/compLogo.svg' alt='icon'/>
        </div>
        <div className={s.compCol3}>
          Status Quo
        </div>
      </div>

      <div className={s.compDataCont}>
        {
          compData.map((item,index)=>{
            return(
              <div key={index} className={s.dataArrange}>
                <div className={s.compData1}>{item.data1}</div>
                <div className={s.compData2}>{item.data2}</div>
                <div className={s.compData3}>{item.data3}</div>
              </div>
            )
          })
        }
        {/* <div className={s.compData1}>{compData[0].data1}</div>
        <div className={s.compData2}>{compData[0].data2}</div>
        <div className={s.compData3}>{compData[0].data3}</div> */}
      </div>
     

    </div>
  )
}

  return (
  <>
    <div className={s.mainCont}>
      <Products 
        name='Assignments' 
        backgColor='#d0f8ff'
        moduleImage ='/images/Assignments/Group 677.svg'
        moduleColor = '#1f8ea3'
        mainText = 'Create and Grade your Assignments anywhere and anytime.'
        subText='Seamlessly Create, Administer and Grade all of your Assignments, whether online or in-class. Save time grading and get a clear picture of how your students are doing.'
        WebbackImage= ''
        mobileBackImage= '/images/Assignments/Group 2716.webp'
        mainTextWidth= {s.MainTextWidth}
        subTextWidth = { s.subTextWidth}
        mobileimageWidthHeight = { s.MobileImageWidth}
      />
      {/* <img className={s.UnderlineStyle} src='/images/underlineStyle.svg' alt='underline'/> */}
      <img className={s.WebImage} src='/images/Assignments/AssignmentsWeb.webp' alt='icon'/>
    </div>
    <Educational/>
    <AchievementSoFar/>
    <div className={s.dataCont}>
      { displayData() }
    </div> 
    { displayComparisionData() }
    <AvailableOn />
    <Footer/>
  </>
  )
}

