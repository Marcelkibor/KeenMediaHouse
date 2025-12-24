import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
            <div className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"Keen Media House captured our wedding beautifully! The team was professional, creative, and made us feel comfortable throughout. The photos exceeded our expectations!"</p>
                <div className="testimonial-author">
                    <div className="author-avatar">👰</div>
                    <div className="author-info">
                        <h4>Sarah & John</h4>
                        <p>Wedding - December 2024</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"Outstanding service! The drone footage was amazing and really added that wow factor to our corporate event. Highly recommend their Supreme package."</p>
                <div className="testimonial-author">
                    <div className="author-avatar">💼</div>
                    <div className="author-info">
                        <h4>James Mwangi</h4>
                        <p>Corporate Event</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-card">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"Best photography team in Nakuru! They were punctual, professional, and delivered our photos within a week. The quality is top-notch. Thank you Keen Media House!"</p>
                <div className="testimonial-author">
                    <div className="author-avatar">🎉</div>
                    <div className="author-info">
                        <h4>Grace Akinyi</h4>
                        <p>Birthday Party</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials