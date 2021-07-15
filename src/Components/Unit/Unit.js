import React from 'react';
import './Unit.css';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const Unit = () => {
    return (
        <div className="single-unit-page">
            <div className="container">
                <div className="single-unit-content">
                    <div className="single-u-c-heading">
                        <div className="icon"><ViewModuleIcon /></div>
                        <div className="unit-number-id">RF45644
                        </div>
                    </div>
                    <div className="single-unit-main">
                        <div className="single-unit-main-left">
                            <div className="s-u-basic-content"></div>
                            <div className="s-u-tenant-content"></div>
                        </div>
                        <div className="single-unit-main-right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unit
