---
layout: splash
title: "PISE Network About Us"
permalink: /about-us/
header:
  overlay_image: "/assets/images/board_banner.jpg" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Meet the dedicated members of the PISE Network"
---

<nav class="custom-nav">
  <ul>
    <li><a href="{{ site.baseurl }}/">Home</a></li>
    <li><a href="{{ site.baseurl }}/about-us/">About Us</a></li>
    <li><a href="{{ site.baseurl }}/events/">Events</a></li>
    <li><a href="{{ site.baseurl }}/resources/">Resources</a></li>
    <li><a href="{{ site.baseurl }}/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<!-- Add the section title and divider -->
<div class="team-section">
  <h2>Our Team</h2>
  <hr>
</div>

<div class="board-member-container">
  <div class="board-member">
    <div class="board-card">
      <div class="board-card-front">
        <img src="{{ site.baseurl }}/assets/images/nicola_rotolo.jpg" alt="Nicola Rotolo">
        <h3>Nicola Rotolo</h3>
        <p class="board-position">Co-founder of the PISE Network</p>
      </div>
      <div class="board-card-back">
        <p>MSc in Philosophy and Public Policy at the London School of Economics | MSc in Political Economy at Sapienza</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/nicolarotolo/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/nicola.rotolo/profilecard/?igsh=MTJ2MDhjZXhmOTBu" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="board-member">
    <div class="board-card">
      <div class="board-card-front">
        <img src="{{ site.baseurl }}/assets/images/giorgio_sanders.jpg" alt="Giorgio Sanders">
        <h3>Giorgio Sanders</h3>
        <p class="board-position">Co-founder of the PISE Network</p>
      </div>
      <div class="board-card-back">
        <p>MSc student at the London School of Economics</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/giorgio-sanders-/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/giorgio_sanders?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="board-member">
    <div class="board-card">
      <div class="board-card-front">
        <img src="{{ site.baseurl }}/assets/images/riccardo_gilioli.jpg" alt="Riccardo Gilioli">
        <h3>Riccardo Gilioli</h3>
        <p class="board-position">To be defined</p>
      </div>
      <div class="board-card-back">
        <p>To be defined</p>
        <div class="social-links">
          <!-- Social links can be added here -->
        </div>
      </div>
    </div>
  </div>

  <div class="board-member">
    <div class="board-card">
      <div class="board-card-front">
        <img src="{{ site.baseurl }}/assets/images/simone_rizzo.jpg" alt="Simone Rizzo">
        <h3>Simone Rizzo</h3>
        <p class="board-position">To be defined</p>
      </div>
      <div class="board-card-back">
        <p>To be defined</p>
        <div class="social-links">
          <!-- Social links can be added here -->
        </div>
      </div>
    </div>
  </div>
</div>

<div class="note" style="text-align: center; font-size: 1.2em; color: #333; margin-top: 30px;">
  <strong>Note:</strong> More team members will be added soon as the team grows.
</div>

<!-- Our Mission Section -->
<div class="mission-section">
  <h2>Our Mission</h2>
  <p>
    Our mission is to foster a collaborative community among students and alumni of the PISE program,
    promoting knowledge exchange, networking opportunities, and professional growth. Through events,
    resources, and collaboration, we aim to support each member in achieving their academic and
    career aspirations.
  </p>
</div>

<!-- Our Story Section -->
<div class="story-section">
  <h2>Our Story</h2>
  <p>
    Founded by a group of passionate students, the PISE Network was born from a shared vision to
    create a lasting support system for students and graduates. With roots in Ca' Foscari University,
    we are committed to building a strong, inclusive, and active community that grows together.
  </p>
</div>

<style>
.custom-nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: rgba(240, 240, 240, 0.9);
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.custom-nav ul {
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.custom-nav li {
  flex: 1;
  text-align: center;
}
.custom-nav a {
  display: block;
  color: #9b1c31; 
  font-size: 1em;
  background-color: rgba(240, 240, 240, 0.9);
  text-decoration: none;
  padding: 10px 20px;
  margin: 0;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}
.custom-nav a:hover {
  background-color: #e3c8c1;
  transform: scale(1.05);
}

.team-section {
  text-align: center;
  margin-bottom: 40px;
}

.team-section h2 {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.team-section hr {
  width: 100px;
  height: 3px;
  background-color: #9b1c31;
  border: none;
  margin: 0 auto;
}

.board-member-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.board-member {
  width: 250px;
  margin: 20px;
}

.board-card {
  perspective: 1000px;
}

.board-card-front, .board-card-back {
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.board-card-front {
  background-color: #fff;
  text-align: center;
}

.board-card-back {
  background-color: #f9f9f9;
  text-align: center;
  transform: rotateY(180deg);
}

.board-position {
  color: #9b1c31;
  font-weight: bold;
}

.mission-section, .story-section {
  padding: 40px 20px;
  margin: 20px auto;
  max-width: 800px;
  text-align: center;
}

.mission-section h2, .story-section h2 {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.mission-section p, .story-section p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}
</style>
