(function () {
  if (window.__chosenMotion) return;
  window.__chosenMotion = true;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';
  var FROM = { opacity: 0, transform: 'translateY(28px)' };
  var TO = { opacity: 1, transform: 'none' };
  var holds = new WeakMap();

  function hold(el) {
    if (reduce || holds.has(el)) return;
    holds.set(el, el.animate([FROM, FROM], { duration: 1e9 }));
  }
  function release(el, delay) {
    var h = holds.get(el);
    if (h) h.cancel();
    holds.set(el, null);
    if (!reduce) el.animate([FROM, TO], { duration: 720, delay: delay || 0, easing: EASE, fill: 'backwards' });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      var d = +(el.getAttribute('data-reveal') || 0);
      if (el.hasAttribute('data-stagger')) {
        Array.prototype.forEach.call(el.children, function (c, i) { release(c, d + i * 80); });
      } else release(el, d);
      if (el.hasAttribute('data-count')) countUp(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function countUp(el) {
    var orig = el.textContent, n = parseInt(orig.replace(/\D/g, ''), 10);
    if (!n || reduce) return;
    var t0 = performance.now(), dur = 1200;
    function fmt(v) { return orig.replace(/[\d\s]+\d/, String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')); }
    (function step(t) {
      var p = Math.min(1, (t - t0) / dur), v = Math.round(n * (1 - Math.pow(1 - p, 3)));
      el.textContent = p < 1 ? fmt(v) : orig;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function setup(el) {
    if (el.__m) return;
    el.__m = true;
    if (el.hasAttribute('data-reveal')) {
      if (el.hasAttribute('data-stagger')) Array.prototype.forEach.call(el.children, hold); else hold(el);
      io.observe(el);
    }
    if (el.hasAttribute('data-marquee') && !reduce) {
      var a = el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: (+el.getAttribute('data-marquee') || 30) * 1000, iterations: Infinity });
      el.addEventListener('mouseenter', function () { a.updatePlaybackRate(0.2); });
      el.addEventListener('mouseleave', function () { a.updatePlaybackRate(1); });
    }
    if (el.hasAttribute('data-float') && !reduce) {
      var amp = +(el.getAttribute('data-float') || 10);
      el.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-' + amp + 'px)' }, { transform: 'translateY(0)' }], { duration: 4200 + amp * 120, iterations: Infinity, easing: 'ease-in-out', delay: -Math.random() * 3000 });
    }
    if (el.hasAttribute('data-zoom')) {
      var img = el.querySelector('img');
      if (img) {
        var z;
        el.addEventListener('mouseenter', function () { z = img.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.07)' }], { duration: 700, easing: EASE, fill: 'forwards' }); });
        el.addEventListener('mouseleave', function () { if (z) z.reverse(); });
      }
    }
    if (el.hasAttribute('data-pop') && !reduce) {
      el.animate([{ transform: 'scale(.6)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 380, easing: EASE });
    }
    if (el.hasAttribute('data-glow')) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    }
    if (el.hasAttribute('data-tilt') && !reduce) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('rotate', 'none');
        el.style.setProperty('transform', 'perspective(900px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)');
      });
      el.addEventListener('pointerleave', function () { el.style.setProperty('transform', 'none'); });
    }
    if (el.hasAttribute('data-progress')) {
      var upd = function () {
        var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
        el.style.setProperty('transform', 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')');
      };
      window.addEventListener('scroll', upd, { passive: true }); upd();
    }
    if (el.hasAttribute('data-sticky-shadow')) {
      var s = function () { el.style.setProperty('box-shadow', window.scrollY > 8 ? '0 10px 30px rgba(18,12,22,.35)' : 'none'); };
      window.addEventListener('scroll', s, { passive: true }); s();
    }
  }
  var SEL = '[data-reveal],[data-marquee],[data-float],[data-zoom],[data-pop],[data-glow],[data-tilt],[data-progress],[data-sticky-shadow]';
  function scan(root) {
    if (root.nodeType !== 1) return;
    if (root.matches && root.matches(SEL)) setup(root);
    root.querySelectorAll && root.querySelectorAll(SEL).forEach(setup);
  }
  function start() {
    scan(document.body);
    new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(scan); }); }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
