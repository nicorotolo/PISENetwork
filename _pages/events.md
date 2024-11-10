---
layout: splash
title: "Events"
permalink: /events/
header:
  overlay_image: "/assets/images/banner_events.png" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Stay updated with the latest events organized by the PISE Network"
---

<nav class="custom-nav">
  <ul>
    <li><a href="/minimal-mistakes/">Home</a></li>
    <li><a href="/minimal-mistakes/board/">Board</a></li>
    <li><a href="/minimal-mistakes/events/">Events</a></li>
    <li><a href="/minimal-mistakes/resources/">Resources</a></li>
    <li><a href="/minimal-mistakes/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<hr style="border: none; border-top: 1px solid #e3c8c1; margin: 20px 0;">
<h2>Upcoming Events</h2>
<div class="event-list upcoming-events">
  <!-- All future events will be here -->
</div>

<h2>Past Events</h2>
<div class="past-events-container">
  <button class="toggle-past-events" onclick="togglePastEvents()">Show Past Events</button>
  <div class="event-list past-events" style="display: none;">
    <!-- All past events will be here -->
  </div>
</div>





<div class="countdown-buttons">
  <button onclick="scrollToEvent('event-1')" class="countdown-button">1st PISE Network Online Workshop: How to Write Your CV</button>
  <button onclick="scrollToEvent('event-2')" class="countdown-button">2nd PISE Network Online Workshop: How to Set Up Your LinkedIn Profile</button>
  <button onclick="scrollToEvent('event-3')" class="countdown-button">3rd PISE Network Online Workshop: Erasmus Tips and Tricks</button>
</div>

<div class="event-list upcoming-events">
  <div class="event" id="event-1">
    <h3>📅 1st PISE Network Online Workshop: How to Write Your CV</h3>
    <p><strong>Date:</strong> November 7, 2024</p>
    <p><strong>Time:</strong> 17:00 - 17:45</p>
    <p><strong>Location:</strong> Online (Google Meet)</p>
    <p>Discover key strategies to build a professional CV that highlights your strengths, showcases your experience, and catches the attention of recruiters.</p>
    <p><a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join with Google Meet</a></p>
  </div>

  <div class="event" id="event-2">
    <h3>📅 2nd PISE Network Online Workshop: How to Set Up Your LinkedIn Profile</h3>
    <p><strong>Date:</strong> December 12, 2024</p>
    <p><strong>Time:</strong> 17:00 - 17:45</p>
    <p><strong>Location:</strong> Online (Google Meet)</p>
    <p>Learn how to create a compelling LinkedIn profile that showcases your skills and experience, helping you connect with professionals and boost your career prospects.</p>
    <p><a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join with Google Meet</a></p>
  </div>
</div>

<div class="event-list past-events">
  <div class="event" id="event-3">
    <h3>📅 3rd PISE Network Online Workshop: Erasmus Tips and Tricks</h3>
    <p><strong>Date:</strong> February 6, 2025</p>
    <p><strong>Time:</strong> 17:00 - 17:45</p>
    <p><strong>Location:</strong> Online (Google Meet)</p>
    <p>Prepare for your Erasmus journey with tips on adapting to a new culture, managing your studies abroad, and making the most of this unique experience.</p>
    <p><a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join with Google Meet</a></p>
  </div>
</div>

  <div class="event" id="event-2">
    <h3>📅 2nd PISE Network Online Workshop: How to Set Up Your LinkedIn Profile</h3>
    <p><strong>Date:</strong> December 12, 2024</p>
    <p><strong>Time:</strong> 17:00 - 17:45</p>
    <p><strong>Location:</strong> Online (Google Meet)</p>
    <p>Learn how to create a compelling LinkedIn profile that showcases your skills and experience, helping you connect with professionals and boost your career prospects.</p>
    <p><a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join with Google Meet</a></p>
  </div>

  <div class="event" id="event-3">
    <h3>📅 3rd PISE Network Online Workshop: Erasmus Tips and Tricks</h3>
    <p><strong>Date:</strong> February 6, 2025</p>
    <p><strong>Time:</strong> 17:00 - 17:45</p>
    <p><strong>Location:</strong> Online (Google Meet)</p>
    <p>Prepare for your Erasmus journey with tips on adapting to a new culture, managing your studies abroad, and making the most of this unique experience.</p>
    <p><a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join with Google Meet</a></p>
  </div>
</div>

> **Note:** More events will be added soon, so keep an eye on this page!

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

.countdown-buttons {
  text-align: center;
  margin: 20px;
}
.countdown-button {
  background-color: #9b1c31;
  color: #fff;
  border: none;
  padding: 15px;
  margin: 10px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}
.countdown-button:hover {
  background-color: #e3c8c1;
  transform: scale(1.1);
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.event {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.event h3 {
  margin-top: 0;
}

.calendar-container {
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

  .past-events-container {
    text-align: center;
    margin: 20px 0;
  }
  .toggle-past-events {
    background-color: #9b1c31;
    color: #fff;
    border: none;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
  }
  .toggle-past-events:hover {
    background-color: #e3c8c1;
    transform: scale(1.05);
  }
</style>

<script>
  function scrollToEvent(eventId) {
    const element = document.getElementById(eventId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function togglePastEvents() {
    const pastEvents = document.querySelector('.past-events');
    const button = document.querySelector('.toggle-past-events');
    if (pastEvents.style.display === 'none') {
      pastEvents.style.display = 'block';
      button.textContent = 'Hide Past Events';
    } else {
      pastEvents.style.display = 'none';
      button.textContent = 'Show Past Events';
    }
  }
</script>
