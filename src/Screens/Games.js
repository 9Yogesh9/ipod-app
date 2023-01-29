import React from "react";

// Importing fortawesome to use fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGamepad} from '@fortawesome/fontawesome-free-solid';

class Games extends React.Component{
    render(){
        return (
            <div className='dummy-screen'>
                <h1>Games</h1>
                <div><FontAwesomeIcon icon={faGamepad} /></div>
            </div>
        );
    }
}
export default Games;