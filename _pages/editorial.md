---
layout: splash
title: "Editorial Section"
permalink: /editorial/
header:
  overlay_image: "/assets/images/editorial_banner.jpg"
  overlay_filter: 0.5
  caption: "Insights and Perspectives: Exploring the Thoughts of PISE Community"
---

<div class="container mx-auto px-4 py-8">
  <h1 class="page-title text-3xl font-bold mb-6">Our articles</h1>

  {%- comment -%}
  1) Costruisco una lista unica di categorie presenti nella collection "editorial"
  {%- endcomment -%}
  {%- assign cats_string = "" -%}
  {%- for p in site.editorial -%}
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
    {% for post in site.editorial reversed %}
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

<p id="no-results" class="hidden text-gray-500 mt-4">Nessun articolo trovato.</p>


<script>
// Filtro client-side per titolo e categorie (multi-selezione)
(function() {
  var input   = document.getElementById('search-input');
  var list    = document.getElementById('article-list');
  if (!list) return;

  var items   = Array.prototype.slice.call(list.querySelectorAll('.article-item'));
  var emptyMsg= document.getElementById('no-results');

  // --- BOTTONI CATEGORIA ---
  var catFilter  = document.getElementById('category-filter');
  var catButtons = catFilter ? Array.prototype.slice.call(catFilter.querySelectorAll('[data-cat]')) : [];
  var allBtn     = catFilter ? catFilter.querySelector('[data-cat=""]') : null;
  var activeCats = []; // array di categorie attive (lowercase, es. ["economics","philosophy"])

  // --- PAGINAZIONE ---
  var pager   = document.getElementById('pager');
  var btnPrev = pager ? pager.querySelector('[data-act="prev"]') : null;
  var btnNext = pager ? pager.querySelector('[data-act="next"]') : null;
  var pgPages = document.getElementById('pg-pages');

  var PAGE_SIZE = 10;
  var curPage = 1;
  var filtered = items.slice();

  function normalize(s){ return (s || '').toLowerCase().trim(); }

  function applyFilter(){
    var q   = normalize(input ? input.value : '');
    var selectedCats = activeCats.slice(); // copia

    filtered = items.filter(function(li){
      var title   = normalize(li.getAttribute('data-title') || '');
      var catsStr = (li.getAttribute('data-categories') || '').toLowerCase();
      var catsArr = catsStr ? catsStr.split('|') : [];

      var matchTitle = !q || title.indexOf(q) !== -1;

      var matchCat;
      if (selectedCats.length === 0) {
        // Nessuna categoria selezionata => non filtriamo per categoria
        matchCat = true;
      } else {
        // Almeno una categoria selezionata => l'articolo deve avere
        // almeno una categoria in comune
        matchCat = selectedCats.some(function(c) {
          return catsArr.indexOf(c) !== -1;
        });
      }

      return matchTitle && matchCat;
    });

    curPage = 1;
    render();
  }

  function render(){
    // Nascondi tutto
    items.forEach(function(li){ li.style.display = 'none'; });

    var total = filtered.length;
    if (emptyMsg) emptyMsg.classList.toggle('hidden', total > 0);

    var pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (curPage > pageCount) curPage = pageCount;
    if (curPage < 1) curPage = 1;

    var start = (curPage - 1) * PAGE_SIZE;
    var end   = Math.min(start + PAGE_SIZE, total);
    filtered.slice(start, end).forEach(function(li){ li.style.display = ''; });

    buildPager(pageCount);
    updateMeta(start, end, total);
  }

  function updateMeta(start, end, total){
    var meta = document.getElementById('pg-meta');
    if (!meta) return;
    if (total === 0) { meta.textContent = ''; return; }
    meta.textContent = 'Mostrati ' + (start + 1) + '–' + end + ' di ' + total + ' articoli';
  }

  function buildPager(pageCount){
    if (!pager || !pgPages) return;

    if (btnPrev) btnPrev.disabled = (curPage === 1);
    if (btnNext) btnNext.disabled = (curPage === pageCount || pageCount === 0);

    pgPages.innerHTML = '';
    if (pageCount <= 1) return;

    for (var p = 1; p <= pageCount; p++){
      var b = document.createElement('button');
      b.className = 'pg-num' + (p === curPage ? ' is-active' : '' );
      b.textContent = p;
      (function(page){
        b.addEventListener('click', function(){
          curPage = page;
          render();
          list.scrollIntoView({behavior:'smooth', block:'start'});
        });
      })(p);
      pgPages.appendChild(b);
    }
  }

  // Aggiorna classe has-active sul container
  function updateHasActive() {
    if (!catFilter) return;
    var hasSpecific = activeCats.length > 0;
    catFilter.classList.toggle('has-active', hasSpecific);
  }

  // --- EVENTI ---

  // Ricerca per titolo
  if (input) {
    input.addEventListener('input', applyFilter);
  }

  // Click sui bottoni categoria (multi-selezione)
  catButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var cat = (btn.getAttribute('data-cat') || '').toLowerCase();

      if (cat === '') {
        // Click su "Tutte le categorie": azzera tutto
        activeCats = [];
        catButtons.forEach(function(b) {
          if (b === btn) {
            b.classList.add('is-active');
          } else {
            b.classList.remove('is-active');
          }
        });
        updateHasActive();
        applyFilter();
        return;
      }

      // Click su una categoria normale: toggle
      var idx = activeCats.indexOf(cat);
      if (idx === -1) {
        activeCats.push(cat);
        btn.classList.add('is-active');
      } else {
        activeCats.splice(idx, 1);
        btn.classList.remove('is-active');
      }

      // Se non c'è nessuna categoria attiva, riattivo "Tutte le categorie"
      if (activeCats.length === 0) {
        if (allBtn) allBtn.classList.add('is-active');
      } else {
        if (allBtn) allBtn.classList.remove('is-active');
      }

      updateHasActive();
      applyFilter();
    });
  });

  // Paginazione Prev/Next
  if (btnPrev) {
    btnPrev.addEventListener('click', function(){
      if (curPage <= 1) return;
      curPage--;
      render();
      list.scrollIntoView({behavior:'smooth', block:'start'});
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', function(){
      curPage++;
      render();
      list.scrollIntoView({behavior:'smooth', block:'start'});
    });
  }

  // Stato iniziale: nessun filtro attivo → "Tutte le categorie" selezionato
  if (allBtn) {
    allBtn.classList.add('is-active');
  }
  updateHasActive();
  applyFilter();
})();
</script>
