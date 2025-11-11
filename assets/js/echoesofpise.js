(function () {
  // piccola utility per non ricalcolare troppo spesso
  const debounce = (fn, wait = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), wait);
    };
  };

  // calcolo line-height numerico
  function getLineHeightPx(el) {
    const cs = getComputedStyle(el);
    const lh = cs.lineHeight;
    if (lh === 'normal') {
      const fs = parseFloat(cs.fontSize) || 16;
      return fs * 1.4; // fallback "normal"
    }
    return parseFloat(lh) || 28;
  }

  function fitQuoteToSidebar(card) {
    const details = card.querySelector('.quote-details');
    const quote   = card.querySelector('.quote-details .echo-quote');
    const sidebar = card.querySelector('.opinion-sidebar');
    if (!details || !quote || !sidebar) return;

    const sidebarH   = sidebar.getBoundingClientRect().height;
    const lineHeight = getLineHeightPx(quote);

    // quante righe entrano nell’altezza della sidebar
    let lines = Math.floor(sidebarH / lineHeight);

    // un minimo “di sicurezza” per evitare anteprime troppo corte
    if (!Number.isFinite(lines) || lines < 3) lines = 3;

    details.style.setProperty('--echo-lines', lines);
    details.style.setProperty('--echo-lineheight', lineHeight + 'px');
  }

  function recomputeAll() {
    document.querySelectorAll('.opinion-box').forEach(fitQuoteToSidebar);
  }

  // ricalcola: on load, on resize, quando caricano le immagini, e se cambia la sidebar
  const init = () => {
    recomputeAll();

    window.addEventListener('resize', debounce(recomputeAll, 120));

    // immagini avatar: al load può cambiare l’altezza della sidebar
    document.querySelectorAll('.opinion-sidebar img').forEach(img => {
      if (!img.complete) img.addEventListener('load', recomputeAll, { once: true });
    });

    // se la sidebar cambia dimensione per qualsiasi motivo
    if ('ResizeObserver' in window) {
      document.querySelectorAll('.opinion-sidebar').forEach(side => {
        const ro = new ResizeObserver(debounce(() => fitQuoteToSidebar(side.closest('.opinion-box')), 60));
        ro.observe(side);
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
