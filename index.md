---
layout: splash
title: "Welcome to the PISE Network"
permalink: /
header:
  overlay_image: "/assets/images/banner_san marco.jpeg" # Path to your banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Connecting students and alumni of PISE at Ca' Foscari University"
---
<nav class="custom-nav">
  <ul>
    <li><a href="{{ site.baseurl }}/">Home</a></li>
    <li><a href="{{ site.baseurl }}/board/">Board</a></li>
    <li><a href="{{ site.baseurl }}/events/">Events</a></li>
    <li><a href="{{ site.baseurl }}/editorial/">Editorial</a></li>
    <li><a href="{{ site.baseurl }}/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>
<div style="margin-top: 20px;"></div>

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

  /* Carousel styles */
  .carousel {
    position: relative;
    max-width: 80%; /* Reduce the size of the carousel to make it blend better */
    margin: 20px auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .carousel img {
    width: 100%;
    display: none;
  }
  .carousel img.active {
    display: block;
  }
  .carousel .carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  .carousel .prev, .carousel .next {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1.5em;
  }

  /* Countdown timer styles */
  .countdown-container {
    text-align: center;
    padding: 40px 20px;
    background-color: #fff;
    margin: 40px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .countdown-container h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  .countdown {
    font-size: 2em;
    color: #9b1c31;
  }
</style>


  <div class="social-links">
    <a href="https://www.linkedin.com/groups/9804209/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" style="border-radius: 10%;"></a>
    <a href="https://instagram.com/pise_network_and_alumni/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="30" style="border-radius: 10%;"></a>
  </div>
  
</footer>

# PISE Network
Welcome to the official website of the PISE Network! We connect over 300 graduates and students from the Bachelor's program in Philosophy, International Studies, and Economics (PISE) at Ca' Foscari University.
Our goal is to bridge the gap between alumni and current students by providing networking opportunities, professional growth, and activities that enrich the academic experience.
**Follow us on social media:**
- [LinkedIn](https://www.linkedin.com/groups/9804209/)
- [Instagram](https://instagram.com/pise_network_and_alumni/)
Stay tuned for upcoming events and exciting news about our community!

<div class="carousel">
  <img src="{{ site.baseurl }}/assets/images/dolfin1.jpg" alt="Dolfin 1" class="active">
  <img src="{{ site.baseurl }}/assets/images/dolfin2.jpg" alt="Dolfin 2">
  <img src="{{ site.baseurl }}/assets/images/dolfin3.jpg" alt="Dolfin 3">
  <img src="{{ site.baseurl }}/assets/images/dolfin4.jpg" alt="Dolfin 4">
  <div class="carousel-controls">
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
  </div>
</div>
</div>

<div class="countdown-container">
  <h2>Next Event Countdown</h2>
  <div class="countdown" id="countdown"></div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".carousel .prev");
    const nextButton = document.querySelector(".carousel .next");

    function showSlides(index) {
      slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
      });
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlides(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlides(slideIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
    setInterval(nextSlide, 5000);

    // Show the initial slide
    showSlides(slideIndex);

    // Countdown Timer
    const countdownElement = document.getElementById("countdown");
    const eventDate = new Date("February 6, 2025 17:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        countdownElement.innerHTML = "Event has started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
  });
</script>
