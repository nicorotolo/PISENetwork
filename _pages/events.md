---
layout: splash
title: "Upcoming Events"
permalink: /events/
header:
  overlay_image: "/assets/images/events_banner.jpg" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Join us at our upcoming events and gatherings"
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

<!-- Calendar Section -->
<div class="calendar-section">
  <h2>Event Calendar</h2>
  <!-- Embed or link your calendar here -->
  <iframe src="YOUR_CALENDAR_LINK" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
</div>

<!-- Button to Add Events to Calendar -->
<div class="add-calendar-button">
  <a href="YOUR_CALENDAR_ICS_LINK" class="button">Add the Events to Your Calendar</a>
</div>

<!-- Division Line -->
<hr>

<!-- Next Events Section -->
<div class="next-events">
  <h2>Next Events</h2>

  <!-- Example of Next Event -->
  <div class="event">
    <h3>Event Title 1</h3>
    <p>Date: November 20, 2024</p>
    <p>Location: Online / Location Name</p>
    <p>Description: Join us for an insightful discussion on [Topic]. Engage with experts and network with peers.</p>
  </div>

  <div class="event">
    <h3>Event Title 2</h3>
    <p>Date: December 10, 2024</p>
    <p>Location: Conference Hall, University</p>
    <p>Description: A workshop focused on career skills and networking for PISE students and alumni.</p>
  </div>

  <!-- Additional events can be added here in the same structure -->
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

.calendar-section {
  text-align: center;
  margin: 20px 0;
}
.add-calendar-button {
  text-align: center;
  margin: 20px 0;
}
.add-calendar-button .button {
  background-color: #9b1c31;
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}
.add-calendar-button .button:hover {
  background-color: #e3c8c1;
  transform: scale(1.05);
}

hr {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 20px 0;
}

.next-events {
  margin: 20px;
}
.next-events h2 {
  font-size: 1.8em;
  color: #9b1c31;
}
.event {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.event h3 {
  font-size: 1.5em;
  color: #333;
}
</style>
