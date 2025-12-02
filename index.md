---
layout: splash
title: "Welcome to the PISE Network"
permalink: /
header:
  overlay_image: "/assets/images/banner_san_marco.jpeg" # Updated path to banner image
  overlay_filter: 0.5 # Adjust the opacity of the overlay (0.0 to 1.0)
  caption: "Welcome to the PISE Community"
---

<div style="margin-top: 20px;"></div>

# PISE Network
Welcome to the official website of the PISE Network! We connect over 300 graduates and students from the Bachelor’s program in Philosophy, International Studies, and Economics (PISE) at Ca’ Foscari University. Our goal is to bridge the gap between alumni and current students by providing networking opportunities, professional growth, and activities that enrich the academic experience.

Stay tuned for upcoming events and exciting news about our community!

<div class="cta-container">
  <a href="{{ site.baseurl }}/collaborate/" class="cta-button">Get Involved</a>
  <a href="{{ site.baseurl }}/events/" class="cta-button">Upcoming Events</a>
</div>


<h2 style="text-align:center; color:#8c1d34; margin-top:3rem;">Echoes of PISE</h2>
<p style="text-align:center; font-style:italic; color:#555;">
  Thoughts and reflections from our students and alumni on the PISE degree
</p>


<div class="opinions-container container mx-auto px-4 py-8">
  {%- comment -%}
    Echoes of PISE: lettura dati e autori
    Dati:
    - _data/echoes_of_pise.yml  (o editorial/echoes_of_pise.yml)
    - _data/editorial/authors.yml
  {%- endcomment -%}
  {%- assign raw = site.data.echoes_of_pise 
     | default: site.data.echoesofpise
     | default: site.data.editorial.echoes_of_pise
     | default: site.data.editorial.echoesofpise -%}

  {%- if raw and raw.size > 0 -%}
    {%- for e in raw -%}
      {%- assign a = site.data.editorial.authors[e.author_id] -%}

      {%- assign _text = e.text -%}
      {%- assign _date = e.date | default: e.date_iso -%}
      {%- assign _name = e.author_name | default: a.name -%}
      {%- assign _role = e.author_role | default: a.role -%}
      {%- assign _bio  = e.author_bio  | default: a.bio -%}
      {%- assign _img  = e.author_image | default: a.avatar -%}
      {%- assign _in   = e.linkedin | default: a.linkedin -%}
      {%- assign _tw   = e.twitter  | default: a.twitter  -%}

      {% include echoesofpise.html
         text=_text
         date=_date
         author_name=_name
         author_bio=_bio
         author_role=_role
         author_image=_img
         linkedin=_in
         twitter=_tw
      %}
    {%- endfor -%}
  {%- else -%}
    <!-- Nessun dato trovato: controlla _data/echoes_of_pise.yml -->
  {%- endif -%}
</div>




<script src="{{ '/assets/js/echoesofpise.js' | relative_url }}"></script>


{% include carousel.html
   id="event2025"
   folder="2025-pise-event-series"
   title="The 2025 PISE Event Series"
   subtitle="April 7th to 9th, 2025, San Giobbe, Venice"
%}

{% include carousel.html
   id="inauguration2024"
   folder="2024-inauguration-year"
   title="The 2024/25 PISE Academic Year Inauguration"
   subtitle="September 9th, 2025, Ca' Dolfin, Venice"
%}

<div class="social-links">
  <a href="https://www.linkedin.com/groups/9804209/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" style="border-radius:10%;">
  </a>
  <a href="https://instagram.com/pise_network_and_alumni/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="30" style="border-radius:10%;">
  </a>
</div>
