import { loadView } from './ui.js';
import { getCurrentUser } from './session.js';
import { renderDashboard } from './dashboard.js';

const routes = {
  '': () => loadView('landingView'),
  '#login': () => loadView('loginView'),
  '#register': () => loadView('registerView'),
  '#dashboard': () => renderDashboard(),
};

function handleRoute() {
  const route = window.location.hash || '';
  const render = routes[route] || (() => loadView('404View'));
  render();
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
