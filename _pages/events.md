---
layout: splash
title: "Board"
permalink: /board/
header:
  overlay_image: "/assets/images/banner_board.png"
  overlay_filter: 0.5
  caption: "Meet the team behind the PISE Network"
---

<nav class="custom-nav">
  <ul>
    <li><a href="/minimal-mistakes/">Home</a></li>
    <li><a href="/minimal-mistakes/events/">Events</a></li>
    <li><a href="/minimal-mistakes/resources/">Resources</a></li>
    <li><a href="/minimal-mistakes/board/">Board</a></li>
    <li><a href="/minimal-mistakes/collaborate/">Collaborate with Us</a></li>
  </ul>
</nav>

<h2 style="text-align: center; color: #9b1c31;">Our Team</h2>
<div class="board-container">
  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        <div>
          <img src="/assets/images/nicola_rotolo.jpg" alt="Nicola Rotolo">
          <h3>Nicola Rotolo</h3>
          <p>Co-Founder</p>
        </div>
      </div>
      <div class="card-face card-back">
        <div>
          <h3>Nicola Rotolo</h3>
          <p>MSc in Philosophy and Public Policy at the London School of Economics | MSc in Political Economy at Sapienza</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        <div>
          <img src="/assets/images/giorgio_sanders.jpg" alt="Giorgio Sanders">
          <h3>Giorgio Sanders</h3>
          <p>Co-Founder</p>
        </div>
      </div>
      <div class="card-face card-back">
        <div>
          <h3>Giorgio Sanders</h3>
          <p>MSc student at the London School of Economics</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        <div>
          <img src="/assets/images/member3.jpg" alt="Persona 3">
          <h3>Riccardo Gilioli</h3>
          <p>To be defined</p>
        </div>
      </div>
      <div class="card-face card-back">
        <div>
          <h3>Riccardo Gilioli</h3>
          <p>To be defined</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">
        <div>
          <img src="/assets/images/member4.jpg" alt="Persona 4">
          <h3>Simone Rizzo</h3>
          <p>To be defined</p>
        </div>
      </div>
      <div class="card-face card-back">
        <div>
          <h3>Simone Rizzo</h3>
          <p>To be defined</p>
        </div>
      </div>
    </div>
  </div>
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

.board-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;
}
.card-container {
  perspective: 1000px;
  margin: 20px;
}
.card {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card:hover {
  transform: rotateY(180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
}
.card-front {
  background-color: #fff;
}
.card-back {
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  padding: 20px;
  text-align: center;
}
img {
  width: 80%;
  height: auto;
  border-radius: 50%;
}
.card-front h3, .card-front p {
  margin: 10px 0;
}
</style>
