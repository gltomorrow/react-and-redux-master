import React from 'react';
import {connect} from 'react-redux';

class StaffHeaderComponent extends React.Component {
    render() {
        return (
                    <div>
                        <div className="default-title"><span className="loc-text">Compensation Rules</span></div>
                        <div className="message-contain">
                            <div className="message-img">MM</div>
                            <span className="message-content">This page is only viewable by internal users.</span>
                            <button type="button" className="btn-secondary btn-action createNewClass"><span
                                className="btn-label"><span className="loc-text">Create new rule</span></span>
                            </button>
                        </div>
                    </div>
        );
    }
}

export default StaffHeaderComponent;