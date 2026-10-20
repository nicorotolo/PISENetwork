---
title: "Editorial Call Archive"
layout: splash
article_likes: false
comments: false
share: false
permalink: /editorial/open-contributions/
header:
  overlay_image: "/assets/images/editorial_banner.jpg"
  overlay_filter: 0.5
  caption: "Past themes and contributions from the PISE community"
---

<link rel="stylesheet" href="{{ '/assets/css/editorial-call-archive.css?v=20261020' | relative_url }}">
<section class="pise-call-archive" aria-labelledby="archive-heading">
  <div class="pise-call-archive__intro">
    <h2 id="archive-heading">Past editorial calls</h2>
    <p>Explore the themes of our previous calls for contributions. These calls are closed; their briefs remain available to read.</p>
  </div>
  {% include open_contributions_archive_list.html %}
  <div class="pise-call-archive__back">
    <a class="pise-btn pise-btn--secondary" href="{{ '/editorial/' | relative_url }}">Back to Editorial</a>
  </div>
</section>
