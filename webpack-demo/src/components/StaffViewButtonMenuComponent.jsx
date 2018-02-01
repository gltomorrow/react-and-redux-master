import React from 'react';
import {connect} from 'react-redux';

class StaffViewButtonMenuComponent extends React.Component {
    render() {
        return (
            <div className="col col-1-10">
                <span>
                    <div className="active-fontSize">
                        <div className="menu-bar " id="epc-q7t001e">
                            <ul className="menu-bar-inner">
                                <li className="">
                                    <button type="button" data-control="menu" data-auto-pos="true" className="menu-trigger theme-standard trigger-link pin-left btn-text menu-arrow"
                                                                    aria-expanded="false">
                                        <span className="btn-label">Actions
                                        <span className="icon icon-toggle180 " aria-hidden="true"></span></span></button>
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
        );
    }
}
export default StaffViewButtonMenuComponent;