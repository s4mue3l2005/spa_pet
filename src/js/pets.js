import { apiRequest } from './api.js';

export async function getPetsByUser(userId) {
  return await apiRequest(`pets?userId=${userId}`);
}

export async function createPet(petData) {
  return await apiRequest('pets', 'POST', petData);
}

export async function deletePet(petId) {
  return await apiRequest(`pets/${petId}`, 'DELETE');
}
