import { useState } from "react";

const AdminLogin = () => {
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setShowError(false);
      console.log("Login successful");
      // redirect only after a slight delay (optional)
      window.location.href = "/admin-dashboard";
    } else {
      setShowError(true);
      console.log("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">KEEN ADMIN</div>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Admin Login</h2>
{showError&&<>
<p style={{color:'red'}}>Invalid Username or Password</p>
</>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#666", fontSize: "0.9rem" }}>
          Default: admin / admin123
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
