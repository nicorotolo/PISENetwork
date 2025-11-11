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
  <h1 class="page-title text-3xl font-bold mb-6">Tutti gli articoli</h1>

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
  <div class="flex flex-col md:flex-row gap-3 mb-6">
    <input
      id="search-input"
      type="text"
      placeholder="Cerca per titolo..."
      class="w-full md:w-2/3 border border-gray-300 rounded-lg px-3 py-2"
      aria-label="Cerca per titolo"
    />

    <select id="category-select" class="w-full md:w-1/3 border border-gray-300 rounded-lg px-3 py-2" aria-label="Filtra per categoria">
      <option value="">Tutte le categorie</option>
      {%- for cat in all_cats -%}
        {%- if cat != "" -%}
          <option value="{{ cat | downcase }}">{{ cat }}</option>
        {%- endif -%}
      {%- endfor -%}
    </select>
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
// Filtro client-side per titolo e categoria
<script>
(function() {
  var input   = document.getElementById('search-input');
  var select  = document.getElementById('category-select');
  var list    = document.getElementById('article-list');
  var items   = list ? Array.prototype.slice.call(list.querySelectorAll('.article-item')) : [];
  var emptyMsg= document.getElementById('no-results');

  // Pagination elements
  var pager   = document.getElementById('pager');
  var btnPrev = pager.querySelector('[data-act="prev"]');
  var btnNext = pager.querySelector('[data-act="next"]');
  var pgPages = document.getElementById('pg-pages');

  var PAGE_SIZE = 10;
  var curPage = 1;
  var filtered = items.slice();

  function normalize(s){ return (s||'').toLowerCase().trim(); }

  function applyFilter(){
    var q   = normalize(input ? input.value : '');
    var cat = normalize(select ? select.value : '');

    filtered = items.filter(function(li){
      var title = li.getAttribute('data-title') || '';
      var cats  = li.getAttribute('data-categories') || '';
      var matchTitle = !q   || title.indexOf(q) !== -1;
      var matchCat   = !cat || cats.split('|').indexOf(cat) !== -1;
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

    // Aggiorna controlli e meta
    buildPager(pageCount);
    updateMeta(start, end, total);
  }

  function updateMeta(start, end, total){
    var meta = document.getElementById('pg-meta');
    if (!meta) return;
    if (total === 0) { meta.textContent = ''; return; }
    meta.textContent = 'Mostrati ' + (start + 1) + '–' + end + ' di ' + total + ' articoli';
  }

  // Mostra poche pagine con ellissi: [1] ... [p-1] [p] [p+1] ... [N]
  function buildPager(pageCount){
    btnPrev.disabled = (curPage === 1);
    btnNext.disabled = (curPage === pageCount || pageCount === 0);

    pgPages.innerHTML = '';

    function addNum(p){
      var b = document.createElement('button');
      b.className = 'pg-num' + (p === curPage ? ' is-active' : '');
      b.textContent = p;
      b.setAttribute('aria-label', 'Vai alla pagina ' + p);
      if (p === curPage) b.setAttribute('aria-current', 'page');
      b.addEventListener('click', function(){
        curPage = p; render();
        list.scrollIntoView({behavior:'smooth', block:'start'});
      });
      pgPages.appendChild(b);
    }
    function addEllipsis(){
      var span = document.createElement('span');
      span.className = 'pg-ellipsis';
      span.textContent = '…';
      span.setAttribute('aria-hidden', 'true');
      pgPages.appendChild(span);
    }

    // Nessuna pagina? esci.
    if (pageCount <= 1){ return; }

    var windowSize = 1; // quante pagine ai lati della corrente
    var first = 1, last = pageCount;

    // Sempre mostra 1
    addNum(first);

    // Ellissi dopo 1?
    if (curPage - windowSize > first + 1) addEllipsis();

    // Pagine vicine alla corrente
    var start = Math.max(first + 1, curPage - windowSize);
    var end   = Math.min(last - 1,  curPage + windowSize);
    for (var p = start; p <= end; p++) addNum(p);

    // Ellissi prima di N?
    if (curPage + windowSize < last - 1) addEllipsis();

    // Sempre mostra N (se >1)
    if (last > first) addNum(last);
  }


  function buildPager(pageCount){
    // Prev/Next
    btnPrev.disabled = (curPage === 1);
    btnNext.disabled = (curPage === pageCount || pageCount === 0);

    // Numeri pagina
    pgPages.innerHTML = '';
    for (var p = 1; p <= pageCount; p++){
      var b = document.createElement('button');
      b.className = 'pg-num' + (p === curPage ? ' is-active' : '');
      b.textContent = p;
      (function(page){
        b.addEventListener('click', function(){
          curPage = page;
          render();
          // scroll verso la lista per UX
          list.scrollIntoView({behavior:'smooth', block:'start'});
        });
      })(p);
      pgPages.appendChild(b);
    }
  }

  // Eventi
  if (input)  input.addEventListener('input',  applyFilter);
  if (select) select.addEventListener('change', applyFilter);
  btnPrev.addEventListener('click', function(){ curPage--; render(); list.scrollIntoView({behavior:'smooth', block:'start'}); });
  btnNext.addEventListener('click', function(){ curPage++; render(); list.scrollIntoView({behavior:'smooth', block:'start'}); });

  // Avvio
  applyFilter();
})();
</script>
