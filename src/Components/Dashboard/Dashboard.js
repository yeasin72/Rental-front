import React from 'react';
import './Dashboard.css';
import Graph from './Graph/Graph';
import PandingUnit from './PandingUnit/PandingUnit'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BarChartIcon from '@material-ui/icons/BarChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const Dashboard = () => {
    return (
        <div className="dashboard-main">
            <div className="container">
                <div className="dashboard-content">
                    <div className="dashboard-top-panel">
                        {/* === Money item loop === */}
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h4 className="short-head">Budget</h4>
                                    <h3 className="amount">$5,000</h3>
                                </div>
                                <div className="icon-box">
                                    <BarChartIcon />
                                </div>
                            </div>
                            <div className="description">
                                <div className="icon">
                                    <ArrowUpwardIcon />
                                </div>
                                <div className="text">
                                    <h2 className="amount-heading">Compaier to last month</h2>
                                </div>
                            </div>
                        </div>
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h4 className="short-head">TOTAL PROFIT</h4>
                                    <h3 className="amount">$5,000</h3>
                                </div>
                                <div className="icon-box">
                                    <AttachMoneyIcon />
                                </div>
                            </div>
                            <div className="description">
                                <div className="icon">
                                    <ArrowUpwardIcon />
                                </div>
                                <div className="text">
                                    <h2 className="amount-heading">Compaier to last month</h2>
                                </div>
                            </div>
                        </div>
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h4 className="short-head">Earning</h4>
                                    <h3 className="amount">$5,000</h3>
                                </div>
                                <div className="icon-box">
                                    <AccountBalanceIcon />
                                </div>
                            </div>
                            <div className="description">
                                <div className="icon">
                                    <ArrowUpwardIcon />
                                </div>
                                <div className="text">
                                    <h2 className="amount-heading">Compaier to last month</h2>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="dashboard-middle-panel">
                        <div className="all-overview">
                            <Graph />
                        </div>
                    </div>
                    <PandingUnit />
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
