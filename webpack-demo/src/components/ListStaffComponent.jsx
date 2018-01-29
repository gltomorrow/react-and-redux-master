import React from 'react';
import {connect} from 'react-redux';
import StaffHeaderComponent from './StaffHeaderComponent.jsx';
import StaffTabInListComponent from './StaffTabInListComponent.jsx';
import StaffInListComponent from './StaffInListComponent.jsx';

class ListStaffComponent extends React.Component {
    render() {
        return (
                    <div className="epc-page cf">
                    <StaffHeaderComponent />
                        <div className="compensation-list">
                            <div className="compensation-list inline theme-inline-pills" id="tabs-container"
                                 data-control="tabs">
                                <StaffTabInListComponent />
                                <div className="tabs-container">
                                <StaffInListComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default ListStaffComponent;