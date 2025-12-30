function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <h2>FitLife</h2>
        <nav>
          <a href="#" style={{ color: "white", marginRight: "10px" }}>Home</a>
          <a href="#" style={{ color: "white", marginRight: "10px" }}>Features</a>
          <a href="#" style={{ color: "white" }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Live a Healthier Life</h1>
        <p>FitLife helps you track workouts, diet, and progress.</p>
        <button style={{ marginTop: "15px", padding: "10px" }}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">🏃 Workout Tracking</div>
        <div className="feature">📊 Health Reports</div>
        <div className="feature">🥗 Diet Planner</div>
      </section>

      {/* Signup Form */}
      <section className="signup">
        <h2>Sign Up Now</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Join Free</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 FitLife. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
