import 'bulma/css/bulma.css';
import './Coolbutton.css';
import React from 'react';

function Coolbutton({classProperties,type,text}) {
    return (
        <div className='btn'>
            <button className={classProperties} type={type}>{text}</button>
        </div>
    )
}

export default Coolbutton