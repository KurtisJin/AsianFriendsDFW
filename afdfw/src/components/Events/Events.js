import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MeetupEvents() {

    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        cssEase: "linear",
    }

    return (

        <section className="events" id="events">
          <div className="max-width">
              <h2 className="title">Events</h2>
              <div className="events-content">
                  <div className="column left">
                      <div className="text">Upcoming Events!</div>
                      <p></p>
                      {/* <a href="model.html">Read more</a> */}
                  </div>
                  <div class="column right">
                   <Slider {...settings}>
                   <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                   </Slider>
                  </div>
              </div>
          </div>
        </section>
    )
}