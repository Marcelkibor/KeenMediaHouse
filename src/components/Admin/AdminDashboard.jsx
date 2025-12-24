import React, { useEffect, useState } from "react";
import { GetBookingData } from "../Services/GetBookingData";
import { confirmBooking } from "../Services/ConfirmBooking";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [bookingData, setBookingData] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [confirmedBookings, setConfirmedBookings] = useState([]);

  const showSection = (section) => setActiveSection(section);

  const logout = () => {
    window.location.href = "/";
  };

  // Fetch bookings on mount
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const res = await GetBookingData();
        if (res && res.data) {
          setBookingData(res.data);
        } else {
          console.log("No booking data found.");
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookingData();
  }, []);

  // Update counts when bookingData changes
  useEffect(() => {
    setPendingBookings(bookingData.filter(b => b.status === "Pending"));
    setConfirmedBookings(bookingData.filter(b => b.status === "Confirmed"));
  }, [bookingData]);

  // Format date nicely
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
const handleConfirm = async (bookingId) => {
  const res = await confirmBooking(bookingId);
  if(!res){
    console.error("Failed to confirm booking.");
  }
};
  return (
    <div className="admin-container" id="adminDashboard">
      <nav className="admin-nav">
        <div className="admin-logo">KEEN ADMIN</div>
        <ul className="admin-menu">
          {["dashboard", "bookings", "team", "settings"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  showSection(section);
                }}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </nav>

      <div className="dashboard-content">

        {/* DASHBOARD SECTION */}
        {activeSection === "dashboard" && (
          <div className="content-section active">
            <div className="dashboard-header">
              <h1>Dashboard</h1>
              <p>Welcome back! Here's your business overview.</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-value">{bookingData.length}</div>
                <div className="stat-label">Total Bookings</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏳</div>
                <div className="stat-value">{pendingBookings.length}</div>
                <div className="stat-label">Pending Bookings</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-value">{confirmedBookings.length}</div>
                <div className="stat-label">Confirmed</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-value">KES 850K</div>
                <div className="stat-label">Monthly Revenue</div>
              </div>
            </div>

            <h2 style={{ margin: "2rem 0 1rem" }}>Recent Bookings</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Package</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center", padding: "30px" }}>
                        No bookings yet
                      </td>
                    </tr>
                  ) : (
                    bookingData.slice(0, 5).map((booking) => (  // Show only latest 5
                      <tr key={booking.id}>
                        <td>{booking.firstName} {booking.lastName}</td>
                        <td>{booking.service || "—"}</td>
                        <td>{formatDate(booking.date)}</td>
                        <td>
                          <span className={`status-badge status-${(booking.status || "Pending").toLowerCase()}`}>
                            {booking.status || "Pending"}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn">View</button>
                          {booking.status === "Pending" && (
                            <button className="action-btn confirm-btn" onClick={() => handleConfirm(booking.id)}>Confirm</button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ALL BOOKINGS SECTION */}
        {activeSection === "bookings" && (
          <div className="content-section active">
            <div className="dashboard-header">
              <h1>All Bookings</h1>
              <p>Manage all client bookings and appointments.</p>
            </div>

            <div className="section-tabs">
              <button className="tab-btn active">All ({bookingData.length})</button>
              <button className="tab-btn">Pending ({pendingBookings.length})</button>
              <button className="tab-btn">Confirmed ({confirmedBookings.length})</button>
              <button className="tab-btn">Completed (0)</button>
            </div>

            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package</th>
                    <th>Date</th>
                    <th>Team Member</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.length === 0 ? (
                    <tr><td colSpan="9" style={{textAlign:"center", padding:"30px"}}>No bookings found</td></tr>
                  ) : (
                    bookingData.map((booking) => (
                      <tr key={booking.id}>
                        <td>#{String(booking.id).padStart(3, '0')}</td>
                        <td>{booking.firstName} {booking.lastName}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.service || "—"}</td>
                        <td>{formatDate(booking.date)}</td>
                        <td>{booking.teamMember || "Unassigned"}</td>
                        <td>
                          <span className={`status-badge status-${(booking.status || "Pending").toLowerCase()}`}>
                            {booking.status || "Pending"}
                          </span>
                        </td>
                        <td>
                          {booking.status === "Pending" && (
                      <button
                        className="action-btn"
                        onClick={() => handleConfirm(booking.id)}   // ← ADD THIS LINE
                      >
                        Confirm
                      </button>
                    )}
                      <button className="action-btn delete">Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Team & Settings stay the same for now */}
        {activeSection === "team" && (
              <div className="content-section active" id="team">
                <div className="dashboard-header">
                  <h1>Team Management</h1>
                  <p>Manage team members and their availability.</p>
                </div>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-icon">👥</div><div className="stat-value">8</div><div className="stat-label">Total Team Members</div></div>
                  <div className="stat-card"><div className="stat-icon">✅</div><div className="stat-value">7</div><div className="stat-label">Available</div></div>
                  <div className="stat-card"><div className="stat-icon">📅</div><div className="stat-value">1</div><div className="stat-label">On Assignment</div></div>
                </div>
                <div className="data-table">
                  <table>
                    <thead>
                      <tr><th>Name</th><th>Role</th><th>Specialization</th><th>Status</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Meshack Kipchirchir</td><td>Manager</td><td>Operations & Client Relations</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Felix Agwenye</td><td>Photographer</td><td>Weddings & Events</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Edwin Koech</td><td>Photographer</td><td>Corporate & Lifestyle</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Meshack Mutai</td><td>Videographer</td><td>Cinematic Storytelling</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Brian Mely</td><td>Videographer</td><td>Dynamic Content</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Japheth Odhiambo</td><td>Drone Pilot</td><td>Aerial Photography</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Eugine</td><td>Video Editor</td><td>Post-Production</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                      <tr><td>Bradley</td><td>Sound Engineer</td><td>Audio Quality</td><td><span className="status-badge status-confirmed">Available</span></td><td><button className="action-btn">Edit</button></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
{activeSection === "settings" && (
              <div className="content-section active" id="settings">
                <div className="dashboard-header">
                  <h1>Settings</h1>
                  <p>Manage your admin account and website settings.</p>
                </div>
                <div className="empty-state">
                  <div className="empty-state-icon">⚙️</div>
                  <h2>Settings Coming Soon</h2>
                  <p>This section is under development.</p>
                </div>
              </div>
            )}

      </div>
    </div>
  );
};

export default AdminDashboard;