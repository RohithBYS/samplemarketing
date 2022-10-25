import React from 'react'
import s from './header.module.css'
import { useState,useEffect, useRef} from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Header() {

  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedDropdown, setSelectedDropdown] = useState('Products')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const ref = useRef(null)

  useEffect(()=> {
    const handleClickOutside = (event) =>{
      if(ref.current && !ref.current.contains(event.target)){
        setShowDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside ,true)
    return () => { 
      document.removeEventListener('click', handleClickOutside ,true)
    }
  }
  , [ref])
  
  // Navigation Data
const navigationData = [
  {
    name: 'Products',
    subdata: [
      {
        name: 'Online Testst',
        icon: '/images/Tests.svg',
        url: '/onlinetests'
      },
      {
        name: 'Live Classes',
        icon: '/images/Live.svg',
        url: '/liveclasses'
      },
      {
        name: 'Doubts',
        icon: '/images/Doubts.svg',
        url: '/doubts'
      },
      {
        name: 'Assignments',
        icon: '/images/Assignments.svg',
        url: '/assignments'
      },
      {
        name: 'Connect',
        icon: '/images/InActive_Connect.svg',
        url:'/connect'
      },
    ]
  },

  {
    name: 'Customers',
    url: '/customers',
  },

  {
    name: 'Pricing',
    url:'/pricingmobile',
  },

  {
    name: 'Company',
    subdata: [
      {
        name: 'About Us', 
        icon: false,
        url:'/about',
      },
      {
        name: 'Press',
        icon: false,
        url:'/press',
      },
      {
        name: 'Culture',
        icon: false,
        url:'/culture',
      },
      {
        name: 'Careers',
        icon: false,
        url: '/',
      }
    ]
  },

  {
    name: 'Blog',
    url: '/',
  },

]

  function OnClickHandler(dropdownName, enable){
    setSelectedDropdown(dropdownName)
    setShowDropdown(enable)
    if(dropdownName === 'Pricing'){
      window.location.href='/pricingmobile';
    }

    else if( dropdownName === 'Customers'){
      window.location.href='/customers';
    }
  }




  const dropDownPopUp = (data) =>{
    return(
       
       <div className={s.dropdownContainerActive} ref={ref}>
       {
       (data || [] ).map((item2,index)=>{
         return(
           <div key={index}>
             <div className={s.dropdownBox+' '+s.sideArrange} style={{gap: '10px'}}
              
             >
               {item2.icon != false ? <img src={item2.icon} alt='type-icon'/> : null}
               {/* <div >{item2.name}</div> */}
               <Link to={item2.url} className={s.dropdownText}>{item2.name}</Link>
             </div>   
           </div>
         )
       })
       }    
     </div>
    )
  }

  

  function webNavigation(){
    return(
      <div className={s.navigationCont}>
      <div className={s.innerCont}>

        <div>
          {/* <img className={s.logoClass} src='/images/company_logo.svg' alt='logo'
            onClick={()=>  window.location.href='/'}
          /> */}
          <Link to='/'>
            <img className={s.logoClass} src='/images/company_logo.svg' alt='logo'/>
          </Link>
        </div>

        {/* Navigation Data */}
      <div className={s.sideArrange} style={{gap: '24px'}}>

        {/* mapping data */}
        {
          navigationData.map((item,index)=>{
            return(
              <div key={index}>
                  <div className={s.sideArrange}>
                    {/* <div 
                      onClick={()=> OnClickHandler(item.name,true)}
                    >
                      {item.name}</div> */}
                    {
                      item.subdata ? <div className={s.navigationText} onClick={()=> OnClickHandler(item.name,true)}>
                        {item.name}</div> :  <Link to={item.url} className={s.navigationText}>{item.name}</Link>
                    
                    }
                   
                    {
                      item.subdata && <img className={s.arrowDown} src='/images/arrow_down.svg' alt='down-arrow' />
                    }

                    { 
                      showDropdown && selectedDropdown === item.name && dropDownPopUp(item.subdata)
                    }
                   
                  </div>
              </div>
            )
          })
        }
        <div className={s.sideArrange} style={{gap: '24px'}}>
            <button className={s.scheduleDemoButton}>Schedule demo</button>
            <button className={s.loginButton}>LOGIN</button>
          </div>
      </div>
      


      </div>
    </div>
    )
  }


  function mobileNavigation(){
    return(
      <div className={s.mobileNavMainContainer}>

        <div className={s.spaceBetweenArrange}>
          <img className={s.logoImgMobile} src='/images/company_logo.svg' alt='logo'
            onClick={()=>  window.location.href='/'} 
          />
          <div className='flexSideArrange'>
            <div className={s.demoButtonMobile}>DEMO</div>
            <div className={s.loginButtonMobile}>LOGIN</div>
            <img src={`${showMobileNav ? '/images/close.svg' :  '/images/Icons=Menu.svg'}`} alt='icon'
                onClick={()=> setShowMobileNav(!showMobileNav)}
            />
          </div> 
        </div>

        <div className={`${ showMobileNav ? s.insideCont+' '+s.insideContshow : s.hideInsideCont}`}>
          { 
            navigationData.map((item1,index1)=>{
              return(
                <div key={index1}>

                  <div className={s.mobileNavHeading}
                    onClick={()=> OnClickHandler(item1.name,true)}
                    >
                    <div>{item1.name}</div>
                  
                    {
                      item1.subdata && <img
                       src={`${showDropdown ? '/images/Icons=Chevron down.svg' : '/images/arrow_down.svg'}`} alt='icon'/>
                    }
                    {/* {
                      item1.subdata && showDropdown ? <img src='/images/Icons=Chevron down.svg' alt='up'/> :
                        <img src='/images/arrow_down.svg' alt='down'/>
                    } */}
                    
                  </div>

                  <div className={`${showDropdown && selectedDropdown === item1.name ? s.showMobileNavsubdata : s.mobileNavsubData}`}>
                    {
                      (item1.subdata || [] ).map((item,index)=>{
                        return(
                          <div key={index}>
                            <div className={s.subData}>
                              {item.icon && <img src={item.icon} alt='icon'/>}
                                {/* <div>{item.name}</div> */}
                                <Link to={item.url} className={s.subDataText} >{item.name}</Link>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
              )
            }) 
          }
              

          {/* <div className={s.mobileNavHeading}
            onClick={()=> setShowDropdown(!showDropdown) }
            >
            <div>Company</div>
            <img src={`${showDropdown ? '/images/Icons=Chevron down.svg' : '/images/arrow_down.svg'}`} alt='icon'/>
          </div>

          <div className={`${showDropdown ? s.showMobileNavsubdata : s.mobileNavsubData}`}>
            {
              navigationData[3].subdata.map((item,index)=>{
                return(
                  <div key={index}>
                    <div className={s.subData}>
                      <img src={item.icon} alt='icon'/>
                        <div>{item.name}</div>
                    </div>
                  </div>
                )
              })
            }
          </div> */}


        </div>
      </div>
    )
  }

  return (
    <div>
       {webNavigation()}
       {mobileNavigation()}
       <Outlet/>
    </div>
   
  )
}
