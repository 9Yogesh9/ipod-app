import React from "react";

// Importing fortawesome to use fontawesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBackward , faGamepad} from '@fortawesome/fontawesome-free-solid';

class MenuItems extends React.Component {
  render() {
    const { optionsInMenu } = this.props;
    return (
      <>
        {optionsInMenu.map((item, index) => {
          return (
            <div
              className={this.props.selectedOption === index ? "selected" : ""}
              key={index}
            >
              <p>{item}</p>
            </div>
          );
        })}
        {optionsInMenu.length === 3 ? (
          <div>
            <p style={{ fontSize: 18 }}>
              click "<FontAwesomeIcon icon={faBackward} />" to go back
            </p>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default MenuItems;