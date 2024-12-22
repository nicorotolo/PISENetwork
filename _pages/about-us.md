---
layout: splash
title: "About Us"
permalink: /about-us/
header:
  overlay_image: "/assets/images/board_banner.jpg" # Updated path to banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Learn more about the PISE Network and our mission"
---

<div class="roadmap">
  <!-- Our Mission -->
  <div class="milestone left">
    <div class="icon-left">
      <i class="fas fa-rocket"></i>
    </div>
    <div class="milestone-content">
      <h2>Our Mission</h2>
      <p>
        Our mission is to foster a collaborative community among students and alumni of the PISE program,
        promoting knowledge exchange, networking opportunities, and professional growth.
      </p>
    </div>
  </div>

  <!-- Our Vision -->
  <div class="milestone right">
    <div class="icon-right">
      <i class="fas fa-lightbulb"></i>
    </div>
    <div class="milestone-content">
      <h2>Our Vision</h2>
      <p>
        Through events, resources, and collaboration, we aim to support each member in achieving their
        academic and career aspirations.
      </p>
    </div>
  </div>

  <!-- Our Story -->
  <div class="milestone left">
    <div class="icon-left">
      <i class="fas fa-book"></i>
    </div>
    <div class="milestone-content">
      <h2>Our Story</h2>
      <p>
        Founded by Giorgio and Nicola, two passionate PISE Alumni, the PISE Network was born from a shared vision to
        create a lasting support system for students and graduates.
      </p>
    </div>
  </div>
</div>

<div class="team-section">
  <h2>Our People</h2>

  <div class="team-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h3>Index</h3>
      <ul class="sidebar-list">
        {% assign grouped_teams = site.data.team | group_by: "team_category" %}
        {% for category in grouped_teams %}
          <li>
            <a href="#{{ category.name | slugify }}">{{ category.name }}</a>
          </li>
        {% endfor %}
      </ul>
    </aside>

    <!-- Categories -->
    <div class="team-categories">
      {% for category in grouped_teams %}
        <div class="team-category-section" id="{{ category.name | slugify }}">
          <h3 class="team-category">{{ category.name }}</h3>
          <div class="business-card-container">
            {% for member in category.items %}
              <div class="business-card">
                <div class="business-card-inner">
                  <div class="business-card-front">
                    {% if member.image %}
                      <img src="{{ site.baseurl }}{{ member.image }}" alt="{{ member.name }}">
                    {% else %}
                      <div class="placeholder-circle"></div>
                    {% endif %}
                    <h3>{{ member.name }}</h3>
                    <p class="board-role">{{ member.role }}</p>
                  </div>
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
      {% endfor %}
    </div>
  </div>
</div>

<div class="note" style="text-align: center; font-size: 1.2em; color: #333; margin-top: 30px;">
  <strong>Note:</strong> More team members will be added soon as the network grows.
</div>
