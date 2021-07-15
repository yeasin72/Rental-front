import React from 'react';
import './Unit.css';
import Download from './Download/Download'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const Unit = () => {
    return (
        <div className="single-unit-page">
            <div className="container">
                <div className="single-unit-content" id="unitdetails">
                    <div className="single-u-c-heading">
                    <div className="unit-number-id">Market 1
                        </div>
                        <div className="icon"><ViewModuleIcon /></div>
                        <div className="unit-number-id">UNIT NO: RF45644
                        </div>
                    </div>
                    <div className="single-unit-main">
                        <div className="single-unit-main-left">
                            <div className="s-u-basic-content">
                                <div className="item"><ViewModuleIcon /><b>Unit Number:</b> F20</div>
                                <div className="item"><ShoppingCartIcon /><b>Unit Type:</b> Shop</div>
                                <div className="item"><AccountBalanceWalletIcon /><b>Rent:</b> 20000$</div>
                                <div className="item"><WhatshotIcon /><b>Gas Bill:</b> 20000$</div>
                                <div className="item"><SettingsInputAntennaIcon /><b>Electricity Bill:</b> 20000$</div>
                                <div className="item"><LibraryAddCheckIcon /><b>Status:</b> Empty</div>
                            </div>
                        </div>
                        <div className="single-unit-main-mid">
                            <HomeWorkIcon />
                            <img src="./img/logo.svg" alt="" />
                            <h5>Note</h5>
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
                            <Download />
                        </div>
                        <div className="single-unit-main-right">
                            <div className="s-u-basic-content">
                                <div className="item"><RecentActorsIcon /><b>Tenant Nmae:</b> Musfik Mngr</div>
                                <div className="item"><SettingsPhoneIcon /><b>Phone Number:</b> 017765498466</div>
                                <div className="item"><AccountBalanceWalletIcon /><b>Advance Amount:</b> 20000 ৳</div>
                                <div className="item"><AccessAlarmIcon /><b>Start Time:</b> 01/5/2022</div>
                                <div className="item"><AccessAlarmIcon /><b>End Time:</b> 01/5/2022</div>
                                <div className="item"><AttachFileIcon /><b>Attachments:</b> <a href="#" className="download">Download</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unit
