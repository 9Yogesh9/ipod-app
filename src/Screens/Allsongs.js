import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

// Importing default AudioPlayer styles
import "react-h5-audio-player/lib/styles.css";

// Allsongs function
export default function Allsongs() {

    // Defining an array of music tracks along with name and source
    const musicTracks = [
        {
            name: "Kesariya",
            src: "https://www.pagalworld.com.se/files/download/type/128/id/6591"
        },
        {
            name: "Jhoome Jo Pathaan",
            src: "https://www.pagalworld.com.se/files/download/type/128/id/65406"
        },
        {
            name: "Pasoori",
            src: "https://www.pagalworld.com.se/files/download/type/128/id/5471"
        },
        {
            name: "Tu Aake Dekhle",
            src: "https://www.pagalworld.com.se/files/download/type/128/id/3647"
        },
        {
            name: "Garmi",
            src: "https://www.pagalworld.com.se/files/download/id/1318"
        },
        {
            name: "Taaron Ke Shehar Mein",
            src: "https://www.pagalworld.com.se/files/download/id/920"
        }
    ];

    const [trackIndex, setTrackIndex] = useState(0);

    // Declaring handleClickPrevious function to handle previous click
    const handleClickPrevious = () => {
        // Setting the track index to the previous track or the last track if the current track is first
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };

    // Declaring handleClickNext function to handle next click
    const handleClickNext = () => {
        // Setting the track index to the next track or the first track if the current track is last
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };
    return (
        <div className="artist-screen">
            <h1>Song</h1>
            <span>
                <AudioPlayer
                    style={{ position: "absolute", bottom: 0, borderRadius: "0.5rem" }}
                    autoPlay
                    src={musicTracks[trackIndex].src}
                    onPlay={(e) => console.log("onPlay")}
                    showSkipControls={true}
                    showJumpControls={false}
                    header={`Now playing: ${musicTracks[trackIndex].name}`}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    onEnded={handleClickNext}
                />
            </span>
        </div>
    );
}