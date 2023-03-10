import React from "react";
import MenuItems from "./MenuItems";

class Menu extends React.Component {
  render() {
    const { selectedOption } = this.props;
    return (
      <div className="menu-screen">
        <div className="app-logo">
          <h3>
            <i>I-POD</i>
          </h3>
        </div>
        <MenuItems
          optionsInMenu={this.props.optionsInMenu}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

export default Menu;