// Importing fortawesome to use fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faBackward, faForward, faPlay, faPause } from '@fortawesome/fontawesome-free-solid'


const Buttons = (props) =>
{
    return (
        <div className="buttons-container">
            <button className="center-circle" onClick={props.selectButtonClicked}>
                <h2>Select</h2>
            </button>

            <button className="menu-button" onClick={props.menuButtonClicked}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button className="left-button" onClick={props.leftButtonClicked}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="right-button" onClick={props.rightButtonClicked}>
                <FontAwesomeIcon icon={faForward} />
            </button>
            <button className="play-pause" onClick={props.playPauseButtonClicked}>
                <FontAwesomeIcon icon={faPlay} /> /<FontAwesomeIcon icon={faPause} />
            </button>
        </div>
    );
}

export default Buttons;