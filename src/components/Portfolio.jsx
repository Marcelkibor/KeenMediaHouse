import React from 'react';
import douch from '../Assets/images/douch.jpg';
import wed from '../Assets/images/wed.jpg';
import glass from '../Assets/images/wed.jpg';
import shawries from '../Assets/images/shawries.jpg';
import deco from '../Assets/images/deco.jpg';
import view1 from '../Assets/images/View 1.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="portfolio-grid">
            <div className="portfolio-item">
                <img src={douch} alt="Wedding Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="portfolio-item">
                <img src={wed} alt="Event Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="portfolio-item">
                <img src={glass} alt="Drone Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="portfolio-item">
                <img src={shawries} alt="Portrait Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="portfolio-item">
                <img src={deco} alt="Wedding Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="portfolio-item">
                <img src={view1} alt="Wedding Photo" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
        </div>
    </section>
 )
}

export default Portfolio