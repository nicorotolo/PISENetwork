---
layout: splash
title: "PISE Network Board"
permalink: /board/
header:
  overlay_image: "/assets/images/board_banner.jpg" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Meet the dedicated members of the PISE Network Board"
---

<nav class="custom-nav">
  <ul>
    <li><a href="{{ site.baseurl }}/">Home</a></li>
    <li><a href="{{ site.baseurl }}/board/">Board</a></li>
    <li><a href="{{ site.baseurl }}/events/">Events</a></li>
    <li><a href="{{ site.baseurl }}/resources/">Resources</a></li>
    <li><a href="{{ site.baseurl }}/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<div class="board-member-container">
  <div class="board-member">
    <img src="{{ site.baseurl }}/assets/images/nicola_rotolo.jpg" alt="Nicola Rotolo" width="200">
    <h3>Nicola Rotolo</h3>
    <p class="board-description">MSc in Philosophy and Public Policy at the London School of Economics | MSc in Political Economy at Sapienza</p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/nicolarotolo/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" style="border-radius: 10%;"></a>
      <a href="https://www.instagram.com/nicola.rotolo/profilecard/?igsh=MTJ2MDhjZXhmOTBu" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="30" style="border-radius: 10%;"></a>
    </div>
  </div>

  <div class="board-member">
    <img src="{{ site.baseurl }}/assets/images/giorgio_sanders.jpg" alt="Giorgio Sanders" width="200">
    <h3>Giorgio Sanders</h3>
    <p class="board-description">MSc student at the London School of Economics</p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/giorgio-sanders-/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" style="border-radius: 10%;"></a>
      <a href="https://www.instagram.com/giorgio_sanders?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="30" style="border-radius: 10%;"></a>
    </div>
  </div>
</div>

> **Note:** More board members will be added soon as the team grows.

<style>
.custom-nav {
  display: flex;               /* Use Flexbox to manage spacing */
  justify-content: space-evenly; /* Space links evenly across the bar */
  align-items: center;
  width: 100%;                 /* Make the navigation bar take full width */
  position: sticky;            /* Stick to the top of the viewport when scrolling */
  top: 0;
  background-color: rgba(240, 240, 240, 0.9); /* Light grey background */
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;                 /* Keep on top of other content */
}
.custom-nav ul {
  display: flex;               /* Flexbox to manage buttons alignment */
  width: 100%;
  list-style: none;            /* Remove bullet points */
  margin: 0;
  padding: 0;
}
.custom-nav li {
  flex: 1;                     /* Make each list item take up equal space */
  text-align: center;          /* Center the content of each list item */
}
.custom-nav a {
  display: block;              /* Allow padding on links to work like a button */
  color: #9b1c31;              /* Ca' Foscari red color */
  background-color: rgba(240, 240, 240, 0.9); /* Light grey button background */
  text-decoration: none;       /* Remove underline from links */
  padding: 10px 20px;          /* Space inside each button */
  margin: 0;                   /* Remove margin to avoid spacing between buttons */
  border-radius: 5px;          /* Rounded corners for button effect */
  font-weight: bold;           /* Bold text */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
}
.custom-nav a:hover {
  background-color: #e3c8c1;   /* Slightly darker beige on hover */
  transform: scale(1.05);      /* Slightly increase size on hover for emphasis */
}

.board-member-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Distribute items across the full width */
  gap: 20px;
  padding: 20px; /* Adds padding around the entire container */
  width: 100%;
}
.board-member {
  text-align: center;
  margin-bottom: 20px; /* Reduced bottom margin for better spacing */
  flex: 1 1 calc(33.33% - 20px); /* Allows three cards per row with spacing */
  box-sizing: border-box;
  max-width: 400px; /* Limit the maximum width for better visual balance */
}
.board-member img {
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  max-width: 100%;
  height: auto;
}
.board-member h3 {
  margin-top: 10px;
  font-size: 1.5em;
}
.board-description {
  font-size: 0.8em; /* Further shrink the font size for descriptions */
  margin: 10px 0;
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px; /* Space between social links */
}
.social-links a {
  text-decoration: none;
  color: #0073e6;
  font-weight: bold;
}
.social-links a:hover {
  text-decoration: underline;
}
</style>
