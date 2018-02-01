import React from 'react';
import {connect} from 'react-redux';

class StaffTabInListComponent extends React.Component {
    render() {
        return (
            <ul className="tabs cf">
                <li role="presentation" className="tab">
                    <button type="button" className="on"><span
                        className="tab-label active-fontSize">Beijing</span></button>
                </li>
                <li role="presentation" className="tab">
                    <button type="button" className=""><span
                        className="tab-label active-fontSize">Shenzhen</span></button>
                </li>
            </ul>
        );
    }
}

export default StaffTabInListComponent;