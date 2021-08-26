import React from 'react';
import './../AddApt/AddApt.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const AddUnit = () => {
    return (
        <div className="add-apt-main">
            <div className="container">
                <div className="apt-details-form">
                    <div className="form-content">
                        <div className="form-item-col">
                            <div className="content-item">
                                <h1>Add or Edit Unit</h1>
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="text" placeholder="apt name" />
                            </div>
                            <div className="content-item">
                                <input type="text" placeholder="Mngr name" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="text" placeholder="Mngr phone" />
                            </div>
                            <div className="content-item">
                                <input type="text" placeholder="Apt number" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item apt-address">
                                <textarea placeholder="Address" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="file" name="filename" multiple />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <button className="default-button">Save</button>
                            </div>
                        </div>

                    </div>
                    <div className="ui-content">
                        <HomeWorkIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUnit
