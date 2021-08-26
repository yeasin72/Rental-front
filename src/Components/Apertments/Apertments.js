import React from 'react';
import './Apertments.css';
import BusinessIcon from '@material-ui/icons/Business';
import GradientIcon from '@material-ui/icons/Gradient';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import GetAppIcon from '@material-ui/icons/GetApp';

const Apertments = () => {
    // === All Apt here ===
    return (
        <div className="appertments-main">
            <div className="container">
                <div className="all-appertment">
                    {/* === Apt Loop === */}
                    <div className="apt-item">
                        <div className="item-left">
                            <BusinessIcon />
                            <h4 className="apt-name"><ArrowForwardIcon />Apt Name</h4>
                            <p className="apt-address"><RoomIcon />House bld., Uttara</p>
                            <p className="apt-mngr"><PersonIcon />Musfik</p>
                            <p className="apt-mngr-phone"><SettingsPhoneIcon />+88015649646541</p>
                            <button className="default-button apt-doc-download">Apt Document<GetAppIcon /></button>
                        </div>
                        <div className="item-right">
                            <a href="/">
                                <GradientIcon />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Apertments
