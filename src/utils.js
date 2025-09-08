function sum(a, b) {
  return Number(a) + Number(b);
}

function isEven(n) {
  return n % 2 === 0;
}

function formatPriceBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function slugify(str) {
  return String(str)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .trim()
    .replace(/\s+/g, '-');
}

function calcCartTotal(items) {
  // items: [{ price: number, qty: number }]
  return items.reduce((acc, it) => acc + it.price * it.qty, 0);
}

module.exports = { sum, isEven, formatPriceBRL, slugify, calcCartTotal };
