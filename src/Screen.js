import React from 'react';
import Menu from "./Screens/Menu";
import Games from './Screens/Games';
import Settings from './Screens/Settings';
import Coverflow from './Screens/Coverflow';
import Allsongs from "./Screens/Allsongs";
import Artist from './Screens/Artist';
import Album from './Screens/Album';

 
class Screen extends React.Component{
    render(){
        return(
            <div className="screen-container">
        <Menu
          selectedOption={this.props.selectedOption}
          optionsInMenu={this.props.optionsInMenu}
        />
        {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? (
          <Games />
        ) : (
          ""
        )}
        {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? (
          <Settings />
        ) : (
          ""
        )}
        {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? (
          <Coverflow />
        ) : (
          ""
        )}
        {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? (
          <Allsongs
            currentMusicSelection={this.props.currentMusicSelection}
            songIndex={this.props.songIndex}
            currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
            playPauseButtonClicked={this.props.playPauseButtonClicked}
          />
        ) : (
          ""
        )}
        {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? (
          <Artist />
        ) : (
          ""
        )}
        {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? (
          <Album />
        ) : (
          ""
        )}
      </div>
        );
    }
}
export default Screen; 