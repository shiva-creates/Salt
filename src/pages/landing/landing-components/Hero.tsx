import './Hero.css'
import heroImage from '../../../assets/images/hero-img.png'
import heroMobileImage from '../../../assets/images/hero-mobile-img.png'
import heroIcon from '../../../assets/images/p-icon1.png'
import logoImg from '../../../assets/images/pLOGO2.png'
import { Link } from 'react-router-dom'

function Hero(){
    return(
        <div>
        <div className='hero-container'>
            <div className='left-section'>
            <div className='hero-heading'>Healthy! Tasty!</div>
        
            <div className='hero-heading'>Simply <span><img className='hero-logo-img' src={ logoImg } alt="" /></span>lenty!!</div>
            <div className='hero-subheading'>Every CELEBRATION, REFERRAL</div>
             <div className='hero-subheading'>comes with a rewarding touch.</div>
           <Link to='/#reward'> <div className='hero-link'>Click to know more</div></Link>
            </div>

            <div className='right-section'>
            <img className='hero-img hero-web-image' src={ heroImage } alt="" />
            <img className='hero-img hero-mobile-image' src={ heroMobileImage } alt="" />
            </div>
        </div>
        <div className='marquee'>
        <img className='hero-icon' src={ heroIcon } alt="" />
            <div>Special offers for festivals, birthdays, and more</div>
        </div>
        </div>
    )
}

export default Hero;