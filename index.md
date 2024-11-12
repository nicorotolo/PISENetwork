---
layout: splash
title: "Welcome to the PISE Network"
permalink: /
header:
  overlay_image: "/assets/images/banner_san marco.jpeg" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Connecting students and alumni of PISE at Ca' Foscari University"
  animate: true # Add animation to the header for a dynamic effect
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

<div style="margin-top: 20px;"></div>

# PISE Network
Welcome to the official website of the PISE Network! We connect over 300 graduates and students from the Bachelor’s program in Philosophy, International Studies, and Economics (PISE) at Ca’ Foscari University. Our goal is to bridge the gap between alumni and current students by providing networking opportunities, professional growth, and activities that enrich the academic experience. 

Stay tuned for upcoming events and exciting news about our community!

<div class="cta-container">
  <a href="{{ site.baseurl }}/collaborate/" class="cta-button">Get Involved</a>
  <a href="{{ site.baseurl }}/events/" class="cta-button">Upcoming Events</a>
</div>

<div class="social-links">
  <a href="https://www.linkedin.com/groups/9804209/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" style="border-radius: 10%;">
  </a>
  <a href="https://instagram.com/pise_network_and_alumni/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="30" style="border-radius: 10%;">
  </a>
</div>

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
  .cta-container {
    text-align: center;
    margin: 40px 0;
  }
  .cta-button {
    display: inline-block;
    margin: 10px;
    padding: 15px 25px;
    background-color: #9b1c31;
    color: #fff !important;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
  }
  .cta-button:hover {
    background-color: #e3c8c1;
    transform: scale(1.1);
  }
  .social-links {
    text-align: center;
    margin: 40px 0;
  }
  .social-links a {
    margin: 0 10px;
  }
  header.splash {
    animation: parallax 10s infinite alternate ease-in-out; /* Add parallax effect */
  }
  @keyframes parallax {
    0% {
      background-position: center top;
    }
    100% {
      background-position: center bottom;
    }
  }
</style>
