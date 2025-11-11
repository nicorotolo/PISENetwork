class Carousel {
  constructor(container) {
    this.container = container;
    this.track     = container.querySelector('.carousel-track');
    this.items     = Array.from(this.track.children);
    this.indicators = container.querySelector('.carousel-indicators');
    this.originalHTML = this.track.innerHTML;
    this.init();
  }

  init() {
    this.calcSpacing();
    this.buildLoop();
    this.buildIndicators();
    this.bindEvents();
    this.positionStart();
    this.updateEffects();
    this.startAuto();
    this.observeResize();
  }

calcSpacing() {
  // prendi il gap tra le slide dal CSS
  const { gap } = getComputedStyle(this.track);
  this.gap = parseFloat(gap);

  // larghezza + gap di ogni singola slide
  this.spacing = this.items[0].offsetWidth + this.gap;

  // calcola di quanto spostare lo scroll per centrare la slide
  this.centerOffset = (this.container.offsetWidth - this.spacing) / 2;

  // quante slide sono visibili nello schermo
  this.visible = Math.ceil(this.container.offsetWidth / this.spacing);

  // quante slide-clone creare prima e dopo
  this.clones  = this.visible + 1;
}


  buildLoop() {
    this.track.innerHTML = this.originalHTML;
    // prepend last clones
    for (let i = this.items.length - this.clones; i < this.items.length; i++) {
      this.track.insertBefore(this.items[i].cloneNode(true), this.track.firstChild);
    }
    // append first clones
    this.items.slice(0, this.clones).forEach(item => {
      this.track.appendChild(item.cloneNode(true));
    });
    this.allItems = this.track.querySelectorAll('.item');
  }

  buildIndicators() {
    this.indicators.innerHTML = '';
    this.items.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'indicator';
      if (i === 0) dot.classList.add('active');
      this.indicators.appendChild(dot);
    });
    this.dots = Array.from(this.indicators.children);
  }

  bindEvents() {
    let down=false, startX, startScroll;

    this.container.addEventListener('pointerdown', e => {
      down = true;
      startX = e.clientX;
      startScroll = this.container.scrollLeft;
      this.stopAuto();
      this.container.setPointerCapture(e.pointerId);
    });

    this.container.addEventListener('pointermove', e => {
      if (!down) return;
      this.container.scrollLeft = startScroll + (startX - e.clientX);
      this.updateEffects();
    });

    const finish = e => {
      if (!down) return;
      down = false;
      this.container.releasePointerCapture(e.pointerId);
      this.snap();
      this.startAuto();
    };
    this.container.addEventListener('pointerup', finish);
    this.container.addEventListener('pointercancel', finish);

    this.container.addEventListener('scroll', () => {
      const maxScroll = this.track.scrollWidth - this.container.offsetWidth;
      if (this.container.scrollLeft > maxScroll - this.spacing)
        this.container.scrollLeft = this.spacing * this.clones;
      if (this.container.scrollLeft < this.spacing * (this.clones - 1))
        this.container.scrollLeft = maxScroll - this.spacing * (this.clones - 1);
      this.updateEffects();
    });

    this.container.addEventListener('touchstart', () => this.stopAuto());
    this.container.addEventListener('touchend',   () => this.startAuto());
  }

  positionStart() {
    // base = spazio delle clones meno offset di centratura
    const base = this.spacing * this.clones - this.centerOffset;
    this.container.scrollLeft = base;
  }

  updateEffects() {
    const cx = this.container.getBoundingClientRect().left + this.container.offsetWidth/2;
    this.allItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const d    = Math.abs((rect.left + rect.width/2) - cx)/(this.container.offsetWidth/2);
      item.style.transform = `scale(${1 + Math.max(0,1-d)})`;
      item.style.opacity   = `${0.2 + Math.max(0,1-d)*0.8}`;
    });
    this.updateIndicators();
  }

  updateIndicators() {
    const base   = this.spacing * this.clones - this.centerOffset;
    const offset = this.container.scrollLeft - base;
    let idx = Math.round(offset / this.spacing);
    idx = Math.max(0, Math.min(this.items.length - 1, idx));
    this.dots.forEach((dot,i) => {
      dot.classList.toggle('active', i === idx);
    });
  }


  snap() {
    const base   = this.spacing * this.clones - this.centerOffset;
    const offset = this.container.scrollLeft - base;
    const idx    = Math.round(offset / this.spacing);
    const target = base + idx * this.spacing;
    this.animate(this.container.scrollLeft, target, 400);
  }

  animate(from, to, dur) {
    const start = performance.now();
    const el    = this.container;
    const step  = now => {
      const t    = Math.min(1, (now - start)/dur);
      const ease = t<0.5 ? 2*t*t : -1 + (4-2*t)*t;
      el.scrollLeft = from + (to-from)*ease;
      if (t<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  startAuto() {
    this.stopAuto();
    this.auto = setInterval(() => this.autoScroll(), 3000);
  }
  stopAuto() {
    clearInterval(this.auto);
  }
  
  autoScroll() {
    const base = this.spacing * this.clones - this.centerOffset;
    let idx = Math.round((this.container.scrollLeft - base) / this.spacing);
    idx = Math.min(idx + 1, this.items.length);
    const target = base + (idx < this.items.length 
      ? idx * this.spacing 
      : 0);
    this.animate(this.container.scrollLeft, target, 500);
  }

  observeResize() {
    new ResizeObserver(() => {
      this.stopAuto();
      this.calcSpacing();
      this.buildLoop();
      this.positionStart();
      this.updateEffects();
      this.startAuto();
    }).observe(this.container);
  }
}

// Initialize all carousels on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container')
          .forEach(el => new Carousel(el));
});
