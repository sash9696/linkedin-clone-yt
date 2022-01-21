import React from 'react';
import './Nav.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HeaderOption from './HeaderOption';
import  SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount';
import  BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import  ChatIcon from '@material-ui/icons/Chat';
import  NotificationsIcon  from '@material-ui/icons/Notifications';
import  HomeIcon  from '@material-ui/icons/Home';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import { logout } from './features/userSlice';


function Nav() {

    const dispatch = useDispatch();
    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }


    return (
        <div className='header'>
            <div className="header_left">
                <img className='header_image' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' />
                <div className="header_search">
                    {/* search icon */}
                    <SearchOutlinedIcon/>
                    <input type='text' placeholder='Search'/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title ='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title ='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title ='Jobs' />
                <HeaderOption Icon={ChatIcon} title ='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title ='Notifications' />
                <HeaderOption avatar={true} onClick ={logOutOfApp} title='me'/>
            </div>
        </div>
    )
}

export default Nav
