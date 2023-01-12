import React from 'react';
import ReactDOM  from 'react-dom/client';


import HeaderCompoenent from './Components/Header.Component';
import BodyCompoenent from './Components/Body.component';

const Application = () => {
    return (
        <React.Fragment>
            <HeaderCompoenent/>
            <BodyCompoenent/>
        </React.Fragment>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Application/>);

