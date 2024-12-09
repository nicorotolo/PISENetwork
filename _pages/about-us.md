---
layout: splash
title: "About Us"
permalink: /about-us/
header:
  overlay_image: "/assets/images/board_banner.jpg" # Updated path to banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Learn more about the PISE Network and our mission"
---

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


<!-- Add the section title and divider -->
<div class="team-section">
  <h2>Our team</h2>
  <hr>
  <p style="text-align: center; font-size: 1.2em; color: #333; margin-top: 20px;">
    The PISE Network is a community of students and graduates from Ca' Foscari University's Philosophy, International Studies, and Economics program. Our mission is to foster collaboration, share resources, and create opportunities for personal and professional growth.
  </p>
</div>

<div class="team-section">
  <h2>Our Team</h2>
  <hr>
  <div class="business-card-container">
    {% for member in site.data.team %}
    <div class="business-card">
      <div class="business-card-inner">
        <!-- Front of the card -->
        <div class="business-card-front">
          <img src="{{ site.baseurl }}{{ member.image }}" alt="{{ member.name }}">
          <h3>{{ member.name }}</h3>
          <p class="board-position">{{ member.position }}</p>
        </div>
        <!-- Back of the card -->
        <div class="business-card-back">
          <p>{{ member.description }}</p>
          <div class="social-links">
            {% if member.linkedin %}
            <a href="{{ member.linkedin }}" target="_blank" aria-label="LinkedIn profile of {{ member.name }}">
              <i class="fab fa-linkedin"></i>
            </a>
            {% endif %}
            {% if member.instagram %}
            <a href="{{ member.instagram }}" target="_blank" aria-label="Instagram profile of {{ member.name }}">
              <i class="fab fa-instagram"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>




<div class="note" style="text-align: center; font-size: 1.2em; color: #333; margin-top: 30px;">
  <strong>Note:</strong> More team members will be added soon as the network grows.
</div>



