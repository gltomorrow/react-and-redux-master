import React from 'react';
import { connect } from 'react-redux';
import ListStaffComponent from '../components/ListStaffComponent';
import '../less/global.less';

class StaffContainer extends React.Component {

    render(){
        return (
            <ListStaffComponent/>
        );
    }
}

export default StaffContainer;