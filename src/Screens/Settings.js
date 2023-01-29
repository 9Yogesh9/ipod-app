import React from "react";

// Importing fortawesome to use fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

class Settings extends React.Component{
    render(){
        return (
            <div className='dummy-screen'>
                <h1>Settings</h1>
                <div><FontAwesomeIcon icon={faGear} /></div>
            </div>
        );
    }
}
export default Settings;