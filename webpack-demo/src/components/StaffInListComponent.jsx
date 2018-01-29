import React from 'react';
import {connect} from 'react-redux';

class StaffInListComponent extends React.Component {
    render() {
        return (
            <div>
                <section className="tab-pane" styleA="display: none;">
                    <div className="cols-row compensation-rule">
                        <div className="col col-9-10">
                            <div className="header">
                                <div>25% to 20% Commission Pricing-test2</div>
                            </div>
                            <div className="body">
                                <div>
                                    <span>Hotel collect: 20% | Applies to 0  rate plan</span>
                                </div>
                            </div>
                            <div className="footer">
                                <div><span><span className="icon icon-time undefined"
                                                 aria-hidden="true"></span> This rule has 1 date specific setting</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-1-10">
                                        <span>
                                            <div className="active-fontSize">
                                                <div className="menu-bar " id="epc-q7t001e">
                                                    <ul className="menu-bar-inner">
                                                        <li className="">
                                                            <button type="button" data-control="menu"
                                                                    data-auto-pos="true"
                                                                    className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                                    aria-expanded="false"><span className="btn-label">Actions<span
                                                                className="icon icon-toggle180 "
                                                                aria-hidden="true"></span></span></button>
                                                            <div className="menu" aria-hidden="true" tabIndex="0">
                                                                <div className="menu-main">
                                                                    <div>
                                                                        <button type="button"
                                                                                className="btn-primary btn-text"><span
                                                                            className="btn-label"><span
                                                                            className="loc-text">View Details</span></span>
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <div>
                                                                            <button type="button"
                                                                                    className="btn-primary btn-text"><span
                                                                                className="btn-label"><span
                                                                                className="loc-text">Edit</span></span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default StaffInListComponent;