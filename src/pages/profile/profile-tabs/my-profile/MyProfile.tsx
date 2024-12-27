import './MyProfile.css'
import user from '../../../../assets/images/user.png'
import rewardImg from '../../../../assets/images/reward.png'
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../../../store/slices/profileSlice/profileSlice';
import { useEffect } from 'react';
const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state : RootState) => state.logInSlice?.data);
  const userDetailsData = useSelector((state : RootState) => state.profileSlice.data);
  
  useEffect(() => {
    dispatch(getUserById(userData));
}, []);

  const handleNavigation = (event:any) => {
    event.stopPropagation();  
    navigate('/menu');
  };
  return (
    <>          
     <div className="my-profile-container">
      <div className="avatar-container">
        <div className="avatar-image">
          <img className='avatar-img' src={user} alt="user" />
        </div>
        <div className="avatar-details">
          <div className="profile-avatar-name">
          {userDetailsData?.username}
          </div>
        </div>
        <div className="profile-avatar-details">
          <div className="profile-details">
            <div className="email-container">
              <span className="profile-header">
                Email :
              </span>
              <span className="profile-detail">
          {userDetailsData?.email}
              </span>
            </div>
            <div className="email-container">
              <span className="profile-header">
                Mobile Number :
              </span>
              <span className="profile-detail">
                 +91{userDetailsData?.phonenumber}
              </span>
            </div>
            <div className="email-container">
              <span className="profile-header">
                DOB :
              </span>
              <span className="profile-detail">
                 10/01/2024
              </span>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="order-history-header">
        Rewards
      </div>
    <div className="order-list-container">
      <div className='rewards-container'> 
    <div className='total-reward'>Total Reward Points : <img className='profile-reward-badge' src={rewardImg} alt="Reward" /> <span className='reward-txt'>0</span> </div>
    <div>Total Rewards earned : 0</div>
   <div className='rewards-link'>
   Earn more rewards points with special deals just for you.
   </div>
   <button className='reward-btn' type="button" onClick={handleNavigation}>Click here</button>
    </div>
</div>
     <div className="order-history-header">
        Orders history
      </div>
    <div className="order-list-container">

      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
      <div className="order-row">
        <div className="order-detail">
        Szechuan Bacon Noodle Stir-Fry
        </div>
        <div className="order-detail">
        $15.50
        </div>
        <div className="order-detail">
       Delivered
        </div>
        <div className="order-detail">
        +20 Rewards
        </div>
      </div>
    </div>

  </>
  )
}

export default MyProfile