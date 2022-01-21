import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src='https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' alt='' />
                <Avatar className='sidebar_avatar' />
                <h2>sahil chopra</h2>
                <h4>1234@gmail.com</h4>
                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className='sidebar_statNumber'>3421</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on post</p>
                        <p className='sidebar_statNumber'>6272</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('React.js')}
                {recentItem('Programming')}
                {recentItem('Design')}
                {recentItem('Software')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}

export default Sidebar
