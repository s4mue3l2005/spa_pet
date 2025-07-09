import { apiRequest } from './api.js';

export async function createStay(stayData) {
  stayData.valorTotal = calculateTotal(stayData.ingreso, stayData.salida, stayData.valorDia);
  return await apiRequest('stays', 'POST', stayData);
}

export function calculateTotal(ingreso, salida, valorDia) {
  const start = new Date(ingreso);
  const end = new Date(salida);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays * valorDia;
}
