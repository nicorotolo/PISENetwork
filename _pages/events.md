---
layout: splash
title: "Upcoming Events"
permalink: /events/
header:
  overlay_image: "/assets/images/events_banner.jpg" # Replace with path to your events banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Explore upcoming events organized by the PISE Network"
---

<nav class="custom-nav">
  <ul>
    <li><a href="{{ site.baseurl }}/">Home</a></li>
    <li><a href="{{ site.baseurl }}/events/">Events</a></li>
    <li><a href="{{ site.baseurl }}/resources/">Resources</a></li>
    <li><a href="{{ site.baseurl }}/board/">Board</a></li>
    <li><a href="{{ site.baseurl }}/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<div class="events-container">
  <div class="event-item">
    <h3>Upcoming Event: PISE Network Annual Meetup</h3>
    <p>Date: December 15, 2024</p>
    <p>Location: Ca' Foscari University</p>
    <p>Description: Join us for a day of networking, panel discussions, and more. Open to all PISE students and alumni.</p>
  </div>

  <div class="event-item">
    <h3>Workshop: Career Pathways in Economics</h3>
    <p>Date: January 10, 2025</p>
    <p>Location: Online</p>
    <p>Description: This online workshop will provide insights into different career paths for PISE graduates in economics.</p>
  </div>

  <!-- Add more events here as needed -->
</div>

> **Note:** Keep checking back for updates on more events!

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

.events-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.event-item {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.event-item h3 {
  margin-top: 0;
  color: #9b1c31;
}

.event-item p {
  margin: 5px 0;
}
</style>
