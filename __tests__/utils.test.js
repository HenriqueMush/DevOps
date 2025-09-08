const { sum, isEven, formatPriceBRL, slugify, calcCartTotal } = require('../src/utils');

describe('utils', () => {
  test('sum soma valores numéricos', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum('10', 5)).toBe(15);
  });

  test('isEven detecta pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(7)).toBe(false);
  });

  test('formatPriceBRL formata em Real brasileiro', () => {
    const brl = formatPriceBRL(1234.56);
    expect(brl).toMatch(/R\$\s?1\.234,56/);
  });

  test('slugify remove acentos e espaços', () => {
    expect(slugify('Olá Mundo!')).toBe('ola-mundo');
    expect(slugify('  Curso de DevOps 2025  ')).toBe('curso-de-devops-2025');
  });

  test('calcCartTotal soma itens (preço x quantidade)', () => {
    const items = [
      { price: 10, qty: 2 },
      { price: 5.5, qty: 3 }
    ];
    expect(calcCartTotal(items)).toBeCloseTo(10*2 + 5.5*3); // 31.5
  });
});
