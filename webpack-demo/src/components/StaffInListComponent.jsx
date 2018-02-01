import React from 'react';
import {connect} from 'react-redux';
import StaffViewComponent from './StaffViewComponent.jsx';
import StaffViewButtonMenuComponent from './StaffViewButtonMenuComponent.jsx';

class StaffInListComponent extends React.Component {
    getViewButton(){
        return(
            <StaffViewButtonMenuComponent/>
        );
    }
    render() {
        const mockState = {
            staff:[
                {
                    name: 'Ling Feng Ran',
                    mail: 'lran@expedia.com',
                    employeeID: 67894,
                    base: 'Beijing',
                    hireDate: '02/22/2016',
                    location: 'CHN0002 - Beijing - Expedia',
                    company: '11596 Expedia Consulting Svc (Beijing)'
                },
                {
                    name: 'xxxxxxxxxxxxx',
                    mail: 'lran@expedia.com',
                    employeeID: 67894,
                    base: 'Beijing',
                    hireDate: '02/22/2016',
                    location: 'CHN0002 - Beijing - Expedia',
                    company: '11596 Expedia Consulting Svc (Beijing)'
                },
                {
                    name: 'xxxxxxxxxxxxx',
                    mail: 'lran@expedia.com',
                    employeeID: 67894,
                    base: 'Shenzhen',
                    hireDate: '02/22/2016',
                    location: 'CHN0002 - Beijing - Expedia',
                    company: '11596 Expedia Consulting Svc (Beijing)'
                }
            ]
        };
        const staffView = mockState.staff.map(
            function (staff, index){
                return (
                    <div className="cols-row compensation-rule">
                        <StaffViewComponent staff={staff}/>
                        <StaffViewButtonMenuComponent/>
                    </div>
                )
            }
        );
        return (
            <div>
                <section className="tab-pane" styleA="display: none;">
                        {staffView}
                </section>
            </div>
        );
    }
}

export default StaffInListComponent;