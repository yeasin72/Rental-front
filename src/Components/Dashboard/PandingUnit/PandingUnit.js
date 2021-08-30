import React from 'react'
import './PandingUnit.css'

const PandingUnit = () => {
    return (
        <div className="dashboard-panding-rent-units">
            <div className="container">
                <div className="panding-rent-unit-main">
                    <div className="panding-units">
                        <div className="heading">
                            <div className="unit-number">
                                <h4>Unit Number</h4>
                            </div>
                            <div className="unit-tenant">
                            <h4>Tenant Name</h4>
                            </div>
                            <div className="unit-tenant-phone">
                            <h4>Phone Number</h4>
                            </div>
                            <div className="unit-rent">
                            <h4>Unit rent</h4>
                            </div>
                        </div>
                        {/* === Pending unit rent === */}
                        <div className="unit-item">
                            <div className="unit-number">
                                <h4><a href="/">L489422</a></h4>
                            </div>
                            <div className="unit-tenant">
                                <h4>Musfik</h4>
                            </div>
                            <div className="unit-tenant-phone">
                                <h4>1964951615166</h4>
                            </div>
                            <div className="unit-rent">
                                <h4>$20000</h4>
                            </div>
                        </div>
                        <div className="unit-item">
                            <div className="unit-number">
                                <h4><a href="/">L489422</a></h4>
                            </div>
                            <div className="unit-tenant">
                                <h4>Musfik</h4>
                            </div>
                            <div className="unit-tenant-phone">
                                <h4>1964951615166</h4>
                            </div>
                            <div className="unit-rent">
                                <h4>$20000</h4>
                            </div>
                        </div>
                        <div className="unit-item">
                            <div className="unit-number">
                                <h4><a href="/">L489422</a></h4>
                            </div>
                            <div className="unit-tenant">
                                <h4>Musfik</h4>
                            </div>
                            <div className="unit-tenant-phone">
                                <h4>1964951615166</h4>
                            </div>
                            <div className="unit-rent">
                                <h4>$20000</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PandingUnit
