export async function loadView(viewName) {
  const res = await fetch(`views/${viewName}.html`);
  const html = await res.text();
  document.getElementById('app').innerHTML = html;
}
