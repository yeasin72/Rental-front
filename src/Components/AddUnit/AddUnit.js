import React, { useState } from 'react';
import './../AddApt/AddApt.css'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'



const AddApt = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
                                <input type="text" placeholder="Unit number" />
                            </div>
                            <div className="content-item">
                                <input type="text" placeholder="Unit type" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="number" placeholder="Unit Rent" />
                            </div>
                            <div className="content-item">
                                <input type="number" placeholder="Gas Bill" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="number" placeholder="Electicity Bill" />
                            </div>
                            <div className="content-item">
                                <input type="number" placeholder="Water Bill" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item status">
                            <label>Status:</label>
                                <select name="" id="">
                                    <option value="Empty">Empty</option>
                                    <option value="Not Empty">Not Empty</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="text" placeholder="Tenant Name" />
                            </div>
                            <div className="content-item">
                                <input type="number" placeholder="Advance Ammount" />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="text" placeholder="Tenant Phone No." />
                            </div>
                            <div className="content-item start-date">
                                <label>Start Date</label>
                                {/* === Date picker === */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                
                            </div>
                        </div>
                        
                        <div className="form-item-col">
                            <div className="content-item">
                                <input type="file" name="filename" multiple />
                            </div>
                            <div className="content-item end-date">
                            <label>End Date</label>
                                {/* === Date picker === */}
                                <DatePicker selected={endDate} onChange={(edate) => setEndDate(edate)} />
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item apt-address">
                                <textarea placeholder="notes" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="form-item-col">
                            <div className="content-item">
                                <button className="default-button">Save</button>
                            </div>
                        </div>

                    </div>
                    <div className="ui-content">
                        <ViewModuleIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddApt
