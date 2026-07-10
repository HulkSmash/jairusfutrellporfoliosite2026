document.addEventListener('DOMContentLoaded', function () {
  // Work dropdown
  var workItem = document.querySelector('.nav-item.has-dropdown');
  if (workItem) {
    var trigger = workItem.querySelector('.nav-trigger');
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      workItem.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      workItem.classList.remove('open');
    });
  }

  // Mobile nav toggle
  var mobileBtn = document.querySelector('.nav-toggle-mobile');
  var mainNav = document.querySelector('.main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      mainNav.classList.toggle('mobile-open');
    });
  }

  // About / My Experience toggle
  var toggle = document.querySelector('.toggle');
  if (toggle) {
    var options = toggle.querySelectorAll('.toggle-option');
    var panels = document.querySelectorAll('[data-panel]');
    options.forEach(function (opt, idx) {
      opt.addEventListener('click', function () {
        options.forEach(function (o) { o.classList.remove('active'); });
        opt.classList.add('active');
        toggle.setAttribute('data-active', idx);
        panels.forEach(function (p) {
          p.style.display = (p.getAttribute('data-panel') === opt.getAttribute('data-target')) ? '' : 'none';
        });
      });
    });
  }
});
