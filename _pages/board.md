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
    <li><a href="{{ site.baseurl }}/events/">Events</a></li>
    <li><a href="{{ site.baseurl }}/resources/">Resources</a></li>
    <li><a href="{{ site.baseurl }}/board/">Board</a></li>
    <li><a href="{{ site.baseurl }}/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<div class="board-member-container">
  {% for member in site.data.board_members %}
  <div class="board-member">
    <div class="board-card">
      <div class="board-card-front">
        <img src="{{ site.baseurl }}{{ member.image }}" alt="{{ member.name }}">
        <h3>{{ member.name }}</h3>
        <p class="board-position">{{ member.position }}</p>
      </div>
      <div class="board-card-back">
        <p>{{ member.description }}</p>
        <div class="social-links">
          {% if member.linkedin %}
          <a href="{{ member.linkedin }}" target="_blank"><i class="fab fa-linkedin"></i></a>
          {% endif %}
          {% if member.instagram %}
          <a href="{{ member.instagram }}" target="_blank"><i class="fab fa-instagram"></i></a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

> **Note:** More board members will be added soon as the team grows.

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

.board-member-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  width: 100%;
}
.board-member {
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  max-width: 400px;
  perspective: 1000px;
}
.board-card {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.board-card:hover {
  transform: rotateY(180deg);
}
.board-card-front, .board-card-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.board-card-front {
  background: #fff;
  padding: 20px;
  text-align: center;
}
.board-card-back {
  background: #9b1c31;
  color: #fff;
  padding: 20px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.board-card img {
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 150px;
  height: 150px;
}
.board-card h3 {
  margin-top: 10px;
  font-size: 1.5em;
}
.board-position {
  font-size: 1em;
  margin: 10px 0;
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.social-links a {
  color: #fff;
  font-size: 1.5em;
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
