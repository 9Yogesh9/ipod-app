import React from 'react';

// Importing fortawesome to use fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

class Coverflow extends React.Component{
    render(){
        return (
            <div className='dummy-screen'>
                <h1>
                    Cover Flow
                </h1>
                <div><FontAwesomeIcon icon={faPhotoVideo} /></div>
            </div>
        );
    }
}
export default Coverflow;