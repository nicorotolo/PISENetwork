---
layout: default
title: "Categorie"
permalink: /categories/
---

<h1>Categorie</h1>

<div class="category-buttons" style="display:flex; flex-wrap:wrap; gap:1rem;">
  {% assign catdata = site.data.article_categories %}
  {% for k in catdata %}
    {% assign slug = k[0] %}
    {% assign item = k[1] %}
    <a class="cat-pill" href="{{ '/categories/' | append: slug | append: '/' | relative_url }}"
       style="background: {{ item.color }}; color: {{ item.text }}; padding:.75rem 1rem; border-radius: 999px; text-decoration:none; display:inline-flex; align-items:center; gap:.5rem;">
      {{ item.label }}
    </a>
  {% endfor %}
</div>
