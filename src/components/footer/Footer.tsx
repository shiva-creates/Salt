import './Footer.css'
import pLogo from '../../assets/images/pLOGO2.png'
import whatsAppIcon from '../../assets/images/whatsapp.png'
import facebookIcon from '../../assets/images/facebook.png'
import insta from '../../assets/images/instagram.png'
function Footer(){
    return(
    <>
    <footer className="site-footer">
  <div className="page page-four">
    <div className="logo-info">
      <div className='logo-container'>
      <div className="logo-txt contact-header"><img className="contact-logo-img" src={pLogo}
          alt="logo" />
      </div>
      <div>
      <div className="p-logo-text contact-header">Plenty</div>
      <div>Copyright © 2023 Plenty</div>
      </div>
      </div>
    </div>
    <div className="contact-info">
      <div className="contact-header">Quick Links.</div>
      <div className="nav-btn" >Menu</div>
       <div className="nav-btn" >Meal Plan</div>
      <div className="nav-btn" >FAQs</div>
      <div className="nav-btn" >Reward</div>
      {/* <div className="nav-btn" >Contact Us</div> */}
    </div>
    <div className="contact-info">
      <div className="contact-header">Contact.</div>
      <div>+91 989899898</div>
      <div>example@abc.com</div>
      <div className="contact-social">
        <a href=""><img className="social-img nav-btn"
            src={whatsAppIcon} alt="Whatsapp" /></a>
        <a href=""><img className="social-img nav-btn"
            src={facebookIcon} alt="Facebook" /></a>
        <a href=""><img className="social-img nav-btn"
            src={insta} alt="instagram" /></a>
      </div>
    </div>
    <div className="location-info">
      <div className="contact-header">Legal.</div>
      <div className="nav-btn" >Privacy Policies</div>
       <div className="nav-btn" >Data Protection</div>
    </div>
  </div>
</footer>
    
    </>
    )
}

export default Footer;

