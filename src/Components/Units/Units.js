import React from 'react';
import './Units.css';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const Units = () => {
    return (
        <div className="units-page">
            <div className="container">
                <div className="unit-content">
                    <div className="unit-content-heading">
                            <div className="unit-number">Unit Number</div>
                            <div className="unit-size">Size</div>
                            <div className="unit-rent">Rent</div>
                            <div className="unit-isBooked">Status</div>
                            <div className="unit-tenant">Tenant</div>
                    </div>
                    <div className="all-unit">

                        {/* 
                        === This item need should be loop === 
                        */}

                        <div className="single-unit">
                            <div className="unit-number">
                                <div className="icon"><ViewModuleIcon /></div>
                                <div className="unit-number-id">
                                    <a className="room-number" href="#">RF45644</a>
                                </div>
                            </div>
                            <div className="unit-size">200sq</div>
                            <div className="unit-rent">12000$</div>
                            <div className="unit-isBooked"><span className="empty">Empty</span></div>
                            <div className="unit-tenant">Musfik</div>
                        </div>
                        <div className="single-unit">
                            <div className="unit-number">
                                <div className="icon"><ViewModuleIcon /></div>
                                <div className="unit-number-id">
                                    <a className="room-number" href="#">RF45644</a>
                                </div>
                            </div>
                            <div className="unit-size">200sq</div>
                            <div className="unit-rent">12000$</div>
                            <div className="unit-isBooked"><span className="booked">Booked</span></div>
                            <div className="unit-tenant">Yeasin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Units
