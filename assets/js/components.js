// ─────────────────────────────────────────────────────────────
//  components.js  —  injects shared nav + footer into every page
//  Usage in each HTML file: <script> initPage('home') </script>
//  Pass the current page key: 'home' | 'about' | 'works' | 'achievements'
// ─────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { key: 'home',         label: 'Home',         href: 'index.html' },
  { key: 'about',        label: 'About',         href: 'about.html' },
  { key: 'works',        label: 'Relevant Works', href: 'works.html' },
  { key: 'achievements', label: 'Achievements',  href: 'achievements.html' },
];

function renderNav(activePage) {
  const links = NAV_ITEMS.map(item => `
    <li>
      <a href="${item.href}" class="${item.key === activePage ? 'active' : ''}">
        ${item.label}
      </a>
    </li>
  `).join('');

  return `
    <nav class="nav">
      <a href="index.html" class="nav-logo">Gion Terrence Pozon</a>
      <ul class="nav-links" id="navLinks">
        ${links}
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <p>Gion Terrence Pozon &mdash; Jose Rizal University &mdash; BS Computer Engineering</p>
      <p style="margin-top: 0.25rem; font-size: 0.775rem;">&copy; ${year}. All rights reserved.</p>
    </footer>
  `;
}

function initPage(activePage) {
  // Inject nav before everything
  const navEl = document.createElement('div');
  navEl.innerHTML = renderNav(activePage);
  document.body.prepend(navEl.firstElementChild);

  // Inject footer at the end
  const footerEl = document.createElement('div');
  footerEl.innerHTML = renderFooter();
  document.body.appendChild(footerEl.firstElementChild);

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}
