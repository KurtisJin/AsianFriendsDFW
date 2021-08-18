import React from 'react';
import Typing from '../Intro/Typing/Typing'
import ReactPlayer from '../ReactPlayer/ReactPlayer'


let IntroPageType = () => {
    return (
        <section id="introPage" className="introPage">
            <div className="max-width">
               
                 <div className="text-3">
                    <Typing />
                    </div>    
            </div>
        </section>
    )
}

export default IntroPageType;