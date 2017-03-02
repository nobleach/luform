import React, {PropTypes} from 'react';

const PilgrimForm = () => {
    return (
        <div className="panel panel-default well">
            <div className="panel-body">
                <h1>Pilgrim Information</h1>
                <form>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="focusedInput" placeholder="Enter first name" name="firstname" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="lastname" placeholder="Enter last name" name="lastname" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="address" placeholder="Enter address" name="address" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="aptnum" placeholder="Apt/SP #" name="aptsuite" required=""/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="address" placeholder="Enter city" name="city" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <select data-placeholder="Choose state" className="input-sm state form-control alert-danger" id="state" name="state" required="">
                                    <option>--Choose State--</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="zipcode" placeholder="Enter zipcode" name="zip" required=""/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="phonenumber" placeholder="Enter phone number" name="phone" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="timecall" placeholder="Enter best time to call" name="bestcalltime" required=""/>

                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="email" placeholder="Enter email" name="email" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="18" placeholder="Over 18 years old?" name="over18" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-tasks"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="occupation" placeholder="Occupation" name="occupation" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-users"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="nickname" placeholder="Name or Nickname for Weekend Name Tag:" name="tagname" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-7">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <label>&nbsp;Marital Status:&nbsp;</label>

                                <label className="radio-inline">
                                    <input type="radio" name="maritalstatus" />
                                    Single
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="maritalstatus" />
                                    Married
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="maritalstatus" />
                                    Separated
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="maritalstatus" />
                                    Divorced
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="maritalstatus" />
                                    Widowed
                                </label>

                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="marriagepartner" placeholder="To Whom?" name="tagname" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="homechurch" placeholder="Enter home church" name="homechurch" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="homechurchcity" placeholder="Enter home church city" name="homechurchcity" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="pastor" placeholder="Enter pastor name" name="homechurchpastor" required=""/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="howoften" placeholder="How often do you attend church?" name="homechurchattendance" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-lg-12">
                            <span>SPECIAL NEEDS?</span>
                            If you require a special diet and/or any physical/mobility accommodations, please check the applicable box below and give a detailed explanation. This is very important information so that we can make sure you can fully experience all the events/activities throughout the weekend.
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="specialneeds" />
                                        Allergies to Food (i.e. dairy, nuts, shellfish)
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="specialneeds" />
                                    Medical necessary Diets (i.e. vegetarian, no salt, diabetic, gluten free, etc...)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-8">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="specialneeds" />
                                    Medical / Physical Requirements (ie: cpap machine &amp; plug, language or hearing assistance, medications at a specific time, mobility issues,
                                    wheelchair assistance, recent surgeries, hygiene assistance)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-lg-12">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <textarea className="form-control alert-danger" rows="5" id="comment" placeholder="Applicant - Please tell us why you would like to attend Cursillo and list in detail your current involvement within your church:" name="reasontoattend" required=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-12">
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <input type="text" className="input-sm form-control alert-danger" id="signature" placeholder="Applicant Signature:" name="signed" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-lg-12">

                            <span>PLEASE NOTE:
                            </span>
                            Reservations are limited. Once approved for a weekend, if the requirements are met and the applicant is endorsed to attend the weekend, a letter of invitation will be mailed to you and your sponsor will contact you to confirm your attendance. At least two sets of weekends are held each year. Should you decline to attend a weekend, you will need to reapply. The following information is for Cursillo purposes only and is private and confidential.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"><input type="submit" value="Submit"/></div>
                        <div className="col-md-6"><input type="reset" value="Clear"/></div>
                    </div>

                </form>
            </div>

        </div>
    )
};

PilgrimForm.propTypes = {};

export default PilgrimForm;
