import { getCurrentUser } from './session.js';
import { loadView } from './ui.js';

export async function renderDashboard() {
  const user = getCurrentUser();
  if (!user) {
    window.location.hash = '#login';
    return;
  }

  const view = user.rolId === 1 ? 'dashboardWorkerView' : 'dashboardCustomerView';
  await loadView(view);
}
