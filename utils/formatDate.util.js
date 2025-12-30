/*
  File: formatDate.util.js
  Descrição: Formata um objeto Date para o padrão dd-mm-aa.
*/

export const formatDateUtil = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
  const year = String(date.getFullYear()).slice(-2); // Pega os últimos 2 dígitos do ano

  return `${day}-${month}-${year}`;
}