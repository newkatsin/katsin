import React from 'react';
import './eventsPage.scss';
import cocktail from '../../assets/images/cocktail.jpg';
// import roland from '../../assets/images/events/IMG_5405-min.jpg'

const EventsPage = () => {
  return (
    <div className="eventsPage pageWrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-5 text-uppercase event-name">Sorry!</h1>
            <h2 className="mb-5 text-uppercase event-type">
              We currently don't have any upcoming events.
            </h2>
            {/*<h3 className="mb-5 text-uppercase event-time">December 22 at 7:00PM</h3>*/}
          </div>
          <div className="col-md-6">
            <img src={cocktail} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
