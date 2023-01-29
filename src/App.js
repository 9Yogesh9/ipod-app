import React from 'react';
import $ from "jquery";
import "lodash";
import ZingTouch from "zingtouch";
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';

class App extends React.Component {
  constructor() {
    super();
    // Initializing angle class property to 0
    this.angle = 0;
    // Initializing selected class property to 0
    this.selected = 0;
    this.state = {
      // options that are displayed on the screen
      options: ["Games", "Music", "Settings", "CoverFlow"],
      // change in angle
      change_in_angle: 0,
      // index of the currently selected option 
      selected: 0,
      // index of the page to show 
      showPage: -1,
      // options in the main menu
      general_menu: ["Games", "Music", "Settings", "Cover Flow"],
      // options in the music sub-menu
      songs_sub_menu: ["All Songs", "Artists", "Albums"],
      // index of the currently selected music track  
      current_music_selection: 0,
      // boolean value to check if whether currently on the play music screen
      currently_on_play_music_screen: false,
    };
  }
  componentDidMount() {
    const zt = new ZingTouch.Region($(".buttons-container")[0]);
    // Bind the rotate event to the ZingTouch.Region
    zt.bind($(".buttons-container")[0], "rotate", (event) => {
      if ($(".menu-screen")[0].classList.contains("width-50")) {
        // Get the distance of the current rotate event from the last one
        let dist = event.detail.distanceFromLast;
        // Add the distance to the angle class property
        this.angle += dist;
        if (this.angle > 60) {
          this.selected++;
          this.selected = this.selected % this.state.options.length;
          this.setState({
            selected: this.selected,
          });

          this.angle = 0;
        } else if (this.angle < -60) {
          this.selected--;
          if (this.selected === -1)
            this.selected = this.state.options.length - 1;
          this.selected = this.selected % this.state.options.length;
          this.setState({
            selected: this.selected,
          });
          this.angle = 0;
        }
      }
    }
    );
  }

  // event handler for onClick of menu button
  menuButtonClicked = () => {
    let screenMenuClassList =
      $(".menu-screen")[0].classList;
    if (screenMenuClassList.contains("width-50")) {
      $(".menu-screen").removeClass("width-50"); //hide menu
    } else {
      $(".menu-screen").addClass("width-50"); //show menu
    }
  };

  // event handler for onClick of select button
  selectButtonClicked = () => {
    if (this.state.selected === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.songs_sub_menu,
        selected: 0,
        showPage: -1,
      });
      this.selected = 0;
      return;
    }

    this.setState({
      showPage: this.state.selected,
      selected: 0,
    });
    this.selected = 0;
    this.menuButtonClicked();
  };

  // event handler for onClick of right button
  rightButtonClicked = () => {
    this.setState({
      options: this.state.general_menu,
      selected: 0,
    });
  };

  // event handler for onClick of left button
  leftButtonClicked = () => {
    this.setState({
      options: this.state.general_menu,
      selected: 0,
    });
  };

  render() {
    return (
      <div className="App">


        <Screen
          selectedOption={this.state.selected}
          showPage={this.state.showPage}
          optionsInMenu={this.state.options}
          currentMusicSelection={this.state.current_music_selection}
          songIndex={this.state.song_index}
          currentlyOnPlayMusicScreen={this.currentlyOnPlayMusicScreen}
          playPauseButtonClicked={this.playPauseButtonClicked}

        />
        <Buttons
          check={this.checker}
          centerButton={this.centerButton}
          menuButtonClicked={this.menuButtonClicked}
          selectButtonClicked={this.selectButtonClicked}
          leftButtonClicked={this.leftButtonClicked}
          rightButtonClicked={this.rightButtonClicked}
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
      </div>

    );
  }
}

export default App;
