import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Coolbutton from './CoolButton/Coolbutton';
import Signup from './signup/Signup';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
      <Coolbutton classProperties="button is-primary my-class is-fullwidth" text="Login" type="submit" />
      <Signup/>
    </div>
  );
};

export default App;
