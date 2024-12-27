import './Content.css'
import '@splidejs/react-splide/css';
import item1Image from '../../../../assets/images/item1.png';
import item2Image from '../../../../assets/images/item2.png';
import item3Image from '../../../../assets/images/item3.png';
import item4Image from '../../../../assets/images/item4.png';
import calenderImg from '../../../../assets/images/calender.jpg';
import healthIconImg from '../../../../assets/images/helthyIcon2.png';
import dietIconImg from '../../../../assets/images/dietIcn3.png';
import fruitImg from '../../../../assets/images/freshIcon2.png';
import careIconImg from '../../../../assets/images/peopleIcon2.png';
import ratingStar from '../../../../assets/images/rating-star.png';

import subsIcon from '../../../../assets/images/subscription-business-model.png';
import rewardIcon from '../../../../assets/images/loyal-customer.png';
import IngredientsIcon from '../../../../assets/images/ingredient.png';
import foodSafetyIcon from '../../../../assets/images/food-safety.png';
import startingIcon from '../../../../assets/images/start.png';
import { useEffect, useRef, useState } from 'react';
import FaqModalOne from '../faq-modal-content/FaqModalOne';
import FaqModalTwo from '../faq-modal-content/FaqModalTwo';
import Modal from '../../../../models/Modal';
import FaqModalFive from '../faq-modal-content/FaqModalFive';
import FaqModalFour from '../faq-modal-content/FaqModalFour';
import FaqModalThree from '../faq-modal-content/FaqModalThree';
import { useLocation, useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import useDialogToggle from '../../../../models/useModal';

function Content() {

    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
    const { dialogRef, toggleDialog } = useDialogToggle();
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash === '#faq' && section1Ref.current) {
            section1Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#reward' && section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const handleNavigation = (location: string) => {
        if (location === 'menu') {
            navigate('/menu');
        } else if (location === 'meal-plan') {
            navigate('/meal-plan');
        }
    }

    return (
        <>
            <div className="cards-container flex-center">
                <div className="card-one flex-center animate-component">
                    <div className='card-img-container'>
                        <img className='card-one-img' src={item1Image} alt="Non veg food" />
                    </div>
                    <div className='text-styling card-text'>
                        Get fresh food delivered
                    </div>
                    <button className='card-btn text-styling' onClick={() => handleNavigation('menu')}>Order now</button>
                </div>

                <div className="card-one flex-center animate-component">
                    <div className='card-img-container'>

                        <img className='card-one-img' src={calenderImg} alt="Calendar" />
                    </div>
                    <div className='text-styling card-text'>
                        Subscription plans at great price
                    </div>
                    <button className='card-btn text-styling' onClick={() => handleNavigation('meal-plan')}>Subscribe now</button>
                </div>
            </div>

            <div className='value-props-container flex-center'>
                <div className='vp-header animate-component'>
                    Why people will love Plenty?
                </div>
                <div className='icon-card-container animate-component'>

                    <div className='props-one'>
                        <img className='icon-one-img' src={healthIconImg} alt="calender" />
                        <div className="text-styling icon-header un">
                            Healthy &amp; Hygienic
                        </div>
                        <div className="icon-subheader">
                            We prioritize your health and maintain strict hygiene standards.
                        </div>
                    </div>

                    <div className='props-one'>
                        <img className='icon-one-img' src={fruitImg} alt="calender" />
                        <div className="text-styling icon-header un">
                            Fresh &amp; Fast
                        </div>
                        <div className="icon-subheader">
                            Our meals arrive fresh and fast, straight to your door.
                        </div>
                    </div>

                    <div className='props-one'>
                        <img className='icon-one-img' src={dietIconImg} alt="calender" />
                        <div className="text-styling icon-header un">
                            Designed by Dietitians
                        </div>
                        <div className="icon-subheader">
                            Expertly crafted meals for your well-being and enjoyment.
                        </div>
                    </div>

                    <div className='props-one'>
                        <img className='icon-one-img' src={careIconImg} alt="calender" />
                        <div className="text-styling icon-header un">
                            People over Profits
                        </div>
                        <div className="icon-subheader">
                            Your satisfaction matters most. We&#39;re here for you.
                        </div>
                    </div>
                </div>
            </div>


            <div className="faq-main-container" id="faq" ref={section1Ref}>
                <div className='vp-header animate-component'>
                    Frequently Asked Questions
                </div>
                <div className="faq-upper-container">
                    <div className="faq-card" onClick={() => { setDialogContent(<FaqModalOne />); toggleDialog(); }}>
                        <img className='faq-icon' src={subsIcon} alt="faqIcon" />
                        <div className='text-styling faq-text'>
                            Managing My Subscription
                        </div>
                    </div>
                    <div className="faq-card" onClick={() => { setDialogContent(<FaqModalTwo />); toggleDialog(); }}>
                        <img className='faq-icon' src={rewardIcon} alt="faqIcon" />
                        <div className='text-styling faq-text'>
                            Reward Program
                        </div>
                    </div>
                    <div className="faq-card" onClick={() => { setDialogContent(<FaqModalThree />); toggleDialog(); }}>
                        <img className='faq-icon' src={IngredientsIcon} alt="faqIcon" />
                        <div className='text-styling faq-text'>
                            Ingredients &amp; Nutrition
                        </div>
                    </div>

                    <div className="faq-card" onClick={() => { setDialogContent(<FaqModalFour />); toggleDialog(); }}>
                        <img className='faq-icon' src={foodSafetyIcon} alt="faqIcon" />
                        <div className='text-styling faq-text'>
                            Food Safety
                        </div>
                    </div>
                    <div className="faq-card" onClick={() => { setDialogContent(<FaqModalFive />); toggleDialog(); }}>
                        <img className='faq-icon' src={startingIcon} alt="faqIcon" />
                        <div className='text-styling faq-text'>
                            Getting Started
                        </div>
                    </div>

                </div>


            </div>
            <div className="dialog-container">
                <Modal toggleDialog={toggleDialog} ref={dialogRef}>
                    {dialogContent}
                </Modal>
            </div>

            <div className='landing-menu-container flex-center'>
                <div className='vp-header animate-component'>
                    Explore the Menu
                </div>
                <div className="cards-two-container">
                    <div className='cards-two-inner-container'>
                        <div className="card-two flex-center animate-component">
                            <div className='card-two-img-container'>

                                <img className='card-two-img' src={item1Image} alt="Non veg food" />

                            </div>
                            <div className='text-styling card-text'>
                                Basmati Rice & Chermoula
                            </div>
                        </div>

                        <div className="card-two flex-center animate-component">
                            <div className='card-two-img-container'>
                                <img className='card-two-img' src={item2Image} alt="Calender" />
                            </div>
                            <div className='text-styling card-text'>
                                Basmati Rice & Chermoula
                            </div>
                        </div>
                    </div>

                    <div className='cards-two-inner-container'>
                        <div className="card-two flex-center animate-component">
                            <div className='card-two-img-container'>
                                <img className='card-two-img' src={item3Image} alt="Calender" />
                            </div>
                            <div className='text-styling card-text'>
                                Basmati Rice & Chermoula
                            </div>
                        </div>

                        <div className="card-two flex-center animate-component">
                            <div className='card-two-img-container'>
                                <img className='card-two-img' src={item4Image} alt="Calender" />
                            </div>
                            <div className='text-styling card-text'>
                                Basmati Rice & Chermoula
                            </div>
                        </div>

                    </div>
                </div>
                <button className='card-btn text-styling menu-card-btn' onClick={() => handleNavigation('menu')}>View full menu</button>
            </div>

            <div className='reward-program-contianer' id="reward" ref={section2Ref}>
                <div className='vp-header animate-component'>
                    How Does the Reward Program Work?
                </div>

                <div className='sub-info animate-component'>
                    (1 reward point equals 1 rupee)
                </div>

                <div className='reward-container animate-component'>
                    <ul className="accordion">
                        <li>
                            <input type="checkbox" id="first" />
                            <label htmlFor="first">Refer a Friend, Get Rewarded</label>
                            <div className="content">
                                <p>
                                    When your friend subscribes through your unique referral ID, you will be
                                    rewarded with 10% of your friend&#39;s subscription package. Additionally, your
                                    friend will receive 200 rewards.
                                </p>
                            </div>
                        </li>

                        <li>
                            <input type="checkbox" id="second" />
                            <label htmlFor="second">Your Birthday is Special to Us</label>
                            <div className="content">
                                <p>
                                    We will reward you with 10x points of your age. Let&#39;s celebrate together!
                                </p>
                            </div>
                        </li>

                        <li>
                            <input type="checkbox" id="third" />
                            <label htmlFor="third">Get Rewarded for Sharing Joy</label>
                            <div className="content">
                                <p>
                                    Follow us on Instagram and tag us when sharing your experience. We will reward
                                    you with 10 points each time, up to 100 points per month.
                                </p>
                            </div>
                        </li>

                        <li>
                            <input type="checkbox" id="fourth" />
                            <label htmlFor="fourth">Festivals and More</label>
                            <div className="content">
                                <p>
                                    Stay tuned for more exciting rewards and promotions.
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="testimonial-container">
                <div className='vp-header animate-component'>
                    Loved by thousands of customers.
                </div>

                <div className="testimonial-card-container">
                    <Splide aria-label="My Favorite Images" options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        margin: '3rem',
                        rewind: true,
                        padding: '1rem',
                        breakpoints: {
                            1025: {
                                perPage: 2,
                            },
                            600: {
                                perPage: 1,
                            },
                        }
                    }}>


                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="tetsimonial-card">
                                <div className="tetsimonial-inner-card">
                                    <div className="avatar flex-center">
                                        <div className="avatar-icon">I</div>
                                        <div className="avatar-name text-styling">Ian</div>
                                    </div>
                                    <div className="rating-container">
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                        <img className='rating-img' src={ratingStar} alt="Five Stars" />
                                    </div>
                                    <div className='text-styling card-text review-text'>
                                        Great Taste
                                    </div>
                                    <div className="icon-subheader">
                                        Lorem ipsum or sit, oectetur adiscing. Lorem ipsum dolor sit, consectetur adipiscing.
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Content;