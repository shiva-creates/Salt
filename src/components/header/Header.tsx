import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css'
import logo from '../../assets/images/pLOGO2.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import rewardBadges from '../../assets/images/favorite.png'
import { useEffect, useRef, useState } from 'react';
import LogInModalContent from '../../models/log-in-modal/LogInModalContet';
import Modal from '../../models/Modal';
import rewardImg from '../../assets/images/reward.png'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getCartItems } from '../../store/slices/cartSlice/cartSlice';
import useDialogToggle from '../../models/useModal';
import { logOut } from '../../store/slices/logInSlice/logInSlice';
import { currentUserId } from '../../store/slices/userIdSlice/userIdSlice';
import { v4 as uuidv4 } from 'uuid';

function Header({ size }: { size: any }) {
    const cartData = useSelector((state : RootState) => state.cartSlice?.data);
    const userId = useSelector((state : RootState) => state.userIdSlice?.userId);
    const dispatch = useDispatch<AppDispatch>();
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
    const { dialogRef, toggleDialog } = useDialogToggle();
    const [isActive, setActive] = useState(false);
    const [rewardPoints, setRewardPoints] = useState(0);
    const navigate = useNavigate();
    const logInData = useSelector((state: RootState) => state.logInSlice?.data)
    const userName = logInData?.userName;


    useEffect(() => {
        if(userId !== '0'){
            dispatch(getCartItems(userId));
        }
    }, [dispatch, userId]);



    const handleProfileClick = (event: any) => {
        event.stopPropagation();
        navigate('/profile');
    };

    const handleLogOutClick = async (event: any) => {
        event.stopPropagation();
        await dispatch(logOut());
        await dispatch(currentUserId(uuidv4()))
        navigate('/');
    };

    return (
        <>
            <div className="header-container web-view">
                <div className='menu-items'>
                    <NavLink to="/" ><div>Home</div></NavLink>
                    <NavLink to="/menu"><div>Menu</div></NavLink>
                    <NavLink to="/meal-plan"><div>Meal Plan</div></NavLink>
                    <NavLink to="/#faq"><div>FAQs</div></NavLink>
                </div>
                <div className="logo-container">
                    <img className='logo-img' src={logo} alt="logo" />
                </div>
                <div className='menu-items'>
                    <NavLink to="/#reward"><div className='rewards-dropdown'>
                        <span>Reward<span className='rewards-items-count'><img className='reward-badge' src={rewardBadges} alt="rewards" />{rewardPoints}</span>
                        </span>
                        <section className="rewards-dropdown-content">
                            <p className='total-reward-text'>Total Reward Points : <img className='profile-reward-badge' src={rewardImg} alt="Reward" /> <span className='reward-txt'>0</span> </p>
                        </section>
                    </div>
                    </NavLink>
                    <NavLink to="/cart"><div>Cart <span className='cart-items-count'>{cartData.length}</span></div></NavLink>
                    {
                        userName ? <UserDiv userName={userName} handleProfileClick={handleProfileClick} handleLogOutClick={handleLogOutClick} /> : <LogInDiv setDialogContent={setDialogContent} toggleDialog={toggleDialog} />
                    }
                </div>
            </div>

            <div className="dialog-container">
                <Modal toggleDialog={toggleDialog} ref={dialogRef}>
                    {dialogContent}
                </Modal>
            </div>

            <div className="header-container mobile-view">
                <div className="logo-container">
                    <img className='logo-img' src={logo} alt="logo" />
                </div>

                <div>
                    <img onClick={() => setActive(!isActive)} className='menu-img' src={menu} alt="logo" />
                </div>


            </div>
            <div
                className={`${isActive ? "menu-option-container" : "menu-option-container-hidden"}`}>
                <NavLink onClick={() => setActive(!isActive)} to="/" ><div>Home</div></NavLink>
                <NavLink onClick={() => setActive(!isActive)} to="/menu"><div>Menu</div></NavLink>
                <NavLink onClick={() => setActive(!isActive)} to="/meal-plan"><div>Meal Plan</div></NavLink>
                <NavLink onClick={() => setActive(!isActive)} to="/#faq"><div>FAQs</div></NavLink>
                <NavLink onClick={() => setActive(!isActive)} to="/#reward"><div>Reward</div></NavLink>
                <NavLink className="cart-menu-option" onClick={() => setActive(!isActive)} to="/cart"><div>Cart <span className='cart-items-count'>{size}</span></div></NavLink>
                <div onClick={() => { setDialogContent(<LogInModalContent toggleDialog={toggleDialog} />); toggleDialog(); setActive(!isActive); }}>Log In</div>
            </div>
        </>
    )
}

const UserDiv = ({ userName, handleProfileClick, handleLogOutClick }: { userName: string, handleProfileClick: any, handleLogOutClick: any }) => {
    return (
        <>
            <div className='user-profile-dropdown'>
                <span className='header-flex-center'>
                <span><img className='header-user-img' src={user} alt="user"/></span> <span>{userName}</span>  
                </span>
                <section className="user-profile-dropdown-content">
                    <p onClick={handleProfileClick}>Profile</p>
                    <p onClick={handleLogOutClick}>Log Out</p>
                </section>
            </div>
        </>
    )
}

const LogInDiv = ({ setDialogContent, toggleDialog }: { setDialogContent: any, toggleDialog: any }) => {
    return (
        <>
            <div className='user-profile-dropdown' onClick={() => { setDialogContent(<LogInModalContent toggleDialog={toggleDialog} />); toggleDialog(); }}>
                <span>
                    Log In
                </span>
            </div>

        </>
    )
}

export default Header;