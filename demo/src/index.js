import React from 'react';
import { render } from 'react-dom';
import store from './store/Store';
import StaffContainer from './containers/StaffContainer';

render(
    <StaffContainer store={store} />,
    document.getElementById('root')
);