import React from 'react';
import {connect} from 'react-redux';

class StaffViewComponent extends React.Component {
    render(){
        const staff = this.props.staff;
        return (
            <div className="col col-9-10">
                <div className="header">
                    <div>{staff.name} ({staff.employeeID})</div>
                </div>
                <div className="body">
                    <div>
                        <span>{staff.location}</span>
                    </div>
                    <div>
                        <span>Email:{staff.mail}</span>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <span className="icon icon-time" aria-hidden="true">
                            {staff.company}
                        </span>
                    </div>
                </div>
            </div>
    );
    }
}
export default StaffViewComponent;