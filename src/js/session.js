const KEY = 'currentUser';

export function setCurrentUser(user) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(KEY));
}

export function clearSession() {
  localStorage.removeItem(KEY);
}
