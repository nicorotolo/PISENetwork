---
layout: splash
title: "Events"
permalink: /events/
header:
  overlay_image: "/assets/images/banner_events.png"
  overlay_filter: 0.5
  caption: "Stay updated with the latest events organized by the PISE Network"
---

{% assign now = "now" | date: "%s" %}

<div style="margin-top: 20px;"></div>

# Upcoming Events
Stay informed about our latest events, including workshops, networking sessions, and seminars. Below, you'll find our upcoming and past events organized by the PISE Network.


<div class="calendar-container" style="text-align: center;">
  <!-- Embedded Google Calendar -->
  <iframe
    src="https://calendar.google.com/calendar/embed?src=5bafd044d7d4022a0eb80ea3694717d3eff047c74b0a39783caaa43efdd20597%40group.calendar.google.com&ctz=Europe%2FRome"
    style="border: 0; width: 100%; height: 600px; frameborder: 0; scrolling: no;">
  </iframe>

  <!-- Add to Calendar Button -->
  <div class="add-to-calendar-container" style="margin-top: 20px;">
    <button class="button type1 add-to-calendar-button" onclick="window.open('https://calendar.google.com/calendar/u/0/r?cid=5bafd044d7d4022a0eb80ea3694717d3eff047c74b0a39783caaa43efdd20597@group.calendar.google.com', '_blank')">
    </button>
  </div>
</div>



<div class="accordion" id="eventsAccordion">
  <!-- Next Events -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="nextEventsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nextEvents" aria-expanded="false" aria-controls="nextEvents">
        Next Events
      </button>
    </h2>
    <div id="nextEvents" class="accordion-collapse collapse" aria-labelledby="nextEventsHeading">
      <div class="accordion-body">
        <h2>Next Events</h2>
        <div class="event-list">
          {% for event in site.events %}
            {% assign event_timestamp = event.date | date: "%s" %}
            {% if event_timestamp > now %}
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">{{ event.title }}</h5>
                  <p class="card-text">
                    <i class="bi bi-calendar-event"></i> <strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}<br>
                    <i class="bi bi-clock"></i> <strong>Time:</strong> {{ event.time }}<br>
                    <i class="bi bi-geo-alt"></i> <strong>Location:</strong> {{ event.location }}
                  </p>
                  <p>{{ event.description }}</p>
                  {% if event.link %}
                    <a href="{{ event.link }}" class="btn meet-events-button" target="_blank">Join Google Meet</a>
                  {% endif %}
                </div>
              </div>
            {% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>

  <!-- Past Events -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="pastEventsHeading">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pastEvents" aria-expanded="false" aria-controls="pastEvents">
        Past Events
      </button>
    </h2>
    <div id="pastEvents" class="accordion-collapse collapse" aria-labelledby="pastEventsHeading">
      <div class="accordion-body">
        <h2>Past Events</h2>
        <div class="event-list">
          {% for event in site.events %}
            {% assign event_timestamp = event.date | date: "%s" %}
            {% if event_timestamp <= now %}
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">{{ event.title }}</h5>
                  <p class="card-text">
                    <i class="bi bi-calendar-event"></i> <strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}<br>
                    <i class="bi bi-clock"></i> <strong>Time:</strong> {{ event.time }}<br>
                    <i class="bi bi-geo-alt"></i> <strong>Location:</strong> {{ event.location }}
                  </p>
                  <p>{{ event.description }}</p>
                  {% if event.link %}
                    <a href="{{ event.link }}" class="btn meet-events-button" target="_blank">Join Google Meet</a>
                  {% endif %}
                </div>
              </div>
            {% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>
