import React from 'react';
import './Dashboard.css';
import Graph from './Graph/Graph'

const Dashboard = () => {
    return (
        <div className="dashboard-main">
            <div className="container">
                <div className="dashboard-content">
                    <div className="dashboard-top-panel">
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h3 className="amount">5000</h3>
                                </div>
                                <div className="icon-box">

                                </div>
                            </div>
                            <h2 className="amount-heading">Compaier to last month</h2>
                        </div>
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h3 className="amount">5000</h3>
                                </div>
                                <div className="icon-box">

                                </div>
                            </div>
                            <h2 className="amount-heading">Compaier to last month</h2>
                        </div>
                        <div className="money-item">
                            <div className="amount-and-icon">
                                <div className="amount-box">
                                    <h3 className="amount">5000</h3>
                                </div>
                                <div className="icon-box">

                                </div>
                            </div>
                            <h2 className="amount-heading">Compaier to last month</h2>
                        </div>
                        
                    </div>
                    <div className="dashboard-middle-panel">
                        <div className="all-overview">
                            <Graph />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
