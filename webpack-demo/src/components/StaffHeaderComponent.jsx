import React from 'react';
import {connect} from 'react-redux';

class StaffHeaderComponent extends React.Component {
    render() {
        return (
                    <div>
                        <div className="default-title"><span className="loc-text">Expedia Staff in China</span></div>
                        <div className="message-contain">
                            <div className="message-img">Staff</div>
                            <span className="message-content">This page is only viewable by internal users.</span>
                        </div>
                    </div>
        );
    }
}

export default StaffHeaderComponent;