import React from "react";
import  ReactDOM  from "react-dom/client";

const hi = React.createElement('h1',{
    id: 'title',    
},'Igniting My React APP');

console.log(React);

console.log(ReactDOM)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(hi);