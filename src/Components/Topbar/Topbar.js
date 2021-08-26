import React from 'react';
import './Topbar.css'
import NotificationsIcon from '@material-ui/icons/Notifications';



const Topbar = () => {
    return (
        <div className="site-topbar">
            <NotificationsIcon />
            <span className="notify-count">5</span>
        </div>
    )
}

export default Topbar
