import React from 'react';
import ReactPlayer from 'react-player'

let MediaPlayer = () => {
    return (
        <div className="player">
            <ReactPlayer  url="https://www.youtube.com/watch?v=DDQWoe8AoUs" controls />

        </div>
    )

}

export default MediaPlayer;