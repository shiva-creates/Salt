import './Profile.css'
import {  Outlet } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';


const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-side-bar">
        <NavLink className={(e) => {return  e.isActive ? 'active-tab-menu' : 'tab-menu'}} to="" end>My Profile</NavLink>
        <NavLink className={(e) => {return e.isActive ? 'active-tab-menu' : 'tab-menu'}} to="/profile/edit-menu" >Edit Menu</NavLink>
        <NavLink className={(e) => {return e.isActive ? 'active-tab-menu' : 'tab-menu'}} to="/profile/my-address" >My Addresses</NavLink>
        <div className='tab-menu'>Option#2</div>
        <div className='tab-menu'>Option#2</div>
        <div className='tab-menu'>Option#2</div>
        <div className='tab-menu'>Option#2</div>
        </div>
        <div className='profile-main-container'>
        <Outlet />
        </div>
      </div>
    </>
  )
}

export default Profile