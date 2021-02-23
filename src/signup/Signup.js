import 'bulma/css/bulma.css';
import './Signup.css';
import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import Coolbutton from '../CoolButton/Coolbutton';

function Signup() {
    return (
        <div className='signup-from'>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
            <FormField label="Password" type="password"/>
            <Coolbutton classProperties="button is-primary my-class is-fullwidth" text="Login" type="submit"/>
        </div>
    )
}

export default Signup