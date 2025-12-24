import React from 'react';
import Keen from "../Assets/images/Keen.jpg";
import Felix from "../Assets/images/felix.jpg";
import Edwin from "../Assets/images/edwin.jpg";
import Meshack from "../Assets/images/meshack.jpg";
import Brian from "../Assets/images/brian.jpg";
import Japhe from "../Assets/images/Keen.jpg";
import X from "../Assets/images/X.jpg";

const Team = () => {
  return (
    <section className="team" id="team">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-image">
            <img
              src={Keen}
              alt="Meshack Kipchirchir"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Meshack Kipchirchir</h3>
            <p className="team-role">Manager</p>
            <p className="team-specialty">
              Oversees all operations and client relations. Ensuring every
              project meets the highest standards.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={Felix}
              alt="Felix Agwenye"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Felix Agwenye</h3>
            <p className="team-role">Photographer</p>
            <p className="team-specialty">
              Expert in capturing stunning still moments. Specializes in
              weddings, events, and portrait photography.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={Edwin}
              alt="Edwin Koech"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Edwin Koech</h3>
            <p className="team-role">Photographer</p>
            <p className="team-specialty">
              Creative photographer with an eye for detail. Perfect for
              corporate and lifestyle photography.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={Meshack}
              alt="Meshack Mutai"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Meshack Mutai</h3>
            <p className="team-role">Videographer</p>
            <p className="team-specialty">
              Professional videography for events, weddings, and corporate
              productions. Cinematic storytelling.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={Brian}
              alt="Brian Mely"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Brian Mely</h3>
            <p className="team-role">Videographer</p>
            <p className="team-specialty">
              Dynamic video coverage specialist. Creates engaging content for
              all types of events.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={Japhe}
              alt="Japheth Odhiambo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Japheth Odhiambo</h3>
            <p className="team-role">Drone Pilot</p>
            <p className="team-specialty">
              Aerial photography and videography expert. Adds breathtaking
              perspectives to your projects.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={X}
              alt="Eugine"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Eugine</h3>
            <p className="team-role">Video Editor</p>
            <p className="team-specialty">
              Post-production specialist transforming raw footage into polished,
              professional videos.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img
              src={X}
              alt="Bradley"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="team-content">
            <h3 className="team-name">Bradley</h3>
            <p className="team-role">Sound Engineer</p>
            <p className="team-specialty">
              Audio expert ensuring crystal clear sound quality for all video
              productions and events.
            </p>
            <span className="availability">Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
