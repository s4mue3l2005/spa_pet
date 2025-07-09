import { apiRequest } from './api.js';
import { setCurrentUser, clearSession } from './session.js';

export async function login(email, password) {
  const users = await apiRequest(`users?email=${email}`);
  const user = users.find(u => u.contrasena === password);
  if (!user) throw new Error('Credenciales incorrectas');
  setCurrentUser(user);
  window.location.hash = '#dashboard';
}

export async function register(userData) {
  const newUser = await apiRequest('users', 'POST', userData);
  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  window.location.hash = '#login';
}

export function logout() {
  clearSession();
  window.location.hash = '';
}
