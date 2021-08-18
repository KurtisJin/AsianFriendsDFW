import React from 'react';
import Typing from './Typing/Typing'

let introPage = () => {
    return (
        <section id="introPage" className="introPage">
            <div className="max-width">
                <div className="row animatedTitle">
                    <div className="introPage-content">
                        <div className="text-2 animate__animated animate__fadeInLeftBig"><span className="last-name">Welcome!</span></div>
                    </div>
                </div>
                 <div className="text-3">
                    <Typing />
                    </div>    
            </div>
        </section>
    )
}

export default introPage