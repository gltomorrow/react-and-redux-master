import React from 'react';
import { connect } from 'react-redux';

class ListStaffComponent extends React.Component {
    render(){
        return (
            <div className="epc-page cf">
                <div className="default-title"><span className="loc-text">Compensation Rules</span></div>
                <div className="message-contain">
                    <div className="message-img">MM</div>
                    <span className="message-content">This page is only viewable by internal users.</span>
                </div>
            </div>
        );
    }
}

export default ListStaffComponent;