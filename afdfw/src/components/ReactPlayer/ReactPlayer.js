import React from 'react';
import ReactPlayer from 'react-player'

let MediaPlayer = () => {
    return (
        <div className="player">
            <ReactPlayer controls="true" className="react-player" height="340px" width="540px" url="https://www.youtube.com/watch?v=DDQWoe8AoUs" controls />

        </div>
    )

}

export default MediaPlayer;