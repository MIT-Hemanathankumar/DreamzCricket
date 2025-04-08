'use client';
import './css/HowToPlaySection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUsersGear, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function HowToPlaySection() {
  return (
    <section id="how-to-play" className="how-to-play-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">How to Play</h2>

        <div className="video-wrapper mb-5">
          <video controls className="how-to-play-video">
            <source src="/assets/videos/how-to-play.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="play-card">
              <FontAwesomeIcon icon={faCalendarCheck} size="2x" className="mb-3 text-danger" />
              <h4>Select A Match</h4>
              <p>Choose any upcoming match of your choice to begin your fantasy cricket journey.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="play-card">
              <FontAwesomeIcon icon={faUsersGear} size="2x" className="mb-3 text-danger" />
              <h4>Create A Team</h4>
              <p>Build your team with real players based on their performance and stats.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="play-card">
              <FontAwesomeIcon icon={faTrophy} size="2x" className="mb-3 text-danger" />
              <h4>Join Contest</h4>
              <p>Participate in contests, compete with others, and win exciting prizes!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
