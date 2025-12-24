import React, { useState } from "react";
import {
  Camera,
  Video,
  Users,
  Award,
  MapPin,
  Calendar,
  Edit3,
  Briefcase,
} from "lucide-react";

export default function About() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Camera,
      title: "Event Photography & Videography",
      items: [
        "Weddings",
        "Traditional ceremonies (Koito, Ruracio, Itara, Dowry)",
        "Corporate events & conferences",
        "Birthday parties, anniversaries & celebrations",
      ],
    },
    {
      icon: Users,
      title: "Studio & Portrait Services",
      items: [
        "Individual portraits",
        "Family photoshoots",
        "Maternity & newborn sessions",
        "Graduation shoots",
        "Professional headshots",
      ],
    },
    {
      icon: Briefcase,
      title: "Commercial & Creative Services",
      items: [
        "Product photography",
        "Fashion & model shoots",
        "Real estate photography",
        "Corporate branding shoots",
        "Social media content creation",
      ],
    },
    {
      icon: Video,
      title: "Full Production Services",
      items: [
        "Professional video production",
        "Drone coverage",
        "Documentary-style shoots",
        "Event highlight reels & storytelling edits",
        "Cinematic wedding films",
      ],
    },
    {
      icon: Edit3,
      title: "Editing & Post-Production",
      items: [
        "Professional photo retouching",
        "Video editing & color grading",
        "Album design",
        "Digital delivery & archiving",
      ],
    },
  ];

  const stats = [
    { icon: Calendar, number: "2020", label: "Established" },
    { icon: Users, number: "8", label: "Skilled Professionals" },
    { icon: Award, number: "500+", label: "Events Covered" },
    { icon: MapPin, number: "Kenya", label: "Nationwide Service" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Header */}
        <header className="about-header">
          <h2 className="about-title">
            About <span className="highlight-text">Keen Media House</span>
          </h2>
          <div className="title-underline" />
          <p className="about-subtitle">
            A trusted creative powerhouse established in 2020 in Eldoret, Kenya
          </p>
        </header>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <Icon className="stat-icon" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="story-grid">
          <div className="story-image">
            <Camera className="story-camera-icon" />
            <div className="story-image-text">
              <p>Capturing Life, Culture & Emotion</p>
              <span>Since 2020 • Eldoret, Kenya</span>
            </div>
          </div>

          <div className="story-content">
            <h3>
              Where Every Moment Becomes a{" "}
              <span className="highlight-text">Masterpiece</span>
            </h3>

            <p>
              With <strong>8 skilled professionals</strong> and over{" "}
              <strong>500 successfully covered events</strong>, we have built a
              reputation for excellence and reliability.
            </p>

            <p>
              We capture life, culture, and emotion with unmatched artistry and
              precision.
            </p>

            <div className="story-actions">
              <button className="btn-primary">View Portfolio</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="services-section">
          <h3 className="services-title">
            Our Photography & Media <span className="highlight-text">Services</span>
          </h3>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <div
                  key={index}
                  className={`service-card ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h4>{service.title}</h4>
                  <ul>
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <h3>Let's Capture Your Story</h3>
          <p>
            Whether you're celebrating a milestone or elevating your brand, we
            ensure your story is captured beautifully.
          </p>
          <button className="btn-cta">Partner With Us Today</button>
        </div>

      </div>
    </section>
  );
}
