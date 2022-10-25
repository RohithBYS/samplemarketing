import React from 'react'
import s from './footer.module.css'

export default function Footer(props) {

  function mobileFooter(){
    return(
      <div className={s.mobileMainCont} style={{backgroundColor: props.selColor}}>
       <div className={s.footerLinksCont+' '+s.downArrange}>

          <div className={s.aboutText}>Links</div>
          <div className='flexDownArrange g-4'>
            <a href='#' className={s.linkTextMobile}>About Us</a>
            <a href='#' className={s.linkTextMobile}>Pricing Plan</a>
            <a href='#' className={s.linkTextMobile}>Contact Us</a>
            <a href='#' className={s.linkTextMobile}>Privacy Policy</a>
            <a href='#' className={s.linkTextMobile}>Cancellation & Return Policy</a>
            <a href='#' className={s.linkTextMobile}>Terms & Conditions</a>
          </div>

       </div>

        <div className={s.footerLogo}>
          <img src='/images/footer_logo.svg' alt='logo'/>
        </div>

        {/* address box */}
        <div className={s.mobileAddressBox}>

          <div className={s.addressBoxCont}>
            <div className={s.officeNameHeadingText}>Hyderabad Office-1</div>
            <div className={s.addressTextMobile}>
              1-2/1/24/A/1,7, Plot No 17, 
              Opp. Bharat Petrol Bunk, 
              JNTU Rd, Hi-Tech City
              Hyderabad, Telangana 500084
            </div>
          </div>

          <div className={s.addressBoxCont}>
            <div className={s.officeNameHeadingText}>Hyderabad Office-2</div>
            <div className={s.addressTextMobile}>
              1-2/1/24/A/1,7, Plot No 17
              Opp. Bharat Petrol Bunk, JNTU Rd, Hi-Tech City
              Hyderabad, Telangana 500084
            </div>
          </div>

          <div className={s.addressBoxCont}>
            <div className={s.officeNameHeadingText}>Bengaluru Office</div>
            <div className={s.addressTextMobile}>
              Prestige Atlanta, 80 Feet Main Road, Koramangala 1A Block, Bengaluru, 
              Karnataka 560034
            </div>
          </div>
        </div>

        {/* social media icons */}
        <div  className={s.mobSocialMediaBox}>
              <img src='/images/facebook logo.svg' alt='facebook'/>
              <img src='/images/youtube logo.svg' alt='youtube'/>
              <img src='/images/linkedin logo.svg' alt='linkedin'/>
              <img src='/images/twitter logo.svg' alt='twitter'/>
              <img src='/images/instagram logo.svg' alt='instagram'/>
            </div>

      </div>
    )
  }



  function webFooter(){
    return(
      <div className={s.mainCont} style={{backgroundColor: props.selColor}}>
    <div className={s.innerCont}>
      <img src='/images/footer_logo.svg' alt='logo'/>
      <div className={s.addressBoxAlign}>

        <div className={s.addressBox}>
          <div className={s.cityText}>Hyderabad Office-1</div>
          <div className={s.addressText}>
            Krishe Emerald, Kondapur Main Road,
            Laxmi Cyber City, Whitefields,
              Kondapur, Hyderabad, Telangana 500081
          </div>
        </div>

        <div className={s.addressBox+' '+s.paddingLeft}>
          <div className={s.cityText}>Hyderabad Office-2</div>
          <div className={s.addressText}>
            1-2/1/24/A/1,7, Plot No 17, 
            Opp. Bharat Petrol Bunk, 
            JNTU Rd, Hi-Tech City
            Hyderabad, Telangana 500084
          </div>
        </div>

        <div className={s.addressBox+' '+s.paddingLeft}>
          <div className={s.cityText}>Bengaluru Office</div>
          <div className={s.addressText}>
          Prestige Atlanta, 80 Feet Main Road, Koramangala 1A Block, Bengaluru, 
            Karnataka 560034
          </div>
        </div>


        <div className={s.addressBox+' '+s.paddingLeft}>
          <div className={s.cityText}>Links</div>
          <div className={s.linkTextBox}>
            <div className={s.linkText}>Contact us</div>
            <div className={s.linkText}>Privacy & Terms</div>
            <div className={s.linkText}>Cancellation & Return Policy</div>
          </div>
        </div>
        
        <div className={s.socialBox+' '+s.paddingLeft}>
            <div className={s.cityText}>Social</div>
            <div  className={s.socialMediaBox}>
              <img src='/images/facebook logo.svg' alt='facebook'/>
              <img src='/images/youtube logo.svg' alt='youtube'/>
              <img src='/images/linkedin logo.svg' alt='linkedin'/>
              <img src='/images/twitter logo.svg' alt='twitter'/>
              <img src='/images/instagram logo.svg' alt='instagram'/>
            </div>
            
        </div>

      </div>
    </div>
  </div>
    )
  }

  return (
    <div>
      {webFooter()}
      {mobileFooter()}
    </div>
  
  )
}
