import React from 'react';
import { connect } from 'react-redux';

class ListStaffComponent extends React.Component {
    render(){
        return (
            <div class="epc-page cf">
                <div class="default-title"><span class="loc-text">Compensation Rules</span></div>
                <div class="message-contain">
                    <div class="message-img">MM</div>
                    <span class="message-content">This page is only viewable by internal users.</span>
                </div>
            </div>
        );
    }
}

export default ListStaffComponent;