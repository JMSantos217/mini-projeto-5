// Exemplo de api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projeto-final-m4-pda.onrender.com/satisfactions',
});

export const fetchSatisfactions = async () => {
  const response = await api.get('/satisfaction');
  return response.data.satisfaction;
};
