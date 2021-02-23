import 'bulma/css/bulma.css';
import './FormField.css';
import React from 'react';

function FormField({label,placeholder,type}) {
    return (
        <div className='field'>
            <label className='label'>{label}</label>
            <div className='control'>
                <input className='input' type={type} placeholder={placeholder}></input>
            </div>
        </div>
    )
}

export default FormField;