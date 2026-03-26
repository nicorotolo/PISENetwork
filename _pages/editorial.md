---
layout: splash
title: "Editorial Section"
permalink: /editorial/
header:
  overlay_image: "/assets/images/editorial_banner.jpg"
  overlay_filter: 0.5
  caption: "Insights and Perspectives: Exploring the Thoughts of PISE Community"
---

{% include open_contributions_teaser.html %}
{%- assign editorial_articles = site.editorial | where_exp: "p", "p.content_type != 'open_contribution'" -%}

<div class="container mx-auto px-4 py-8">
  <h1 class="page-title text-3xl font-bold mb-6">Our articles</h1>

  {%- comment -%}
  1) Costruisco una lista unica di categorie presenti nella collection "editorial"
  {%- endcomment -%}
  {%- assign cats_string = "" -%}
  {%- for p in editorial_articles -%}
    {%- for c in p.categories -%}
      {%- assign cats_string = cats_string | append: c | append: "," -%}
    {%- endfor -%}
  {%- endfor -%}
  {%- assign all_cats = cats_string | split: "," | uniq | sort -%}

  {%- comment -%}
  2) Barra di ricerca per titolo + select per categoria
  {%- endcomment -%}
  <div class="flex flex-col gap-3 mb-6">
    <!-- Barra di ricerca per titolo -->
    <input
      id="search-input"
      type="text"
      placeholder="Cerca per titolo..."
      class="w-full border border-gray-300 rounded-lg px-3 py-2"
      aria-label="Cerca per titolo"
    />

    <!-- Filtri categoria come bottoni, sotto la barra -->
    <div id="category-filter" class="category-filter">
      <button
        type="button"
        class="cat-badge is-active"
        data-cat=""
        aria-label="Show all categories"
      >
        All categories
      </button>
      {%- for cat in all_cats -%}
        {%- if cat != "" -%}
          {% assign slug = cat | slugify %}
          {% assign data = site.data.article_categories[slug] %}
          {% assign label = data.label | default: cat %}
          {% assign bg    = data.color | default: '#1f4fff' %}
          {% assign txt   = data.text  | default: '#ffffff' %}
          {% assign icon  = data.icon  | default: '' %}

          <button
            type="button"
            class="cat-badge"
            data-cat="{{ cat | downcase }}"
            style="--badge-bg: {{ bg }}; --badge-txt: {{ txt }};"
            aria-label="Filtra per categoria: {{ label }}"
          >
            {% if icon != '' %}<i class="{{ icon }}" aria-hidden="true"></i>{% endif %}
            {{ label }}
          </button>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>

  <ul id="article-list" class="article-list space-y-6">
    {% for post in editorial_articles reversed %}
      <li
        class="article-item article-card"
        data-title="{{ post.title | downcase }}"
        data-categories="{{ post.categories | join: '|' | downcase }}"
      >
        <div class="article-thumb">
          <a href="{{ post.url | relative_url }}" aria-label="{{ post.title }}">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          </a>

          {% if post.categories %}
            <div class="cat-badges">
              {% for raw in post.categories %}
                {% assign slug = raw | slugify %}
                {% assign cat  = site.data.article_categories[slug] %}

                {%- comment -%} Fallback se manca nel file dati {%- endcomment -%}
                {% assign label = cat.label | default: raw %}
                {% assign bg    = cat.color | default: '#1f4fff' %}
                {% assign txt   = cat.text  | default: '#ffffff' %}
                {% assign icon  = cat.icon  | default: '' %}

                <a
                  class="cat-badge"
                  href="{{ '/categories/' | append: slug | append: '/' | relative_url }}"
                  style="--badge-bg: {{ bg }}; --badge-txt: {{ txt }};"
                  title="Vedi altri in {{ label }}"
                >
                  {% if icon != '' %}<i class="{{ icon }}" aria-hidden="true"></i>{% endif %}
                  {{ label }}
                </a>
              {% endfor %}
            </div>
          {% endif %}
        </div>

        <div class="article-text">
          <h2 class="text-xl font-semibold leading-snug">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
  
          <p class="text-sm text-gray-500 mb-2">
            {{ post.date | date: "%B %d, %Y" }} •
            {% assign author_id = post.author | strip | downcase %}
            {% assign author_data = site.data.editorial.authors[author_id] %}

            {% if author_data and author_data.name %}
              by {{ author_data.name }}
            {% else %}
              by {{ post.author | default: "PISE Editorial Team" }}
            {% endif %}
          </p>


          <p class="article-excerpt">
            {{ post.content | strip_html | strip_newlines | truncate: 200 }}
          </p>
        </div>
      </li>

      {% unless forloop.last %}
        <hr class="article-divider">
      {% endunless %}
    {% endfor %}
  </ul>

<!-- Pagination controls -->
<nav id="pager" class="pager" aria-label="Paginazione articoli">
  <button class="pg-btn" data-act="prev" disabled>‹ Prev</button>
  <div class="pg-pages" id="pg-pages"></div>
  <button class="pg-btn" data-act="next" disabled>Next ›</button>
</nav>

<p id="pg-meta" class="pg-meta" aria-live="polite"></p>

<p id="no-results" class="hidden text-gray-500 mt-4">No article found.</p>
<script src="{{ '/assets/js/editorial-filters.js' | relative_url }}"></script>
