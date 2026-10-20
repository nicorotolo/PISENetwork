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

<link rel="stylesheet" href="{{ '/assets/css/team-organigram.css?v=20261020' | relative_url }}">
<section class="pise-team" aria-labelledby="team-heading">
  <header class="pise-team__heading">
    <h2 id="team-heading">Our People</h2>
  </header>
  {% assign leadership = site.data.team | where: "team_category", "Leadership" %}
  <section class="pise-team__leadership" aria-labelledby="leadership">
    <h3 id="leadership">Leadership</h3>
    <div class="pise-team__leaders">
      {% for member in leadership %}
        {% include team-person.html member=member %}
      {% endfor %}
    </div>
  </section>
  {% assign grouped_teams = site.data.team | group_by: "team_category" %}
  <div class="pise-team__areas">
    {% for category in grouped_teams %}
      {% unless category.name == "Leadership" %}
        <section class="pise-team__area" aria-labelledby="{{ category.name | slugify }}">
          <h3 id="{{ category.name | slugify }}">{{ category.name }}</h3>
          <div class="pise-team__members">
            {% for member in category.items %}
              {% include team-person.html member=member %}
            {% endfor %}
          </div>
        </section>
      {% endunless %}
    {% endfor %}
  </div>
</section>
