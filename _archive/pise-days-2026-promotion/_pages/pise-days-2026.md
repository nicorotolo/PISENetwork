---
layout: splash
title: "PISE Days 2026"
permalink: /pise-days-2026/
header:
  overlay_image: "/assets/images/pise-days-2026/banner.jpg"
  overlay_filter: 0.38
  caption: "Innovation and Society | April 15-17, 2026 | Ca' Foscari University"
---

<style>
  .pise-days-browser {
    margin-top: 2.75rem;
  }

  .pise-days-page__jump {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.1rem 1.4rem;
    margin: 1.4rem 0 2.1rem;
  }

  .pise-days-page__jump-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
  }

  .pise-days-page__jump-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.78rem 1.8rem;
    min-width: min(33rem, 100%);
    border-radius: 0.75rem;
    border: 1px solid #142c8e;
    background: #ffffff;
    color: #142c8e !important;
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none !important;
    box-shadow: 0 10px 24px rgba(20, 44, 142, 0.12);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  }

  .pise-days-page__jump-link-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.55rem;
    font-size: 0.98em;
    line-height: 1;
  }

  .pise-days-page__jump-link:hover,
  .pise-days-page__jump-link:focus-visible {
    background: #142c8e;
    color: #ffffff !important;
    box-shadow: 0 16px 30px rgba(20, 44, 142, 0.2);
    transform: translateY(-1px);
  }

  .pise-days-page__jump-subnote {
    margin: 0;
    text-align: center;
    font-size: 0.92rem;
    line-height: 1.5;
    color: rgba(20, 44, 142, 0.7);
  }

  .pise-days-page__jump-subnote a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.14em;
  }

  .pise-days-page__jump-subnote a:hover {
    color: #142c8e;
  }

  .pise-days-browser__tabs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.25rem;
    align-items: flex-end;
    padding: 0 0.15rem;
  }

  .pise-days-browser__tab {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    min-width: 0;
    padding: 0.82rem 0.95rem 0.8rem;
    border: 1px solid rgba(20, 44, 142, 0.14);
    border-bottom: 0;
    border-radius: 22px 22px 0 0;
    color: rgba(20, 44, 142, 0.72);
    background: linear-gradient(180deg, #eaf0ff 0%, #dbe5ff 100%);
    cursor: pointer;
    transition: transform 0.18s ease, background-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
  }

  .pise-days-browser__tab:hover {
    color: #142c8e;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(20, 44, 142, 0.08);
  }

  .pise-days-browser__tab.is-active {
    z-index: 2;
    color: #142c8e;
    background: #fff;
    box-shadow: 0 -8px 20px rgba(20, 44, 142, 0.05);
  }

  .pise-days-browser__tab.is-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: #fff;
  }

  .pise-days-browser__tab-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.15rem;
    height: 2.15rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1;
    color: #fff;
    background: #142c8e;
    flex: 0 0 auto;
  }

  .pise-days-browser__tab-meta {
    display: flex;
    flex-direction: column;
    min-width: 0;
    align-items: flex-start;
  }

  .pise-days-browser__tab-label,
  .pise-days-browser__tab-date {
    margin: 0;
  }

  .pise-days-browser__tab-label {
    font-size: 1.08rem;
    font-weight: 800;
    line-height: 1.15;
    color: inherit;
  }

  .pise-days-browser__tab-date {
    margin-top: 0.18rem;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(20, 44, 142, 0.56);
  }

  .pise-days-browser__panel-wrap {
    position: relative;
    margin-top: -0.45rem;
    border: 1px solid rgba(20, 44, 142, 0.14);
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 18px 38px rgba(20, 44, 142, 0.06);
    overflow: hidden;
  }

  .pise-days-browser__panel {
    padding: 1.45rem 1.45rem 1.25rem;
  }

  .pise-days-browser__panel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.9rem;
    border-bottom: 1px solid rgba(20, 44, 142, 0.08);
  }

  .pise-days-browser__location-text {
    margin: 0;
  }

  .pise-days-browser__location {
    display: inline-flex;
    align-items: flex-start;
    gap: 0.6rem;
    min-width: 0;
    flex: 1 1 auto;
  }

  .pise-days-browser__location-icon {
    flex: 0 0 auto;
    margin-top: 0.16rem;
    font-size: 1.05rem;
    line-height: 1;
  }

  .pise-days-browser__location-text {
    font-size: 0.92rem;
    line-height: 1.25;
    color: rgba(15, 23, 42, 0.7);
  }

  .pise-days-browser__location a {
    display: inline-flex;
    align-items: baseline;
    gap: 0.45rem;
    color: #142c8e;
    text-decoration: none;
  }

  .pise-days-browser__location a:hover {
    text-decoration: underline;
  }

  .pise-days-browser__location-hint {
    display: inline-flex;
    align-items: center;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: rgba(20, 44, 142, 0.45);
    white-space: nowrap;
    transform: translateY(-0.02em);
  }

  .pise-days-browser__reserve {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    padding: 0.68rem 1.15rem;
    border-radius: 0.75rem;
    border: 1px solid #142c8e;
    background: #142c8e;
    color: #ffffff !important;
    font-size: 0.86rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    text-decoration: none !important;
    box-shadow: 0 12px 24px rgba(20, 44, 142, 0.16);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  }

  .pise-days-browser__reserve:hover,
  .pise-days-browser__reserve:focus-visible {
    background: #ffffff;
    color: #142c8e !important;
    box-shadow: 0 16px 30px rgba(20, 44, 142, 0.18);
    transform: translateY(-1px);
  }

  .pise-days-browser__list {
    display: grid;
    gap: 0.2rem;
  }

  .pise-days-browser__session {
    position: relative;
    display: grid;
    grid-template-columns: 148px minmax(0, 1fr);
    grid-template-areas:
      "side head"
      ". people";
    gap: 1.15rem;
    align-items: start;
    padding: 1.1rem 0;
    border-top: 1px solid rgba(20, 44, 142, 0.08);
  }

  .pise-days-browser__session:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .pise-days-browser__session-side {
    grid-area: side;
    display: grid;
    gap: 0.55rem;
    align-content: start;
    align-self: start;
  }

  .pise-days-browser__session-head {
    grid-area: head;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.85rem;
    min-height: 2.8rem;
    min-width: 0;
  }

  .pise-days-browser__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 2.8rem;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    font-size: 0.92rem;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
    color: #142c8e;
    background: #edf2ff;
  }

  .pise-days-browser__language {
    display: inline-flex;
    width: max-content;
    padding: 0.22rem 0.58rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #fff;
    background: #8c1d34;
  }

  .pise-days-browser__language--mobile {
    display: none;
  }

  .pise-days-browser__language--desktop {
    display: inline-flex;
    flex: 0 0 auto;
  }

  .pise-days-browser__title,
  .pise-days-browser__people {
    margin: 0;
  }

  .pise-days-browser__title {
    font-size: 1.28rem;
    font-weight: 800;
    line-height: 1.28;
    color: #142c8e;
    margin-top: 0;
  }

  .pise-days-browser__title--with-icon {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
  }

  .pise-days-browser__title-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1;
    flex: 0 0 auto;
  }

  .pise-days-programme__title .header-link {
    display: none !important;
  }

  .pise-days-programme__title {
    margin: 0 0 1.4rem;
    font-size: clamp(2rem, 3.2vw, 2.7rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-align: center;
    color: #142c8e;
  }

  .pise-days-browser__people {
    grid-area: people;
    display: grid;
    gap: 0.42rem;
    margin-top: 0;
  }

  .pise-days-browser__person {
    display: flex;
    align-items: flex-start;
    gap: 0.45rem;
    min-width: 0;
    font-size: 0.98rem;
    line-height: 1.45;
  }

  .pise-days-browser__person-icon {
    flex: 0 0 auto;
    font-size: 0.95rem;
    line-height: 1;
    transform: translateY(0.05em);
  }

  .pise-days-browser__person-name {
    color: #142c8e;
    font-weight: 500;
  }

  .pise-days-browser__person-copy {
    min-width: 0;
    line-height: 1.45;
  }

  .pise-days-browser__person-meta {
    color: rgba(15, 23, 42, 0.64);
  }

  @media (max-width: 760px) {
    .pise-days-browser__tabs {
      grid-template-columns: 1fr;
      gap: 0.35rem;
      padding: 0;
    }

    .pise-days-browser__tab {
      border-radius: 20px;
      border-bottom: 1px solid rgba(20, 44, 142, 0.14);
    }

    .pise-days-browser__tab.is-active::after {
      display: none;
    }

    .pise-days-browser__panel-wrap {
      margin-top: 0.45rem;
      border-radius: 24px;
    }

    .pise-days-browser__panel {
      padding: 1rem;
    }

    .pise-days-browser__location {
      width: 100%;
      min-width: 0;
    }

    .pise-days-browser__panel-head {
      display: grid;
      gap: 0.8rem;
      align-items: start;
    }

    .pise-days-browser__reserve {
      width: 100%;
    }

    .pise-days-browser__session {
      grid-template-columns: 1fr;
      grid-template-areas:
        "side"
        "head"
        "people";
      gap: 0.65rem;
    }

    .pise-days-browser__time {
      width: max-content;
      min-width: 96px;
    }

    .pise-days-browser__session-side {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .pise-days-browser__language {
      position: static;
      margin: 0;
    }

    .pise-days-browser__language--desktop {
      display: none;
    }

    .pise-days-browser__language--mobile {
      display: inline-flex;
    }

    .pise-days-browser__session-head {
      display: block;
      min-height: 0;
    }

    .pise-days-browser__people {
      gap: 0.5rem;
    }

    .pise-days-browser__person {
      gap: 0.38rem;
      font-size: 0.92rem;
      line-height: 1.4;
    }

    .pise-days-browser__person-icon {
      font-size: 0.88rem;
      transform: translateY(0.12em);
    }

    .pise-days-browser__person-copy {
      line-height: 1.4;
    }

    .pise-days-browser__person-name,
    .pise-days-browser__person-meta {
      display: inline;
    }

    .pise-days-browser__person-meta::before {
      content: " ";
    }
  }
</style>

<section class="pise-days-page">
  <section class="pise-days-promo">
    <div class="pise-days-promo__poster-layout">
      <h2>3 Days Of Talks<br>To Unlock<br>Innovation.</h2>
      <p class="pise-days-promo__lead pise-days-promo__lead--poster">
        With talks and conversations on <strong>Innovation and Society</strong>, the PISE Days bring together students,
        alumni, researchers and professionals in Venice for three days of exchange.
      </p>

      <div class="pise-days-promo__poster pise-days-promo__poster--centered">
        <div class="pise-days-promo__poster-card pise-days-promo__poster-card--poster">
          <img src="{{ '/assets/images/pise-days-2026/promo-box.jpg' | relative_url }}" alt="Venice view for PISE Days">
        </div>
      </div>

      <div class="pise-days-promo__footer">
        <div class="pise-days-promo__date-box">
          <span class="pise-days-promo__meta-emoji">&#128197;</span>
          <span>April 15-16-17, 2026</span>
        </div>
        <div class="pise-days-promo__location-box">
          <span class="pise-days-promo__meta-emoji">&#128205;</span>
          <span>Ca' Foscari University</span>
        </div>
      </div>
    </div>
  </section>

  <div class="pise-days-page__jump">
    <div class="pise-days-page__jump-item">
      <a class="btn pise-days-page__jump-link" href="#pise-days-programme-title">Read the full 3-day programme</a>
      <p class="pise-days-page__jump-subnote">or <a href="{{ '/assets/guides/PISE%20days%202026%20-%20full%203-day%20programme.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Download the full programme as a PDF</a></p>
    </div>
    <div class="pise-days-page__jump-item">
      <a class="btn pise-days-page__jump-link" href="#pise-days-reserve-day-1" data-programme-top-reserve>Reserve your seat for the day</a>
    </div>
  </div>

  <section class="pise-days-page__panel" style="padding: 0; border-radius: 0; background: transparent; border: 0; box-shadow: none;">
    <p>
      The PISE Days are the <strong>flagship annual event</strong> of the PISE Network: three days of conversations bringing
      together students, alumni, academics, institutions, and professionals to <strong>reflect on the ideas, challenges, and
      transformations shaping contemporary society</strong>.
    </p>
    <p>
      This year's theme, <strong>Innovation and Society</strong>, explores a simple but decisive question: how can we
      turn innovation into a force for broader opportunity, stronger institutions, and lasting social progress?
    </p>

    <div class="pise-days-page__highlights">
      <article class="pise-days-page__card">
        <h3>Three days</h3>
        <p><strong>April 15, 16 and 17 in Venice</strong>, with a format that supports both focused talks and broader exchanges.</p>
      </article>

      <article class="pise-days-page__card">
        <h3>One theme</h3>
        <p><strong>Innovation and Society</strong> as a common thread across policy, economics, institutions, media and civic life.</p>
      </article>

      <article class="pise-days-page__card">
        <h3>Many voices</h3>
        <p><strong>LSE, King's College, Crédit Agricole Italia, ARTE Generali, KPMG, MAG, Bank of Italy, and many more</strong> will bring the conversation into the room.</p>
      </article>
    </div>
  </section>

  {% assign programme = site.data.pise_days_2026.days %}
  <section class="pise-days-browser" aria-labelledby="pise-days-programme-title">
    <h2 id="pise-days-programme-title" class="pise-days-programme__title">Full three-day programme</h2>

    <div class="pise-days-browser__tabs" role="tablist" aria-label="PISE Days programme by day">
      {% for day in programme %}
        {% assign day_number = day.date_iso | date: "%d" %}
        {% assign day_name = day.date_iso | date: "%A" %}
        <button
          type="button"
          class="pise-days-browser__tab{% if forloop.first %} is-active{% endif %}"
          id="pise-days-browser-tab-{{ forloop.index }}"
          role="tab"
          aria-controls="pise-days-browser-panel-{{ forloop.index }}"
          aria-selected="{% if forloop.first %}true{% else %}false{% endif %}"
          data-programme-tab="{{ forloop.index }}">
          <span class="pise-days-browser__tab-number">{{ forloop.index }}</span>
          <span class="pise-days-browser__tab-meta">
            <span class="pise-days-browser__tab-label">{{ day_name }}</span>
            <span class="pise-days-browser__tab-date">{{ day_number }} April</span>
          </span>
        </button>
      {% endfor %}
    </div>

    <div class="pise-days-browser__panel-wrap">
      {% for day in programme %}
        <section
          class="pise-days-browser__panel"
          id="pise-days-browser-panel-{{ forloop.index }}"
          role="tabpanel"
          aria-labelledby="pise-days-browser-tab-{{ forloop.index }}"
          {% unless forloop.first %}hidden{% endunless %}>
          <div class="pise-days-browser__panel-head">
            <div class="pise-days-browser__location">
              <span class="pise-days-browser__location-icon" aria-hidden="true">&#128205;</span>
              <p class="pise-days-browser__location-text">
              <a href="https://www.google.com/maps/search/?api=1&query={{ day.maps_query | uri_escape }}" target="_blank" rel="noopener noreferrer">
                <span>{{ day.venue }}, {{ day.venue_detail }}</span>
                <span class="pise-days-browser__location-hint" aria-hidden="true">&#8599;</span>
              </a>
              </p>
            </div>
            {% if day.reserve_link %}
              <a class="pise-days-browser__reserve" id="pise-days-reserve-day-{{ forloop.index }}" href="{{ day.reserve_link }}" target="_blank" rel="noopener noreferrer">Reserve your seat for the day</a>
            {% endif %}
          </div>

          <div class="pise-days-browser__list">
            {% for session in day.sessions %}
              <article class="pise-days-browser__session">
                <div class="pise-days-browser__session-side">
                  <div class="pise-days-browser__time">{{ session.time }}</div>
                  <div class="pise-days-browser__language pise-days-browser__language--mobile">{{ session.language }}</div>
                </div>
                <div class="pise-days-browser__session-head">
                  <p class="pise-days-browser__title{% if session.title == 'Networking cocktail & farewells' %} pise-days-browser__title--with-icon{% endif %}">
                    {% if session.title == "Networking cocktail & farewells" %}
                      <span class="pise-days-browser__title-icon" aria-hidden="true">&#127864;</span>
                    {% endif %}
                    <span>{{ session.title }}</span>
                  </p>
                  <div class="pise-days-browser__language pise-days-browser__language--desktop">{{ session.language }}</div>
                </div>
                <div class="pise-days-browser__people">
                  {% for person in session.people %}
                    <div class="pise-days-browser__person">
                      <span class="pise-days-browser__person-icon" aria-hidden="true">&#128100;</span>
                      <span class="pise-days-browser__person-copy">
                        <span class="pise-days-browser__person-name">{{ person.name }}</span>
                        <span class="pise-days-browser__person-meta">{{ person.role }}, {{ person.organization }}</span>
                      </span>
                    </div>
                  {% endfor %}
                </div>
              </article>
            {% endfor %}
          </div>
        </section>
      {% endfor %}
    </div>
  </section>

</section>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-programme-tab]"));
    var panels = Array.prototype.slice.call(document.querySelectorAll(".pise-days-browser__panel[role='tabpanel']"));
    var topReserveLink = document.querySelector("[data-programme-top-reserve]");

    function syncTopReserveLink(index) {
      if (!topReserveLink) {
        return;
      }

      var targetId = "pise-days-reserve-day-" + (index + 1);
      topReserveLink.setAttribute("href", "#" + targetId);
    }

    function activateTab(index) {
      tabs.forEach(function (tab, tabIndex) {
        var active = tabIndex === index;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
      });

      panels.forEach(function (panel, panelIndex) {
        panel.hidden = panelIndex !== index;
      });

      syncTopReserveLink(index);
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(index);
      });
    });

    syncTopReserveLink(0);
  });
</script>
