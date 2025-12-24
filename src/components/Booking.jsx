import React from 'react';
import { useEffect } from "react";
import { PostBookingData } from "./Services/PostBookingData";

const Booking = () => {

  useEffect(() => {
    const bookingForm = document.getElementById("bookingForm");
    const successMessage = document.getElementById("successMessage");

    if (!bookingForm || !successMessage) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
  const formData = new FormData(bookingForm);
  const data = Object.fromEntries(formData.entries());
      successMessage.classList.add("active");
   let res = await PostBookingData(data);
if(res){
  console.log("Response from server:", res);
      bookingForm.reset();
      setTimeout(() => {
        successMessage.classList.remove("active");
      }, 5000);
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}
    };
    bookingForm.addEventListener("submit", handleSubmit);

    return () => {
      bookingForm.removeEventListener("submit", handleSubmit);
    };
  }, []);
    useEffect(() => {
        const dateInput = document.getElementById("date");
        if (dateInput) {
            const today = new Date().toISOString().split("T")[0];
            dateInput.min = today;
        }
    }, []);

  return (
    <section className="booking" id="booking">
      <h2 className="section-title">Book Your Session</h2>

      <div className="booking-form">
        <div className="success-message" id="successMessage">
          ✓ Thank you! Your booking request has been received. We'll contact you within 24 hours.
        </div>

        <form id="bookingForm" action="https://formspree.io/f/xblbrrrn" method="POST">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Photography Package *</label>
            <select id="service" name="service" required>
              <option value="">Select a package</option>
              <option value="classic">Classic Package - KES 7,000</option>
              <option value="deluxe">Deluxe Package - KES 15,000</option>
              <option value="premium">Premium Package - KES 30,000</option>
              <option value="supreme">Supreme Package - KES 45,000</option>
              <option value="royal">Royal Package - KES 65,000</option>
              <option value="custom">Custom Package - Contact for Quote</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Event Date *</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Event Time *</label>
              <input type="time" id="time" name="time" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="teamMember">Select Team Member *</label>
            <select id="teamMember" name="teamMember" required>
              <option value="">Choose your team member</option>
              <option value="felix">Felix Agwenye - Photographer</option>
              <option value="edwin">Edwin Koech - Photographer</option>
              <option value="meshack-mutai">Meshack Mutai - Videographer</option>
              <option value="brian">Brian Mely - Videographer</option>
              <option value="japheth">Japheth Odhiambo - Drone Pilot</option>
              <option value="eugine">Eugine - Video Editor</option>
              <option value="bradley">Bradley - Sound Engineer</option>
            </select>
          </div>

          <div id="teamMemberPreview" className="photographer-preview">
            <div className="photographer-info">
              <div className="photographer-avatar" id="previewAvatar">📷</div>
              <div className="photographer-details">
                <h4 id="previewName">Team Member Name</h4>
                <p id="previewRole">Role & Specialty</p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Event Location *</label>
            <input type="text" id="location" name="location" required />
          </div>

          <div className="form-group">
            <label htmlFor="details">Additional Details</label>
            <textarea id="details" name="details" />
          </div>
  <input type="hidden" name="status" value="Pending" />
          <button type="submit" className="submit-button">Submit Booking Request</button>
        </form>
      </div>
    </section>
  );
};
export default Booking;
